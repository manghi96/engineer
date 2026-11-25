# Tran Minh Nghia | Portfolio

Portfolio cá nhân giới thiệu thông tin, học vấn, kỹ năng, kinh nghiệm, dự án và chứng chỉ của Trần Minh Nghĩa. Website được xây dựng bằng Next.js, TypeScript và Tailwind CSS, hỗ trợ tiếng Anh và tiếng Việt.

## Tính năng

- Giao diện portfolio responsive, gồm các phần Hero, About, Education, Skills, Experience, Projects, Certifications và Contact.
- Chuyển đổi tiếng Anh/tiếng Việt; lựa chọn ngôn ngữ được lưu trong `localStorage`.
- Nút tải CV ở Hero và Contact tự chọn bản tiếng Anh hoặc tiếng Việt theo ngôn ngữ đang hiển thị.
- Chế độ sáng/tối, lưu lựa chọn trong `localStorage` và dùng giao diện hệ thống nếu chưa có lựa chọn được lưu.
- Hiệu ứng typing ở Hero, terminal mô phỏng, mô hình tương tác 3D ở About, page loader, custom cursor và scroll reveal.
- Metadata SEO, Open Graph và favicon.

## Công nghệ

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Three.js

## Chạy dự án local

Yêu cầu Node.js 20 và npm.

```bash
npm ci
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

## Build website

```bash
npm run build
```

Lệnh trên tạo website dạng static export trong thư mục `out/`, sẵn sàng để deploy. Kiểm tra TypeScript riêng bằng:

```bash
npx tsc --noEmit
```

## Cấu trúc dự án

```text
app/
├── globals.css
├── layout.tsx
└── page.tsx
components/
├── About.tsx
├── Certifications.tsx
├── Contact.tsx
├── CustomCursor.tsx
├── Education.tsx
├── Experience.tsx
├── Hero.tsx
├── LanguageProvider.tsx
├── Nav.tsx
├── PageLoader.tsx
├── Projects.tsx
├── RainDropsModel.tsx
├── ScrollReveal.tsx
└── Skills.tsx
public/
├── Tran_Minh_Nghia_Resume.pdf
├── Tran_Minh_Nghia_Resume_VN.pdf
├── logo.png
├── logo-dark.png
├── favicon-16x16.png
├── favicon-32x32.png
└── apple-touch-icon.png
```

## Cập nhật nội dung

- Metadata và favicon: `app/layout.tsx`
- Các section và thứ tự hiển thị: `app/page.tsx`
- Nội dung Hero và nút tải CV: `components/Hero.tsx`
- Nội dung About: `components/About.tsx`
- Học vấn: `components/Education.tsx`
- Kỹ năng: `components/Skills.tsx`
- Kinh nghiệm: `components/Experience.tsx`
- Dự án: `components/Projects.tsx`
- Chứng chỉ: `components/Certifications.tsx`
- Email, LinkedIn và nút tải CV ở Contact: `components/Contact.tsx`
- Ngôn ngữ: `components/LanguageProvider.tsx`

Đặt các tệp CV trong `public/`. Bản tiếng Anh là `Tran_Minh_Nghia_Resume.pdf`; bản tiếng Việt là `Tran_Minh_Nghia_Resume_VN.pdf`. Các nút tải CV ở Hero và Contact tự chọn tệp theo ngôn ngữ hiện tại.

## Deploy lên Vercel

Import repository vào [Vercel](https://vercel.com) và deploy theo hướng dẫn của nền tảng. Cấu hình hiện tại trong `next.config.mjs` tạo static export và đặt `basePath` là `/engineer` cho GitHub Pages; nếu deploy trên một domain hoặc đường dẫn khác, hãy điều chỉnh cấu hình này cho phù hợp.

## Deploy lên GitHub Pages

Workflow `.github/workflows/nextjs.yml` build website và deploy thư mục `out/` khi có push lên nhánh `main`. Có thể chạy thủ công từ **Actions** bằng workflow **Deploy Next.js site to Pages**.

### Thiết lập lần đầu

1. Push repository lên GitHub, bảo đảm workflow có trên nhánh `main`.
2. Trong repository, mở **Settings** → **Pages** và chọn **GitHub Actions** tại mục **Build and deployment**.
3. Theo dõi workflow trong tab **Actions**. Sau khi build và deploy thành công, website sẽ có tại:

   ```text
   https://manghi96.github.io/engineer/
   ```

`next.config.mjs` hiện cấu hình `output: "export"`, `trailingSlash: true` và `basePath: "/engineer"`. Nếu đổi tên repository hoặc đường dẫn deploy, cập nhật `basePath` và URL tương ứng.
