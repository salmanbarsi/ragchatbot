(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "b802ea7e3e3b6481fbda6eba08a406753f085e49e4c2b055134a221e940fb7ba") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b802ea7e3e3b6481fbda6eba08a406753f085e49e4c2b055134a221e940fb7ba";
    }
    let className;
    let props;
    let size;
    let t1;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, size, asChild: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = size;
        $[5] = t1;
        $[6] = variant;
    } else {
        className = $[2];
        props = $[3];
        size = $[4];
        t1 = $[5];
        variant = $[6];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    let t2;
    if ($[7] !== className || $[8] !== size || $[9] !== variant) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        }));
        $[7] = className;
        $[8] = size;
        $[9] = variant;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] !== Comp || $[12] !== props || $[13] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/button.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[11] = Comp;
        $[12] = props;
        $[13] = t2;
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    return t3;
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
;
;
const Header = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "67fee928ec813ee2434124154c2a4f271cee005fe5595c60d1ab4fa50d9fe1ab") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "67fee928ec813ee2434124154c2a4f271cee005fe5595c60d1ab4fa50d9fe1ab";
    }
    const { isDarkMode, setIsDarkMode, handleClearChat } = t0;
    const t1 = `border-b px-6 py-4 flex items-center justify-between backdrop-blur-sm transition-colors duration-300 ${isDarkMode ? "bg-gray-900/90 border-gray-700" : "bg-white/80 border-gray-200"}`;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-11 h-11 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "w-6 h-6 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Header.tsx",
                        lineNumber: 21,
                        columnNumber: 177
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/Header.tsx",
                    lineNumber: 21,
                    columnNumber: 36
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/Header.tsx",
                    lineNumber: 21,
                    columnNumber: 226
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const t3 = `text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`;
    let t4;
    if ($[2] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: t3,
            children: "AI Assistant"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t3;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    const t6 = `text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`;
    let t7;
    if ($[5] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-1.5",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: t6,
                    children: "Online"
                }, void 0, false, {
                    fileName: "[project]/src/app/component/Header.tsx",
                    lineNumber: 45,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t6;
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] !== t4 || $[8] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t4,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/component/Header.tsx",
                    lineNumber: 53,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== isDarkMode || $[11] !== setIsDarkMode) {
        t9 = ()=>setIsDarkMode(!isDarkMode);
        $[10] = isDarkMode;
        $[11] = setIsDarkMode;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    const t10 = `p-2 rounded-lg ${isDarkMode ? "bg-gray-800 text-yellow-300" : "bg-gray-100 text-gray-700"}`;
    let t11;
    if ($[13] !== isDarkMode) {
        t11 = isDarkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 72,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 72,
            columnNumber: 54
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = isDarkMode;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== t10 || $[16] !== t11 || $[17] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 80,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t10;
        $[16] = t11;
        $[17] = t9;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    const t13 = `p-2 rounded-lg ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`;
    let t14;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 91,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== handleClearChat || $[21] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleClearChat,
            className: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = handleClearChat;
        $[21] = t13;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignInButton"], {
            mode: "modal",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                children: "Sign In"
            }, void 0, false, {
                fileName: "[project]/src/app/component/Header.tsx",
                lineNumber: 107,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedOut"], {
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignUpButton"], {
                    mode: "modal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        children: "Sign Up"
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Header.tsx",
                        lineNumber: 114,
                        columnNumber: 54
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/Header.tsx",
                    lineNumber: 114,
                    columnNumber: 27
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedIn"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignOutButton"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            children: "Sign Out"
                        }, void 0, false, {
                            fileName: "[project]/src/app/component/Header.tsx",
                            lineNumber: 121,
                            columnNumber: 82
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/component/Header.tsx",
                        lineNumber: 121,
                        columnNumber: 67
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/component/Header.tsx",
                    lineNumber: 121,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    let t19;
    if ($[26] !== t12 || $[27] !== t15) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t12,
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t12;
        $[27] = t15;
        $[28] = t19;
    } else {
        t19 = $[28];
    }
    let t20;
    if ($[29] !== t1 || $[30] !== t19 || $[31] !== t8) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t8,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Header.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t1;
        $[30] = t19;
        $[31] = t8;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    return t20;
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/Inputarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-stop.js [app-client] (ecmascript) <export default as StopCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$textarea$2d$autosize$2f$dist$2f$react$2d$textarea$2d$autosize$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.development.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Inputarea = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "a15dee47245e350bec3a6631da84463b809850cab9e3d83cd98b614b92eafe34") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a15dee47245e350bec3a6631da84463b809850cab9e3d83cd98b614b92eafe34";
    }
    const { isDarkMode, setInputMessage, inputMessage, isLoading, handleKeyPress, handleSendMessage, status, stop } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[2] !== setInputMessage) {
        t2 = (action)=>{
            const quickMessages = {
                ideas: "Can you suggest some creative ideas for my project?",
                summarize: "Please summarize the key points from our conversation.",
                explain: "Can you explain how this AI assistant works?"
            };
            setInputMessage(quickMessages[action]);
        };
        $[2] = setInputMessage;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleQuickAction = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (event)=>{
            const files = event.target.files;
            if (files && files.length > 0) {
                const newFiles = Array.from(files);
                setSelectedFiles((prev)=>[
                        ...prev,
                        ...newFiles
                    ]);
            }
            event.target.value = "";
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleFileSelect = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = (index)=>{
            setSelectedFiles((prev_0)=>prev_0.filter((_, i)=>i !== index));
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleRemoveFile = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ()=>{
            fileInputRef.current?.click();
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const handlePaperclipClick = t5;
    const getFileIcon = _temp;
    const formatFileSize = _temp2;
    const t6 = `border-t px-4 py-4 backdrop-blur-sm transition-colors duration-300 ${isDarkMode ? "bg-gray-800/95 border-gray-700" : "bg-white/80 border-gray-200"}`;
    let t7;
    if ($[7] !== isDarkMode || $[8] !== selectedFiles) {
        t7 = selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `mb-4 p-3 rounded-lg border ${isDarkMode ? "bg-gray-700/50 border-gray-600" : "bg-gray-50 border-gray-200"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: selectedFiles.map((file_0, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center space-x-2 px-3 py-2 rounded-lg border ${isDarkMode ? "bg-gray-600 border-gray-500 text-gray-200" : "bg-white border-gray-300 text-gray-700"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: getFileIcon(file_0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/Inputarea.tsx",
                                lineNumber: 89,
                                columnNumber: 434
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col min-w-0 max-w-[150px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium truncate",
                                        children: file_0.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/Inputarea.tsx",
                                        lineNumber: 89,
                                        columnNumber: 541
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`,
                                        children: formatFileSize(file_0.size)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/component/Inputarea.tsx",
                                        lineNumber: 89,
                                        columnNumber: 608
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/component/Inputarea.tsx",
                                lineNumber: 89,
                                columnNumber: 488
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleRemoveFile(index_0),
                                className: `p-1 rounded-full hover:bg-opacity-20 transition-colors ${isDarkMode ? "hover:bg-red-400 text-gray-300" : "hover:bg-red-500 text-gray-500"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/component/Inputarea.tsx",
                                    lineNumber: 89,
                                    columnNumber: 931
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/component/Inputarea.tsx",
                                lineNumber: 89,
                                columnNumber: 728
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index_0, true, {
                        fileName: "[project]/src/app/component/Inputarea.tsx",
                        lineNumber: 89,
                        columnNumber: 242
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/component/Inputarea.tsx",
                lineNumber: 89,
                columnNumber: 164
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 89,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = isDarkMode;
        $[8] = selectedFiles;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== handleQuickAction) {
        t8 = ()=>handleQuickAction("ideas");
        $[10] = handleQuickAction;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const t9 = `px-4 py-2 text-xs font-medium rounded-full transition-all hover:scale-105 shadow-sm ${isDarkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600" : "bg-linear-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 text-gray-700 border border-gray-300"}`;
    let t10;
    if ($[12] !== t8 || $[13] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t8,
            className: t9,
            children: "💡 Suggest ideas"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t8;
        $[13] = t9;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== handleQuickAction) {
        t11 = ()=>handleQuickAction("summarize");
        $[15] = handleQuickAction;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    const t12 = `px-4 py-2 text-xs font-medium rounded-full transition-all hover:scale-105 shadow-sm ${isDarkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600" : "bg-linear-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-gray-700 border border-gray-300"}`;
    let t13;
    if ($[17] !== t11 || $[18] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t11,
            className: t12,
            children: "📝 Summarize"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t11;
        $[18] = t12;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== handleQuickAction) {
        t14 = ()=>handleQuickAction("explain");
        $[20] = handleQuickAction;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    const t15 = `px-4 py-2 text-xs font-medium rounded-full transition-all hover:scale-105 shadow-sm ${isDarkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600" : "bg-linear-to-r from-pink-100 to-orange-100 hover:from-pink-200 hover:to-orange-200 text-gray-700 border border-gray-300"}`;
    let t16;
    if ($[22] !== t14 || $[23] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t14,
            className: t15,
            children: "🔍 Explain"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t14;
        $[23] = t15;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== t10 || $[26] !== t13 || $[27] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 mb-4",
            children: [
                t10,
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t10;
        $[26] = t13;
        $[27] = t16;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            ref: fileInputRef,
            onChange: handleFileSelect,
            multiple: true,
            accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.txt,.xls,.xlsx",
            className: "hidden"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== setInputMessage) {
        t19 = (e)=>setInputMessage(e.target.value);
        $[30] = setInputMessage;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    const t20 = ` w-full px-5 py-3 pr-12 resize-none rounded-2xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-700 border border-gray-600 text-white placeholder-gray-400" : "bg-white border border-gray-300 text-gray-800 placeholder-gray-500"}`;
    let t21;
    if ($[32] !== handleKeyPress || $[33] !== inputMessage || $[34] !== isLoading || $[35] !== t19 || $[36] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$textarea$2d$autosize$2f$dist$2f$react$2d$textarea$2d$autosize$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            value: inputMessage,
            onChange: t19,
            onKeyDown: handleKeyPress,
            placeholder: "Type your message...",
            disabled: isLoading,
            minRows: 1,
            maxRows: 5,
            className: t20
        }, void 0, false, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = handleKeyPress;
        $[33] = inputMessage;
        $[34] = isLoading;
        $[35] = t19;
        $[36] = t20;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    const t22 = ` absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors ${isDarkMode ? "text-gray-400 hover:text-gray-300 hover:bg-gray-600" : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"}`;
    let t23;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t23;
    } else {
        t23 = $[38];
    }
    let t24;
    if ($[39] !== t22) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handlePaperclipClick,
            className: t22,
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t22;
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    let t25;
    if ($[41] !== t21 || $[42] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 relative",
            children: [
                t21,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t21;
        $[42] = t24;
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    let t26;
    if ($[44] !== handleSendMessage || $[45] !== inputMessage || $[46] !== isLoading || $[47] !== status || $[48] !== stop) {
        t26 = status === "streaming" || status === "submitted" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: stop,
            className: "w-14 h-14 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$stop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StopCircle$3e$__["StopCircle"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/component/Inputarea.tsx",
                lineNumber: 215,
                columnNumber: 329
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 215,
            columnNumber: 62
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSendMessage,
            disabled: !inputMessage.trim() || isLoading,
            className: "w-14 h-14 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/app/component/Inputarea.tsx",
                lineNumber: 215,
                columnNumber: 772
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 215,
            columnNumber: 375
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = handleSendMessage;
        $[45] = inputMessage;
        $[46] = isLoading;
        $[47] = status;
        $[48] = stop;
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    let t27;
    if ($[50] !== t25 || $[51] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-3",
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t25;
        $[51] = t26;
        $[52] = t27;
    } else {
        t27 = $[52];
    }
    isDarkMode ? "text-gray-500" : "text-gray-500";
    let t28;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mt-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500",
                children: "AI assistant may produce inaccurate information"
            }, void 0, false, {
                fileName: "[project]/src/app/component/Inputarea.tsx",
                lineNumber: 237,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t28;
    } else {
        t28 = $[53];
    }
    let t29;
    if ($[54] !== t17 || $[55] !== t27 || $[56] !== t6 || $[57] !== t7) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t17,
                t18,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Inputarea.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t17;
        $[55] = t27;
        $[56] = t6;
        $[57] = t7;
        $[58] = t29;
    } else {
        t29 = $[58];
    }
    return t29;
};
_s(Inputarea, "K7G/xGTRCl8rKtvNpZvTeKbifl4=");
_c = Inputarea;
const __TURBOPACK__default__export__ = Inputarea;
function _temp(file) {
    const fileType = file.type.split("/")[0];
    switch(fileType){
        case "image":
            {
                return "\uD83D\uDDBC\uFE0F";
            }
        case "video":
            {
                return "\uD83C\uDFAC";
            }
        case "audio":
            {
                return "\uD83C\uDFB5";
            }
        case "application":
            {
                if (file.type.includes("pdf")) {
                    return "\uD83D\uDCC4";
                }
                if (file.type.includes("word") || file.type.includes("document")) {
                    return "\uD83D\uDCDD";
                }
                if (file.type.includes("sheet") || file.type.includes("excel")) {
                    return "\uD83D\uDCCA";
                }
                return "\uD83D\uDCCE";
            }
        default:
            {
                return "\uD83D\uDCCE";
            }
    }
}
function _temp2(bytes) {
    if (bytes === 0) {
        return "0 Bytes";
    }
    const sizes = [
        "Bytes",
        "KB",
        "MB"
    ];
    const i_0 = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, i_0)).toFixed(2)) + " " + sizes[i_0];
}
var _c;
__turbopack_context__.k.register(_c, "Inputarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/component/Codeblock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCopy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-copy.js [app-client] (ecmascript) <export default as ClipboardCopy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
// =======================================
// PRISMLIGHT IMPORT (IMPORTANT)
// =======================================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2d$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PrismLight$3e$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/esm/prism-light.js [app-client] (ecmascript) <export default as PrismLight>");
// Themes
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$one$2d$dark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/one-dark.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$one$2d$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/one-light.js [app-client] (ecmascript)");
// Languages
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$python$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/cjs/languages/prism/python.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$javascript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/cjs/languages/prism/javascript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$jsx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/cjs/languages/prism/jsx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$tsx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/cjs/languages/prism/tsx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$bash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-syntax-highlighter/dist/cjs/languages/prism/bash.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
// Register languages (NOW works with PrismLight)
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2d$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PrismLight$3e$__["PrismLight"].registerLanguage("python", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$python$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2d$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PrismLight$3e$__["PrismLight"].registerLanguage("javascript", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$javascript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2d$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PrismLight$3e$__["PrismLight"].registerLanguage("jsx", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$jsx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2d$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PrismLight$3e$__["PrismLight"].registerLanguage("tsx", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$tsx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2d$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PrismLight$3e$__["PrismLight"].registerLanguage("bash", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$languages$2f$prism$2f$bash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
// Auto-detect language
const detectLanguage = (code)=>{
    if (/class |def |import /.test(code)) return "python";
    if (/const |let |function |=>/.test(code)) return "javascript";
    if (/<.*?>/.test(code)) return "jsx";
    return "bash"; // fallback
};
const Codeblock = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "758b48bc0ca54a269367ffa058692d0fe8285157ceb69b403df8f9123acb2358") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "758b48bc0ca54a269367ffa058692d0fe8285157ceb69b403df8f9123acb2358";
    }
    const { text, isDarkMode: t1 } = t0;
    const isDarkMode = t1 === undefined ? true : t1;
    if (!text || typeof text !== "string") {
        return null;
    }
    let t2;
    let t3;
    if ($[1] !== isDarkMode || $[2] !== text) {
        const parts = text.split(/(```[\s\S]*?```|`[^`]+`)/g);
        t2 = "space-y-2";
        let t4;
        if ($[5] !== isDarkMode) {
            t4 = (part, index)=>{
                if (!part) {
                    return null;
                }
                if (part.startsWith("```")) {
                    const code = part.replace(/```[\w]*/, "").replace(/```$/, "").trim();
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyableCode, {
                        code: code,
                        isDarkMode: isDarkMode
                    }, index, false, {
                        fileName: "[project]/src/app/component/Codeblock.tsx",
                        lineNumber: 66,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                }
                if (part.startsWith("`") && part.endsWith("`")) {
                    const code_0 = part.slice(1, -1);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: `px-2 py-1 rounded font-mono text-sm ${isDarkMode ? "bg-gray-800 text-yellow-300" : "bg-gray-200 text-yellow-700"}`,
                        children: code_0
                    }, index, false, {
                        fileName: "[project]/src/app/component/Codeblock.tsx",
                        lineNumber: 70,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `leading-6 text-sm whitespace-pre-wrap ${isDarkMode ? "text-gray-200" : "text-gray-800"}`,
                    children: part
                }, index, false, {
                    fileName: "[project]/src/app/component/Codeblock.tsx",
                    lineNumber: 72,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            };
            $[5] = isDarkMode;
            $[6] = t4;
        } else {
            t4 = $[6];
        }
        t3 = parts.map(t4);
        $[1] = isDarkMode;
        $[2] = text;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[7] !== t2 || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/component/Codeblock.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
};
_c = Codeblock;
const __TURBOPACK__default__export__ = Codeblock;
// =======================================
// COPYABLE CODE BLOCK COMPONENT
// =======================================
const CopyableCode = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "758b48bc0ca54a269367ffa058692d0fe8285157ceb69b403df8f9123acb2358") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "758b48bc0ca54a269367ffa058692d0fe8285157ceb69b403df8f9123acb2358";
    }
    const { code, isDarkMode } = t0;
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== code) {
        t1 = async ()=>{
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(()=>setCopied(false), 1200);
        };
        $[1] = code;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleCopy = t1;
    let t2;
    if ($[3] !== code) {
        t2 = detectLanguage(code);
        $[3] = code;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const lang = t2;
    const t3 = `absolute top-2 right-3 p-1 rounded-md transition ${isDarkMode ? "bg-gray-800 hover:bg-gray-700 text-gray-300" : "bg-gray-200 hover:bg-gray-300 text-gray-700"}`;
    let t4;
    if ($[5] !== copied) {
        t4 = copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: "w-4 h-4 text-green-400"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Codeblock.tsx",
            lineNumber: 143,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCopy$3e$__["ClipboardCopy"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/app/component/Codeblock.tsx",
            lineNumber: 143,
            columnNumber: 66
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = copied;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== handleCopy || $[8] !== t3 || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleCopy,
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/component/Codeblock.tsx",
            lineNumber: 151,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = handleCopy;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const t6 = isDarkMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$one$2d$dark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$cjs$2f$styles$2f$prism$2f$one$2d$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            borderRadius: "12px",
            padding: "16px",
            fontSize: "14px",
            marginTop: "40px"
        };
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== code || $[13] !== lang || $[14] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2d$light$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PrismLight$3e$__["PrismLight"], {
            language: lang,
            style: t6,
            wrapLines: true,
            showLineNumbers: true,
            customStyle: t7,
            children: code
        }, void 0, false, {
            fileName: "[project]/src/app/component/Codeblock.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = code;
        $[13] = lang;
        $[14] = t6;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t5 || $[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/component/Codeblock.tsx",
            lineNumber: 184,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t5;
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    return t9;
};
_s(CopyableCode, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c1 = CopyableCode;
var _c, _c1;
__turbopack_context__.k.register(_c, "Codeblock");
__turbopack_context__.k.register(_c1, "CopyableCode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/chat/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/react/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Inputarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/Inputarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Codeblock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/component/Codeblock.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ChatPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "c4d3914b501ea172a05c862766853f366ff8bf4f2b1825b27176a76979e80195") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4d3914b501ea172a05c862766853f366ff8bf4f2b1825b27176a76979e80195";
    }
    const { messages, sendMessage, status, error, stop } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [msg, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [inputMessage, setInputMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ChatPage[scrollToBottom]": ()=>{
                messagesEndRef.current?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        })["ChatPage[scrollToBottom]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const scrollToBottom = t1;
    let t2;
    let t3;
    if ($[3] !== messages) {
        t2 = ({
            "ChatPage[useEffect()]": ()=>{
                setMessages(messages.map(_ChatPageUseEffectMessagesMap));
            }
        })["ChatPage[useEffect()]"];
        t3 = [
            messages
        ];
        $[3] = messages;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[6] !== error) {
        t4 = ({
            "ChatPage[useEffect()]": ()=>{
                if (error) {
                    setShowError(true);
                    const timer = setTimeout({
                        "ChatPage[useEffect() > setTimeout()]": ()=>{
                            setShowError(false);
                        }
                    }["ChatPage[useEffect() > setTimeout()]"], 7000);
                    return ()=>clearTimeout(timer);
                }
            }
        })["ChatPage[useEffect()]"];
        t5 = [
            error
        ];
        $[6] = error;
        $[7] = t4;
        $[8] = t5;
    } else {
        t4 = $[7];
        t5 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "ChatPage[useEffect()]": ()=>{
                scrollToBottom();
            }
        })["ChatPage[useEffect()]"];
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== messages) {
        t7 = [
            messages
        ];
        $[10] = messages;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[12] !== inputMessage || $[13] !== sendMessage || $[14] !== status) {
        t8 = ({
            "ChatPage[handleSendMessage]": ()=>{
                setIsLoading(status === "submitted" || status === "streaming");
                sendMessage({
                    text: inputMessage
                });
                setInputMessage("");
            }
        })["ChatPage[handleSendMessage]"];
        $[12] = inputMessage;
        $[13] = sendMessage;
        $[14] = status;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const handleSendMessage = t8;
    let t9;
    if ($[16] !== handleSendMessage) {
        t9 = ({
            "ChatPage[handleKeyPress]": (e)=>{
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                }
            }
        })["ChatPage[handleKeyPress]"];
        $[16] = handleSendMessage;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const handleKeyPress = t9;
    const formatTime = _ChatPageFormatTime;
    let t10;
    if ($[18] !== stop) {
        t10 = ({
            "ChatPage[handleClearChat]": ()=>{
                stop();
                setMessages([]);
            }
        })["ChatPage[handleClearChat]"];
        $[18] = stop;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    const handleClearChat = t10;
    const t11 = `flex flex-col h-[calc(100vh-4rem)] transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-linear-to-br from-blue-50 via-purple-50 to-pink-50"}`;
    let t12;
    if ($[20] !== handleClearChat || $[21] !== isDarkMode) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isDarkMode: isDarkMode,
            setIsDarkMode: setIsDarkMode,
            handleClearChat: handleClearChat
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[20] = handleClearChat;
        $[21] = isDarkMode;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== error?.message || $[24] !== showError) {
        t13 = showError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-25 right-50 z-50 fade-in-out bg-red-500/20 text-red-500 px-4 py-3 rounded shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: error?.message
                }, void 0, false, {
                    fileName: "[project]/src/app/chat/page.tsx",
                    lineNumber: 182,
                    columnNumber: 180
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/chat/page.tsx",
                lineNumber: 182,
                columnNumber: 135
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 182,
            columnNumber: 24
        }, this);
        $[23] = error?.message;
        $[24] = showError;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== isDarkMode || $[27] !== msg) {
        let t15;
        if ($[29] !== isDarkMode) {
            t15 = ({
                "ChatPage[msg.map()]": (message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-start space-x-3 animate-fade-in ${message.isUser ? "flex-row-reverse space-x-reverse" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold shadow-md transition-transform hover:scale-110 ${message.isUser ? "bg-linear-to-r from-blue-500 to-blue-600 text-white" : "bg-linear-to-r from-purple-500 to-pink-500 text-white"}`,
                                children: message.isUser ? "\uD83D\uDC64" : "\uD83E\uDD16"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 194,
                                columnNumber: 182
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `max-w-[80%] ${message.isUser ? "text-right" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `inline-block px-5 py-3 rounded-2xl shadow-md transition-all hover:shadow-lg ${message.isUser ? "bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-br-none" : isDarkMode ? "bg-gray-800 border border-gray-700 text-gray-100 rounded-bl-none" : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Codeblock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            text: message.text,
                                            isDarkMode: isDarkMode
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/chat/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 925
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chat/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 592
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `text-xs mt-1.5 ${isDarkMode ? "text-gray-500" : "text-gray-500"} ${message.isUser ? "text-right" : ""}`,
                                        children: formatTime(message.timestamp)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chat/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 988
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 194,
                                columnNumber: 523
                            }, this)
                        ]
                    }, message.id, true, {
                        fileName: "[project]/src/app/chat/page.tsx",
                        lineNumber: 194,
                        columnNumber: 43
                    }, this)
            })["ChatPage[msg.map()]"];
            $[29] = isDarkMode;
            $[30] = t15;
        } else {
            t15 = $[30];
        }
        t14 = msg.map(t15);
        $[26] = isDarkMode;
        $[27] = msg;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[31] !== isDarkMode || $[32] !== status) {
        t15 = status === "submitted" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start space-x-3 animate-fade-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "shrink-0 w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs font-semibold text-white shadow-md",
                    children: "🤖"
                }, void 0, false, {
                    fileName: "[project]/src/app/chat/page.tsx",
                    lineNumber: 210,
                    columnNumber: 97
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-2xl rounded-bl-none px-5 py-4 shadow-md ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-2.5 h-2.5 rounded-full animate-bounce ${isDarkMode ? "bg-gray-500" : "bg-gray-400"}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 210,
                                columnNumber: 463
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-2.5 h-2.5 rounded-full animate-bounce ${isDarkMode ? "bg-gray-500" : "bg-gray-400"}`,
                                style: {
                                    animationDelay: "0.1s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 210,
                                columnNumber: 570
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-2.5 h-2.5 rounded-full animate-bounce ${isDarkMode ? "bg-gray-500" : "bg-gray-400"}`,
                                style: {
                                    animationDelay: "0.2s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 212,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chat/page.tsx",
                        lineNumber: 210,
                        columnNumber: 429
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/chat/page.tsx",
                    lineNumber: 210,
                    columnNumber: 273
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 210,
            columnNumber: 37
        }, this);
        $[31] = isDarkMode;
        $[32] = status;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== isDarkMode || $[35] !== msg.length) {
        t16 = msg.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-[60vh] px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl ${isDarkMode ? "bg-linear-to-br from-blue-600 to-purple-700 shadow-blue-500/20" : "bg-linear-to-br from-blue-500 to-purple-600 shadow-blue-500/30"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl",
                                children: "🤖"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 223,
                                columnNumber: 368
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 223,
                            columnNumber: 135
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 rounded-2xl ${isDarkMode ? "bg-blue-500/20" : "bg-blue-400/20"} animate-ping`
                        }, void 0, false, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 223,
                            columnNumber: 408
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/chat/page.tsx",
                    lineNumber: 223,
                    columnNumber: 104
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: `text-4xl font-bold mb-4 bg-linear-to-r ${isDarkMode ? "from-blue-400 to-purple-400" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`,
                            children: "Welcome to AI Assistant"
                        }, void 0, false, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 223,
                            columnNumber: 564
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-lg max-w-md mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`,
                            children: "Your intelligent companion for answers, ideas, and creative solutions"
                        }, void 0, false, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 223,
                            columnNumber: 757
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/chat/page.tsx",
                    lineNumber: 223,
                    columnNumber: 529
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-6 rounded-2xl border backdrop-blur-sm transition-all hover:scale-105 ${isDarkMode ? "bg-gray-800/50 border-gray-700 hover:border-blue-500" : "bg-white/50 border-gray-200 hover:border-blue-400"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl mb-3",
                                    children: "💡"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 1229
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`,
                                    children: "Brainstorm Ideas "
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 1268
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`,
                                    children: "Get creative suggestions and innovative solutions for your projects"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 1374
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 223,
                            columnNumber: 1014
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-6 rounded-2xl border backdrop-blur-sm transition-all hover:scale-105 ${isDarkMode ? "bg-gray-800/50 border-gray-700 hover:border-purple-500" : "bg-white/50 border-gray-200 hover:border-purple-400"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl mb-3",
                                    children: "📝"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 1745
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`,
                                    children: "Write & Edit"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 1784
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`,
                                    children: "Craft compelling content, refine your writing, and improve your text"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 1889
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 223,
                            columnNumber: 1526
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-6 rounded-2xl border backdrop-blur-sm transition-all hover:scale-105 ${isDarkMode ? "bg-gray-800/50 border-gray-700 hover:border-green-500" : "bg-white/50 border-gray-200 hover:border-green-400"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl mb-3",
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 2259
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`,
                                    children: "Learn & Explore"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 2298
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`,
                                    children: "Get detailed explanations and explore complex topics with ease"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 2406
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 223,
                            columnNumber: 2042
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/chat/page.tsx",
                    lineNumber: 223,
                    columnNumber: 928
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed top-1/4 left-1/4 opacity-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-8 h-8 rounded-full ${isDarkMode ? "bg-blue-400" : "bg-blue-500"} animate-bounce`
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.tsx",
                        lineNumber: 223,
                        columnNumber: 2610
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/chat/page.tsx",
                    lineNumber: 223,
                    columnNumber: 2559
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-1/3 right-1/4 opacity-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-6 h-6 rounded-full ${isDarkMode ? "bg-purple-400" : "bg-purple-500"} animate-bounce`,
                        style: {
                            animationDelay: "0.5s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.tsx",
                        lineNumber: 223,
                        columnNumber: 2774
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/chat/page.tsx",
                    lineNumber: 223,
                    columnNumber: 2719
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 223,
            columnNumber: 31
        }, this);
        $[34] = isDarkMode;
        $[35] = msg.length;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: messagesEndRef
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t13 || $[39] !== t14 || $[40] !== t15 || $[41] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-y-auto px-4 py-6 space-y-6 w-full items-center mx-auto",
            children: [
                t13,
                t14,
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[38] = t13;
        $[39] = t14;
        $[40] = t15;
        $[41] = t16;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    let t19;
    if ($[43] !== handleKeyPress || $[44] !== handleSendMessage || $[45] !== inputMessage || $[46] !== isDarkMode || $[47] !== isLoading || $[48] !== status || $[49] !== stop) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$component$2f$Inputarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isDarkMode: isDarkMode,
            setInputMessage: setInputMessage,
            inputMessage: inputMessage,
            isLoading: isLoading,
            handleKeyPress: handleKeyPress,
            handleSendMessage: handleSendMessage,
            status: status,
            stop: stop
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[43] = handleKeyPress;
        $[44] = handleSendMessage;
        $[45] = inputMessage;
        $[46] = isDarkMode;
        $[47] = isLoading;
        $[48] = status;
        $[49] = stop;
        $[50] = t19;
    } else {
        t19 = $[50];
    }
    let t20;
    if ($[51] !== t11 || $[52] !== t12 || $[53] !== t18 || $[54] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[51] = t11;
        $[52] = t12;
        $[53] = t18;
        $[54] = t19;
        $[55] = t20;
    } else {
        t20 = $[55];
    }
    return t20;
}
_s(ChatPage, "gEMdVit70R0yk1Wn9aZB2ePq8zE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
_c = ChatPage;
function _ChatPageFormatTime(date) {
    return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
}
function _ChatPageUseEffectMessagesMap(m) {
    return {
        id: m.id,
        text: m.parts.map(_ChatPageUseEffectMessagesMapMPartsMap).join(""),
        isUser: m.role === "user",
        timestamp: new Date(m.createdAt || Date.now())
    };
}
function _ChatPageUseEffectMessagesMapMPartsMap(part) {
    return part.text;
}
var _c;
__turbopack_context__.k.register(_c, "ChatPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_149e5feb._.js.map