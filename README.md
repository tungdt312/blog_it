# 🚀 Blogit

Blogit là một nền tảng web được xây dựng bằng **Next.js**, **TailwindCSS** và **Sanity CMS** để chia sẻ và khám phá các **Startup**.  
Người dùng có thể đăng startup mới, xem chi tiết startup, tìm kiếm và kết nối với cộng đồng khởi nghiệp.

---

## ✨ Tính năng chính
- 📝 Đăng bài startup với tiêu đề, mô tả, hình ảnh và thông tin tác giả.
- 🔍 Tìm kiếm startup theo tên hoặc danh mục.
- 📊 Theo dõi số lượt xem startup.
- 👤 Trang hồ sơ tác giả (author) hiển thị các startup đã chia sẻ.
- 🎨 Giao diện hiện đại, responsive với TailwindCSS.
- ⚡ Hiệu năng cao nhờ Next.js 14 (App Router).

---

## 🛠️ Công nghệ sử dụng
- **[Next.js](https://nextjs.org/)** – React framework cho SSR/SSG và routing.
- **[TailwindCSS](https://tailwindcss.com/)** – CSS utility-first framework để xây dựng UI nhanh chóng.
- **[Sanity.io](https://www.sanity.io/)** – Headless CMS để quản lý nội dung startup.
- **[NextAuth.js](https://next-auth.js.org/)** – Xác thực người dùng (ví dụ: GitHub OAuth).

---

## ⚙️ Cài đặt & Chạy dự án

### 1. Clone repo
```bash
git clone https://github.com/tungdt312/blogit.git
cd blogit
```

### 2. Cài đặt
```bash
npm install
```

### 3. Cấu hình biến môi trường
Tạo file .env.local trong folder gốc với nội dung:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION="vX"

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
NEXTAUTH_SECRET=
```
Bạn có thể thay bằng các Sanity credentials thực tế bằng cách tạo project mới trên **[Sanity.io](https://www.sanity.io/)**.

### 4. Chạy project local
```bash
npm run dev
```

Truy cập http://localhost:3000 🚀