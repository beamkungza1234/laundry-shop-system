import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite'; // 1. นำเข้า tailwind

export default defineConfig({
  plugins: [
    tailwindcss(), // 2. ใส่ tailwindcss() ไว้ข้างบนสุดของ plugins
    solidPlugin(),
  ],
  server: {
    port: 5173,
  },
  build: {
    target: 'esnext',
  },
});