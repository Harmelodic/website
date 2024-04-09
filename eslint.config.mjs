import jsdoc from 'eslint-plugin-jsdoc';

export default [
    {
        name: "custom",
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                browsers: true
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
            },
        },
        plugins: {
            jsdoc: jsdoc
        },
        rules: {
            "arrow-parens": ["error", "as-needed", {"requireForBlockBody": false}],
            "indent": ["error", "tab", {"SwitchCase": 1}],
            "max-len": ["error", {"code": 120}],
            "object-curly-spacing": ["error", "always"],
            "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
            "no-tabs": ["error", {"allowIndentationTabs": true}],
            "jsdoc/require-jsdoc": ["error", {
                "require": {
                    "FunctionDeclaration": false,
                    "MethodDefinition": false,
                    "ClassDeclaration": false,
                    "ArrowFunctionExpression": false,
                    "FunctionExpression": false,
                }
            }]
        }
    }
]
