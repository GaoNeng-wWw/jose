import { defineConfig } from "tsup";

export default defineConfig({
  format: ['cjs', 'esm'],
  outDir: './dist/webapi',
  dts: true,
  entry: ['./src/index.ts', './src/**/*.ts'],
  splitting: false,
})