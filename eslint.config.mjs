import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Allow `window` object to be used in components
      "no-undef": ["error", { typeof: true }],
      // Ignore usage of `window` in server-side code
      "no-use-before-define": ["error", { functions: false, classes: true }],
      // Skip any `window` or `document` references in server-side code
      "no-restricted-globals": ["error", "window", "document"],
    },
  },
];

export default eslintConfig;
