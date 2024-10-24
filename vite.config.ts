import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://emyrub.github.io/citas-veterinaria',
  plugins: [react()],
})
