import path, { resolve } from "path";
import { glob } from "glob";

export default {
  root: path.join(__dirname, "src"),
  build: {
    emptyOutDir: true,
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        clubmed: resolve(__dirname, "src/projects/clubmed.html"),
        doritos: resolve(__dirname, "src/projects/doritos.html"),
        pattex: resolve(__dirname, "src/projects/pattex.html"),
        sarahlandry: resolve(__dirname, "src/projects/sarah-landry.html"),
        esport: resolve(__dirname, "src/projects/esport.html"),
        military: resolve(__dirname, "src/projects/military.html"),
      },
    },
  },
};
