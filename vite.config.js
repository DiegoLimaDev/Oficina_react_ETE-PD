import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/Oficina_react_ETE-PD/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
});
