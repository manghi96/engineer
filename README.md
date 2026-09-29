# Tran Minh Nghia | Portfolio

Portfolio cá nhân được xây dựng bằng Next.js, TypeScript và Tailwind CSS, tập trung vào giới thiệu bản thân, học vấn, kỹ năng, kinh nghiệm và thông tin liên hệ với giao diện hiện đại, có khả năng chuyển đổi ngôn ngữ Tiếng Anh/Tiếng Việt và chế độ tối/sáng.

## Tính năng mới

- Giao diện portfolio hiện đại, responsive trên desktop/mobile
- Chuyển đổi ngôn ngữ Tiếng Anh / Tiếng Việt
- Chế độ tối/sáng với lưu lựa chọn vào localStorage
- Hero section có hiệu ứng typing, terminal-style UI và nút tải CV
- Scroll reveal animation cho các section
- Custom cursor, page loader và favicon tùy chỉnh
- Khu vực About, Education, Skills, Experience, Certifications, Contact
- Tích hợp metadata SEO và Open Graph cơ bản

## Stack công nghệ

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Three.js (dùng trong hiệu ứng visual trong About section)

## Chạy dự án local

```bash
npm install
npm run dev
```

Sau đó mở trình duyệt tại:

```text
http://localhost:3000
```

## Build production

```bash
npm run build
npm run start
```

## Cấu trúc thư mục

```text
portfolio/
├── app/
│   ├── globals.css             # Style toàn cục, animation, theme
│   ├── layout.tsx              # Metadata, layout gốc, provider
│   └── page.tsx                # Trang chính, sắp xếp các section
├── components/
│   ├── About.tsx               # Giới thiệu
│   ├── Certifications.tsx      # Chứng chỉ
│   ├── Contact.tsx             # Liên hệ + tải CV
│   ├── CustomCursor.tsx        # Con trỏ tùy chỉnh
│   ├── Education.tsx           # Học vấn
│   ├── Experience.tsx          # Kinh nghiệm làm việc
│   ├── Hero.tsx                # Hero, typing text, CTA
│   ├── LanguageProvider.tsx    # Quản lý ngôn ngữ
│   ├── Nav.tsx                 # Navbar + dark mode + language toggle
│   ├── PageLoader.tsx          # Loader khi vào trang
│   ├── RainDropsModel.tsx      # Hiệu ứng 3D / background
│   ├── ScrollReveal.tsx        # Trigger animation reveal
│   ├── Skills.tsx              # Kỹ năng
│   └── ...
├── public/
│   ├── Tran_Minh_Nghia_Resume.pdf   # File CV
│   ├── logo.png                # Logo portfolio
│   ├── favicon-16x16.png       # Favicon
│   ├── favicon-32x32.png       # Favicon
│   ├── apple-touch-icon.png    # Apple icon
│   └── ...
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```

## Cập nhật thông tin cá nhân

Bạn có thể chỉnh sửa nhanh các phần sau:

- Thông tin cá nhân, mô tả SEO: `app/layout.tsx`
- Tên và mô tả trong hero/about: `components/Hero.tsx`, `components/About.tsx`
- Học vấn: `components/Education.tsx`
- Kỹ năng: `components/Skills.tsx`
- Kinh nghiệm: `components/Experience.tsx`
- Chứng chỉ: `components/Certifications.tsx`
- Email, LinkedIn, địa điểm liên hệ: `components/Contact.tsx`
- File CV: `public/Tran_Minh_Nghia_Resume.pdf`

## Deploy lên Vercel

1. Push source code lên GitHub
2. Vào [Vercel](https://vercel.com)
3. Chọn `New Project` → import repository
4. Vercel tự detect Next.js và nhấn `Deploy`
5. (Tùy chọn) cấu hình custom domain trong Project Settings

## Deploy lên GitHub Pages bằng GitHub Actions

Repository đã có workflow tại `.github/workflows/nextjs.yml`. Workflow sẽ tự động cài dependencies, build website dạng static export và deploy thư mục `out/` lên GitHub Pages mỗi khi có commit được push lên nhánh `main`. Có thể chạy thủ công từ tab **Actions** bằng cách chọn workflow **Deploy Next.js site to Pages** → **Run workflow**.

### Thiết lập lần đầu

1. Push repository lên GitHub, bảo đảm workflow `.github/workflows/nextjs.yml` đã có trên nhánh `main`.
2. Mở repository trên GitHub, vào **Settings** → **Pages**.
3. Trong mục **Build and deployment**, chọn **Source: GitHub Actions**.
4. Vào tab **Actions** để theo dõi workflow. Khi job `build` và `deploy` hoàn tất thành công, trang sẽ được publish tại:

   ```text
   https://manghi96.github.io/engineer/
   ```

### Cấu hình và lưu ý

- GitHub Pages được cấu hình trong `next.config.mjs` với `output: "export"` và `basePath: "/engineer"`; giá trị `basePath` phải khớp tên repository khi deploy dưới dạng project site.
- Next.js tạo static site trong thư mục `out/`; workflow upload thư mục này làm artifact và deploy lên Pages.
- Sau lần thiết lập đầu tiên, mỗi lần push lên `main` sẽ tự động chạy deploy. Các nhánh khác không tự deploy.
- Nếu đổi tên repository, cần cập nhật `basePath` trong `next.config.mjs` và URL tương ứng ở trên.

## Ghi chú

- Nếu cần đổi tên dự án hoặc metadata, hãy cập nhật trong `app/layout.tsx` và `package.json`
- Nếu muốn thêm section mới, hãy cập nhật `app/page.tsx` và tạo component tương ứng trong `components/`
- Script `npm run lint` cũng có sẵn để kiểm tra chất lượng code
