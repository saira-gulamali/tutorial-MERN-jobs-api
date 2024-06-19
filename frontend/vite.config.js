import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// proxy config: should only be used in dev !
// v1 - worked
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": "http://localhost:5000",
//     },
//   },
//   plugins: [react()],
// });

// v2 - didnt work
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
//   plugins: [react()],
// });
