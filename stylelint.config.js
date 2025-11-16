module.exports = {
    extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
    plugins: ["stylelint-order"],
    rules: {
        "color-hex-length": "short",
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "tailwind",
                    "apply",
                    "variants",
                    "layer",
                    "screen",
                    "theme",
                    "themecss",
                ],
            },
        ],
    },
};
