import React from 'react'
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

interface Props {
    placeholder: string;
    required: boolean;
    id: string;
    name: string;
    children?: React.ReactNode;
}

const StartupFormInput = ({placeholder, required, id, name, children}: Props) => {
    return (
        <Input id={id} name={name} className="border-[3px] border-black-300 px-5 py-7 text-[18px] text-black-300 font-semibold rounded-full mt-3 placeholder:text-black-100 mb-5" required={required}
               placeholder={placeholder}>
            {children}
        </Input>
    )
}

const StartupFormTextArea = ({placeholder, required, id, name, children}: Props) => {
    return (
        <Textarea id={id} name={name} className="border-[3px] border-black-300 p-5 text-[18px] text-black-300 font-semibold rounded-[20px] mt-3 placeholder:text-black-100 mb-5" required={required}
                  placeholder={placeholder}>
            {children}
        </Textarea>
    )
}

export { StartupFormInput, StartupFormTextArea };
