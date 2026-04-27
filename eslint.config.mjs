import js from "@eslint/js";

export default [
    // Вказуємо, які папки лінтер має ігнорувати
    { ignores: ["node_modules", "dist", "tests", "**/*.test.js", "coverage"] },

    // Підключаємо базові рекомендовані правила
    js.configs.recommended,

    // Наші власні жорсткі правила
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules: {
            // Заборона невикористаних змінних
            "no-unused-vars": "error",
            // Заборона використання неоголошених змінних
            "no-undef": "error"
        }
    }
];