import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // atau vue, sesuaikan dengan framework Anda

export default defineConfig({
  plugins: [react()],
  base: './', // Menggunakan relative path agar asset dimuat dari folder dist
})
