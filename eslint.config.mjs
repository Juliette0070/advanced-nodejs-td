import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Changement de globals.browser à globals.node pour l'environnement RUN
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  // Ajout des configurations pour Jest
  { ...pluginJest.configs['flat/recommended'],
    files: ["**/*.spec.mjs", "**/*.test.mjs"],
    plugins: { jest: pluginJest },
    languageOptions: { globals: pluginJest.environments.globals.globals },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    }
  },
];