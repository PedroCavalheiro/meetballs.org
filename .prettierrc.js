// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    plugins: ["prettier-plugin-jinja-template", "prettier-plugin-tailwindcss"],
    tailwindFunctions: ["class"],
    overrides: [
        {
            files: "*.html.tera",
            options: {
                parser: "jinja-template",
                bracketSameLine: true,
            },
        },
    ],
};

module.exports = config;
