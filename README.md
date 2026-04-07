# Dokumentasi Mini Project React

## Daftar Library yang Digunakan

### Dependencies (runtime)

- `react`: Library utama untuk membangun UI.
- `react-dom`: Renderer React untuk aplikasi web.
- `react-router-dom`: Routing, navigasi halaman, dan protected route.
- `axios`: HTTP client untuk integrasi API `https://reqres.in`.
- `tailwindcss`: Styling utility-first.
- `@tailwindcss/vite`: Integrasi Tailwind CSS pada Vite.

### Dev Dependencies (development tools)

- `typescript`: Type safety pada codebase.
- `vite`: Development server dan bundler.
- `@vitejs/plugin-react`: Plugin React untuk Vite.
- `eslint`: Linting untuk menjaga kualitas kode.
- `@eslint/js`: Base config ESLint JavaScript.
- `typescript-eslint`: Integrasi ESLint untuk TypeScript.
- `eslint-plugin-react-hooks`: Validasi aturan React Hooks.
- `eslint-plugin-react-refresh`: Dukungan lint untuk React Fast Refresh.
- `globals`: Definisi global variables untuk linting.
- `@types/react`: Type definitions React.
- `@types/react-dom`: Type definitions React DOM.
- `@types/node`: Type definitions Node.js.

## Pemenuhan Requirement Milestone 1 (API Integration)

API yang digunakan: `https://reqres.in`

- `REGISTER - SUCCESSFUL`: diimplementasikan melalui endpoint `POST /register`.
- `REGISTER - UNSUCCESSFUL`: ditangani dengan menampilkan error dari response API.
- `LOGIN - SUCCESSFUL`: diimplementasikan melalui endpoint `POST /login`.
- `LOGIN - UNSUCCESSFUL`: ditangani dengan menampilkan error dari response API.
- `LIST USERS`: diimplementasikan melalui endpoint `GET /users?page={page}`.
- `SINGLE USER`: diimplementasikan melalui endpoint `GET /users/{id}`.

## Pemenuhan Requirement Milestone 2 (React Application)

- Menggunakan `React.js` sebagai frontend framework.
- Fitur register user sudah tersedia.
- Fitur login user sudah tersedia.
- Menampilkan daftar user dari API pada halaman home.
- Menampilkan detail tiap user pada halaman detail.
- Pagination di halaman home sudah diimplementasikan.
- Protected routes sudah diterapkan pada halaman tertentu.
- Desain aplikasi sudah responsif untuk berbagai ukuran perangkat.

## Fitur Tambahan di Luar Requirement Utama

- **Persistensi sesi login**: data user dan token disimpan di `localStorage`, sehingga tetap login setelah refresh.
- **Auto login setelah register berhasil**: setelah registrasi sukses, user langsung diarahkan ke halaman utama.
- **Validasi form tambahan**:
  - konfirmasi password harus sama,
  - minimal panjang password,
  - toggle show/hide password.
- **UI state yang lebih lengkap**:
  - loading skeleton pada halaman list dan detail user,
  - pesan sukses/error yang informatif saat autentikasi dan fetch data.
- **Custom 404 page**: route yang tidak dikenali diarahkan ke halaman not found khusus.
- **UX enhancement**: smooth scroll saat pindah halaman pagination dan komponen navigasi dengan state login/logout.
