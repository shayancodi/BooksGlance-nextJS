import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat();

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "src/pages/**"],
  },
];

export default eslintConfig;
