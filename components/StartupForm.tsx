"use client";
import React, {useActionState, useState} from 'react';
import MDEditor from "@uiw/react-md-editor";
import {Button} from "@/components/ui/button";
import {Send} from "lucide-react";
import {StartupFormInput, StartupFormTextArea} from "@/components/StartupForm_Component";
import {formSchema} from "@/lib/validation";
import {z} from "zod";
import {useRouter} from "next/compat/router";
import {toast} from "react-hot-toast";
import {createPitch} from "@/lib/action";


const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("");
    const router = useRouter();

    const handleSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("link") as string,
                pitch,
            }
            await formSchema.parseAsync(formValues);
            const result = await createPitch(prevState, formData, pitch);
            if (result.status == "SUCCESS") {
                toast.success("Success: Your startup pitch has been created successfully!")
            }
            await router?.push(`/startup/${result.id}`);
            return result;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;
                setErrors(fieldErrors as unknown as Record<string, string>);

                toast.error("Error: Please check your inputs and try again")
                return {...prevState, error: "Validation failed.", status: "ERROR"};
            }
            toast.error("Error: An unexpected error has occurred")
            return {...prevState, error: "An unexpected error has occurred.", status: "ERROR"};
        } finally {

        }
    }
    const [state, formAction, isPending] = useActionState(handleSubmit,
        {
            error: '',
            status: "INITIAL",
        },
    );


    return (
        <form action={formAction} className="startup-form">
            <div>
                <label htmlFor={"title"} className={"startup-form_label"}>Title</label>
                <StartupFormInput id={"title"} name={"title"} required={true}
                                  placeholder={"Startup Title"}/>
                {errors.title && <p className={"startup-form-error"}>{errors.title}</p>}

                <label htmlFor={"description"} className={"startup-form_label"}>Description</label>
                <StartupFormTextArea id={"description"} name={"description"} required={true}
                                     placeholder={"Startup Description"}/>
                {errors.description && <p className={"startup-form_error"}>{errors.description}</p>}

                <label htmlFor={"category"} className={"startup-form_label"}>category</label>
                <StartupFormInput id={"category"} name={"category"} required={true}
                                  placeholder={"Startup Category (Tech, Health, Education,...)"}/>
                {errors.category && <p className={"startup-form_error"}>{errors.category}</p>}

                <label htmlFor={"link"} className={"startup-form_label"}>Image URL</label>
                <StartupFormInput id={"link"} name={"link"} required={true}
                                  placeholder={"Startup Image URL"}/>
                {errors.link && <p className={"startup-form_error"}>{errors.link}</p>}

                <div data-color-mode={"light"}>
                    <label htmlFor={"pitch"} className={"startup-form_label"}>pitch</label>
                    <MDEditor
                        id={"pitch"}
                        preview={"edit"}
                        height={300}
                        style={{borderRadius: 20, overflow: "hidden"}}
                        textareaProps={{placeholder: "Describe your idea here"}}
                        previewOptions={{disallowedElements: ["style"]}}
                        value={pitch}
                        onChange={(value) => setPitch(value as string)}/>
                    {errors.pitch && <p className={"startup-form_error"}>{errors.pitch}</p>}
                </div>
            </div>
            <Button type={"submit"} className={"startup-form_btn !rounded-full !cursor-pointer !font-bold !text-[18px]"}
                    disabled={isPending}>
                {isPending ? "Submitting..." : "Submit Your Idea"}
                <Send className={"size-6 ml-2"}/>
            </Button>
        </form>
    )
}
export default StartupForm
