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
"[project]/src/components/ai-elements/conversation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Conversation",
    ()=>Conversation,
    "ConversationContent",
    ()=>ConversationContent,
    "ConversationEmptyState",
    ()=>ConversationEmptyState,
    "ConversationScrollButton",
    ()=>ConversationScrollButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$stick$2d$to$2d$bottom$2f$dist$2f$StickToBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-stick-to-bottom/dist/StickToBottom.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Conversation = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "1aa9386fa4fcb78cf1ffa75c785d23834524ddadc46eccf28a53646220e00c8f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1aa9386fa4fcb78cf1ffa75c785d23834524ddadc46eccf28a53646220e00c8f";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex-1 overflow-y-hidden", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$stick$2d$to$2d$bottom$2f$dist$2f$StickToBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StickToBottom"], {
            className: t1,
            initial: "smooth",
            resize: "smooth",
            role: "log",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/conversation.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
};
_c = Conversation;
const ConversationContent = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "1aa9386fa4fcb78cf1ffa75c785d23834524ddadc46eccf28a53646220e00c8f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1aa9386fa4fcb78cf1ffa75c785d23834524ddadc46eccf28a53646220e00c8f";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-8 p-4", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$stick$2d$to$2d$bottom$2f$dist$2f$StickToBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StickToBottom"].Content, {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/conversation.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
};
_c1 = ConversationContent;
const ConversationEmptyState = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "1aa9386fa4fcb78cf1ffa75c785d23834524ddadc46eccf28a53646220e00c8f") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1aa9386fa4fcb78cf1ffa75c785d23834524ddadc46eccf28a53646220e00c8f";
    }
    let children;
    let className;
    let icon;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, title: t1, description: t2, icon, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = icon;
        $[5] = props;
        $[6] = t1;
        $[7] = t2;
    } else {
        children = $[2];
        className = $[3];
        icon = $[4];
        props = $[5];
        t1 = $[6];
        t2 = $[7];
    }
    const title = t1 === undefined ? "No messages yet" : t1;
    const description = t2 === undefined ? "Start a conversation to see messages here" : t2;
    let t3;
    if ($[8] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex size-full flex-col items-center justify-center gap-3 p-8 text-center", className);
        $[8] = className;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== children || $[11] !== description || $[12] !== icon || $[13] !== title) {
        t4 = children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-muted-foreground",
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/src/components/ai-elements/conversation.tsx",
                    lineNumber: 149,
                    columnNumber: 33
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-medium text-sm",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ai-elements/conversation.tsx",
                            lineNumber: 149,
                            columnNumber: 112
                        }, ("TURBOPACK compile-time value", void 0)),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/components/ai-elements/conversation.tsx",
                            lineNumber: 149,
                            columnNumber: 176
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ai-elements/conversation.tsx",
                    lineNumber: 149,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[10] = children;
        $[11] = description;
        $[12] = icon;
        $[13] = title;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== props || $[16] !== t3 || $[17] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            ...props,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/conversation.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = props;
        $[16] = t3;
        $[17] = t4;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    return t5;
};
_c2 = ConversationEmptyState;
const ConversationScrollButton = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "1aa9386fa4fcb78cf1ffa75c785d23834524ddadc46eccf28a53646220e00c8f") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1aa9386fa4fcb78cf1ffa75c785d23834524ddadc46eccf28a53646220e00c8f";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    const { isAtBottom, scrollToBottom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$stick$2d$to$2d$bottom$2f$dist$2f$StickToBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickToBottomContext"])();
    let t1;
    if ($[4] !== scrollToBottom) {
        t1 = ()=>{
            scrollToBottom();
        };
        $[4] = scrollToBottom;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const handleScrollToBottom = t1;
    let t2;
    if ($[6] !== className || $[7] !== handleScrollToBottom || $[8] !== isAtBottom || $[9] !== props) {
        t2 = !isAtBottom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-4 left-[50%] translate-x-[-50%] rounded-full", className),
            onClick: handleScrollToBottom,
            size: "icon",
            type: "button",
            variant: "outline",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownIcon$3e$__["ArrowDownIcon"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ai-elements/conversation.tsx",
                lineNumber: 210,
                columnNumber: 209
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/conversation.tsx",
            lineNumber: 210,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = className;
        $[7] = handleScrollToBottom;
        $[8] = isAtBottom;
        $[9] = props;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
};
_s(ConversationScrollButton, "mgBamjGLYra1nuoMIHm0SjS0rr8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$stick$2d$to$2d$bottom$2f$dist$2f$StickToBottom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickToBottomContext"]
    ];
});
_c3 = ConversationScrollButton;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Conversation");
__turbopack_context__.k.register(_c1, "ConversationContent");
__turbopack_context__.k.register(_c2, "ConversationEmptyState");
__turbopack_context__.k.register(_c3, "ConversationScrollButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Separator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "273b17e7fdbf12c2fdaa97f45150d52eaa32cdd546adda1800a5f562f5660e7c") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "273b17e7fdbf12c2fdaa97f45150d52eaa32cdd546adda1800a5f562f5660e7c";
    }
    let className;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, orientation: t1, decorative: t2, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const orientation = t1 === undefined ? "horizontal" : t1;
    const decorative = t2 === undefined ? true : t2;
    let t3;
    if ($[6] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className);
        $[6] = className;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== decorative || $[9] !== orientation || $[10] !== props || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "separator",
            decorative: decorative,
            orientation: orientation,
            className: t3,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/separator.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[8] = decorative;
        $[9] = orientation;
        $[10] = props;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonGroup",
    ()=>ButtonGroup,
    "ButtonGroupSeparator",
    ()=>ButtonGroupSeparator,
    "ButtonGroupText",
    ()=>ButtonGroupText,
    "buttonGroupVariants",
    ()=>buttonGroupVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
const buttonGroupVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", {
    variants: {
        orientation: {
            horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
            vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
});
function ButtonGroup(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "ec05730643fcf3d344b2c788ff1349476b535af1225e4f74fb3ed4d6d732810a") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ec05730643fcf3d344b2c788ff1349476b535af1225e4f74fb3ed4d6d732810a";
    }
    let className;
    let orientation;
    let props;
    if ($[1] !== t0) {
        ({ className, orientation, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = orientation;
        $[4] = props;
    } else {
        className = $[2];
        orientation = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className || $[6] !== orientation) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonGroupVariants({
            orientation
        }), className);
        $[5] = className;
        $[6] = orientation;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== orientation || $[9] !== props || $[10] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "group",
            "data-slot": "button-group",
            "data-orientation": orientation,
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/button-group.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[8] = orientation;
        $[9] = props;
        $[10] = t1;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    return t2;
}
_c = ButtonGroup;
function ButtonGroupText(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "ec05730643fcf3d344b2c788ff1349476b535af1225e4f74fb3ed4d6d732810a") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ec05730643fcf3d344b2c788ff1349476b535af1225e4f74fb3ed4d6d732810a";
    }
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, asChild: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
    }
    const asChild = t1 === undefined ? false : t1;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "div";
    let t2;
    if ($[5] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className);
        $[5] = className;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== Comp || $[8] !== props || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/button-group.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[7] = Comp;
        $[8] = props;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
}
_c1 = ButtonGroupText;
function ButtonGroupSeparator(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "ec05730643fcf3d344b2c788ff1349476b535af1225e4f74fb3ed4d6d732810a") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ec05730643fcf3d344b2c788ff1349476b535af1225e4f74fb3ed4d6d732810a";
    }
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, orientation: t1, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
    }
    const orientation = t1 === undefined ? "vertical" : t1;
    let t2;
    if ($[5] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto", className);
        $[5] = className;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== orientation || $[8] !== props || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
            "data-slot": "button-group-separator",
            orientation: orientation,
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/button-group.tsx",
            lineNumber: 151,
            columnNumber: 10
        }, this);
        $[7] = orientation;
        $[8] = props;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
}
_c2 = ButtonGroupSeparator;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ButtonGroup");
__turbopack_context__.k.register(_c1, "ButtonGroupText");
__turbopack_context__.k.register(_c2, "ButtonGroupSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function TooltipProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46";
    }
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ delayDuration: t1, ...props } = t0);
        $[1] = t0;
        $[2] = props;
        $[3] = t1;
    } else {
        props = $[2];
        t1 = $[3];
    }
    const delayDuration = t1 === undefined ? 0 : t1;
    let t2;
    if ($[4] !== delayDuration || $[5] !== props) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
            "data-slot": "tooltip-provider",
            delayDuration: delayDuration,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tooltip.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[4] = delayDuration;
        $[5] = props;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    return t2;
}
_c = TooltipProvider;
function Tooltip(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipProvider, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                "data-slot": "tooltip",
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/tooltip.tsx",
                lineNumber: 61,
                columnNumber: 27
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tooltip.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c1 = Tooltip;
function TooltipTrigger(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46";
    }
    let props;
    if ($[1] !== t0) {
        ({ ...props } = t0);
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "tooltip-trigger",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tooltip.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_c2 = TooltipTrigger;
function TooltipContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "835583ebc47c2faa84f7ee7f160e415c2a2c61e972307a2b83c3d887f46f6f46";
    }
    let children;
    let className;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ className, sideOffset: t1, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
    }
    const sideOffset = t1 === undefined ? 0 : t1;
    let t2;
    if ($[6] !== className) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className);
        $[6] = className;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
            className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tooltip.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== children || $[10] !== props || $[11] !== sideOffset || $[12] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "tooltip-content",
                sideOffset: sideOffset,
                className: t2,
                ...props,
                children: [
                    children,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/tooltip.tsx",
                lineNumber: 145,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tooltip.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[9] = children;
        $[10] = props;
        $[11] = sideOffset;
        $[12] = t2;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    return t4;
}
_c3 = TooltipContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TooltipProvider");
__turbopack_context__.k.register(_c1, "Tooltip");
__turbopack_context__.k.register(_c2, "TooltipTrigger");
__turbopack_context__.k.register(_c3, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ai-elements/message.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Message",
    ()=>Message,
    "MessageAction",
    ()=>MessageAction,
    "MessageActions",
    ()=>MessageActions,
    "MessageAttachment",
    ()=>MessageAttachment,
    "MessageAttachments",
    ()=>MessageAttachments,
    "MessageBranch",
    ()=>MessageBranch,
    "MessageBranchContent",
    ()=>MessageBranchContent,
    "MessageBranchNext",
    ()=>MessageBranchNext,
    "MessageBranchPage",
    ()=>MessageBranchPage,
    "MessageBranchPrevious",
    ()=>MessageBranchPrevious,
    "MessageBranchSelector",
    ()=>MessageBranchSelector,
    "MessageContent",
    ()=>MessageContent,
    "MessageResponse",
    ()=>MessageResponse,
    "MessageToolbar",
    ()=>MessageToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperclipIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as PaperclipIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$streamdown$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/streamdown/dist/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const Message = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let className;
    let from;
    let props;
    if ($[1] !== t0) {
        ({ className, from, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = from;
        $[4] = props;
    } else {
        className = $[2];
        from = $[3];
        props = $[4];
    }
    const t1 = from === "user" ? "is-user ml-auto justify-end" : "is-assistant";
    let t2;
    if ($[5] !== className || $[6] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex w-full max-w-[80%] flex-col gap-2", t1, className);
        $[5] = className;
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== props || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = props;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
};
_c = Message;
const MessageContent = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ children, className, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("is-user:dark flex w-fit flex-col gap-2 overflow-hidden text-sm", "group-[.is-user]:ml-auto group-[.is-user]:rounded-lg group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground", "group-[.is-assistant]:text-foreground", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children || $[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = children;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
};
_c1 = MessageContent;
const MessageActions = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children || $[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 147,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = children;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
};
_c2 = MessageActions;
const MessageAction = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let children;
    let label;
    let props;
    let t1;
    let t2;
    let tooltip;
    if ($[1] !== t0) {
        ({ tooltip, children, label, variant: t1, size: t2, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = label;
        $[4] = props;
        $[5] = t1;
        $[6] = t2;
        $[7] = tooltip;
    } else {
        children = $[2];
        label = $[3];
        props = $[4];
        t1 = $[5];
        t2 = $[6];
        tooltip = $[7];
    }
    const variant = t1 === undefined ? "ghost" : t1;
    const size = t2 === undefined ? "icon-sm" : t2;
    const t3 = label || tooltip;
    let t4;
    if ($[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 204,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== children || $[11] !== props || $[12] !== size || $[13] !== t4 || $[14] !== variant) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: size,
            type: "button",
            variant: variant,
            ...props,
            children: [
                children,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 212,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = children;
        $[11] = props;
        $[12] = size;
        $[13] = t4;
        $[14] = variant;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const button = t5;
    if (tooltip) {
        let t6;
        if ($[16] !== button) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                asChild: true,
                children: button
            }, void 0, false, {
                fileName: "[project]/src/components/ai-elements/message.tsx",
                lineNumber: 226,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[16] = button;
            $[17] = t6;
        } else {
            t6 = $[17];
        }
        let t7;
        if ($[18] !== tooltip) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: tooltip
                }, void 0, false, {
                    fileName: "[project]/src/components/ai-elements/message.tsx",
                    lineNumber: 234,
                    columnNumber: 28
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ai-elements/message.tsx",
                lineNumber: 234,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[18] = tooltip;
            $[19] = t7;
        } else {
            t7 = $[19];
        }
        let t8;
        if ($[20] !== t6 || $[21] !== t7) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    children: [
                        t6,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ai-elements/message.tsx",
                    lineNumber: 242,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ai-elements/message.tsx",
                lineNumber: 242,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[20] = t6;
            $[21] = t7;
            $[22] = t8;
        } else {
            t8 = $[22];
        }
        return t8;
    }
    return button;
};
_c3 = MessageAction;
const MessageBranchContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useMessageBranch = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MessageBranchContext);
    if (!context) {
        throw new Error("MessageBranch components must be used within MessageBranch");
    }
    return context;
};
_s(useMessageBranch, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const MessageBranch = (t0)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let className;
    let onBranchChange;
    let props;
    let t1;
    if ($[1] !== t0) {
        ({ defaultBranch: t1, onBranchChange, className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = onBranchChange;
        $[4] = props;
        $[5] = t1;
    } else {
        className = $[2];
        onBranchChange = $[3];
        props = $[4];
        t1 = $[5];
    }
    const defaultBranch = t1 === undefined ? 0 : t1;
    const [currentBranch, setCurrentBranch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultBranch);
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const [branches, setBranches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[7] !== onBranchChange) {
        t3 = (newBranch)=>{
            setCurrentBranch(newBranch);
            onBranchChange?.(newBranch);
        };
        $[7] = onBranchChange;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const handleBranchChange = t3;
    let t4;
    if ($[9] !== branches.length || $[10] !== currentBranch || $[11] !== handleBranchChange) {
        t4 = ()=>{
            const newBranch_0 = currentBranch > 0 ? currentBranch - 1 : branches.length - 1;
            handleBranchChange(newBranch_0);
        };
        $[9] = branches.length;
        $[10] = currentBranch;
        $[11] = handleBranchChange;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const goToPrevious = t4;
    let t5;
    if ($[13] !== branches.length || $[14] !== currentBranch || $[15] !== handleBranchChange) {
        t5 = ()=>{
            const newBranch_1 = currentBranch < branches.length - 1 ? currentBranch + 1 : 0;
            handleBranchChange(newBranch_1);
        };
        $[13] = branches.length;
        $[14] = currentBranch;
        $[15] = handleBranchChange;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const goToNext = t5;
    let t6;
    if ($[17] !== branches || $[18] !== currentBranch || $[19] !== goToNext || $[20] !== goToPrevious) {
        t6 = {
            currentBranch,
            totalBranches: branches.length,
            goToPrevious,
            goToNext,
            branches,
            setBranches
        };
        $[17] = branches;
        $[18] = currentBranch;
        $[19] = goToNext;
        $[20] = goToPrevious;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    const contextValue = t6;
    let t7;
    if ($[22] !== className) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid w-full gap-2 [&>div]:pb-0", className);
        $[22] = className;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    let t8;
    if ($[24] !== props || $[25] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 389,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = props;
        $[25] = t7;
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    let t9;
    if ($[27] !== contextValue || $[28] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageBranchContext.Provider, {
            value: contextValue,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 398,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = contextValue;
        $[28] = t8;
        $[29] = t9;
    } else {
        t9 = $[29];
    }
    return t9;
};
_s1(MessageBranch, "VjjFpiDVM5DuXS5+ZrYDBgGB/X8=");
_c4 = MessageBranch;
const MessageBranchContent = (t0)=>{
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let children;
    let props;
    if ($[1] !== t0) {
        ({ children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
    } else {
        children = $[2];
        props = $[3];
    }
    const { currentBranch, setBranches, branches } = useMessageBranch();
    let t1;
    if ($[4] !== children) {
        t1 = Array.isArray(children) ? children : [
            children
        ];
        $[4] = children;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const childrenArray = t1;
    let t2;
    if ($[6] !== branches.length || $[7] !== childrenArray || $[8] !== setBranches) {
        t2 = ()=>{
            if (branches.length !== childrenArray.length) {
                setBranches(childrenArray);
            }
        };
        $[6] = branches.length;
        $[7] = childrenArray;
        $[8] = setBranches;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== branches || $[11] !== childrenArray || $[12] !== setBranches) {
        t3 = [
            childrenArray,
            branches,
            setBranches
        ];
        $[10] = branches;
        $[11] = childrenArray;
        $[12] = setBranches;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[14] !== childrenArray || $[15] !== currentBranch || $[16] !== props) {
        let t5;
        if ($[18] !== currentBranch || $[19] !== props) {
            t5 = (branch, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-2 overflow-hidden [&>div]:pb-0", index === currentBranch ? "block" : "hidden"),
                    ...props,
                    children: branch
                }, branch.key, false, {
                    fileName: "[project]/src/components/ai-elements/message.tsx",
                    lineNumber: 473,
                    columnNumber: 31
                }, ("TURBOPACK compile-time value", void 0));
            $[18] = currentBranch;
            $[19] = props;
            $[20] = t5;
        } else {
            t5 = $[20];
        }
        t4 = childrenArray.map(t5);
        $[14] = childrenArray;
        $[15] = currentBranch;
        $[16] = props;
        $[17] = t4;
    } else {
        t4 = $[17];
    }
    return t4;
};
_s2(MessageBranchContent, "H50dqoxBpZvG3PC0AE4l6/HbdTE=", false, function() {
    return [
        useMessageBranch
    ];
});
_c5 = MessageBranchContent;
const MessageBranchSelector = (t0)=>{
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let props;
    if ($[1] !== t0) {
        const { className, from, ...t1 } = t0;
        props = t1;
        $[1] = t0;
        $[2] = props;
    } else {
        props = $[2];
    }
    const { totalBranches } = useMessageBranch();
    if (totalBranches <= 1) {
        return null;
    }
    let t1;
    if ($[3] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonGroup"], {
            className: "[&>*:not(:first-child)]:rounded-l-md [&>*:not(:last-child)]:rounded-r-md",
            orientation: "horizontal",
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 522,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = props;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
};
_s3(MessageBranchSelector, "Iwk3OJ+anM+lnZRISJipiW5BddI=", false, function() {
    return [
        useMessageBranch
    ];
});
_c6 = MessageBranchSelector;
const MessageBranchPrevious = (t0)=>{
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let children;
    let props;
    if ($[1] !== t0) {
        ({ children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
    } else {
        children = $[2];
        props = $[3];
    }
    const { goToPrevious, totalBranches } = useMessageBranch();
    const t1 = totalBranches <= 1;
    let t2;
    if ($[4] !== children) {
        t2 = children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 560,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = children;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== goToPrevious || $[7] !== props || $[8] !== t1 || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "aria-label": "Previous branch",
            disabled: t1,
            onClick: goToPrevious,
            size: "icon-sm",
            type: "button",
            variant: "ghost",
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 568,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = goToPrevious;
        $[7] = props;
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
};
_s4(MessageBranchPrevious, "0kNDShJtNGhJdxqfFPz0vjtPsD0=", false, function() {
    return [
        useMessageBranch
    ];
});
_c7 = MessageBranchPrevious;
const MessageBranchNext = (t0)=>{
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let children;
    let props;
    if ($[1] !== t0) {
        const { children: t1, className, ...t2 } = t0;
        children = t1;
        props = t2;
        $[1] = t0;
        $[2] = children;
        $[3] = props;
    } else {
        children = $[2];
        props = $[3];
    }
    const { goToNext, totalBranches } = useMessageBranch();
    const t1 = totalBranches <= 1;
    let t2;
    if ($[4] !== children) {
        t2 = children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 612,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = children;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== goToNext || $[7] !== props || $[8] !== t1 || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "aria-label": "Next branch",
            disabled: t1,
            onClick: goToNext,
            size: "icon-sm",
            type: "button",
            variant: "ghost",
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 620,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = goToNext;
        $[7] = props;
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
};
_s5(MessageBranchNext, "wJs4fEs5nTDD025J6Tc2UWBv3YI=", false, function() {
    return [
        useMessageBranch
    ];
});
_c8 = MessageBranchNext;
const MessageBranchPage = (t0)=>{
    _s6();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    const { currentBranch, totalBranches } = useMessageBranch();
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-none bg-transparent text-muted-foreground shadow-none", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const t2 = currentBranch + 1;
    let t3;
    if ($[6] !== props || $[7] !== t1 || $[8] !== t2 || $[9] !== totalBranches) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonGroupText"], {
            className: t1,
            ...props,
            children: [
                t2,
                " of ",
                totalBranches
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 669,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
        $[9] = totalBranches;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
};
_s6(MessageBranchPage, "95gpZRZYzE3kC8xtWn+gOanbrao=", false, function() {
    return [
        useMessageBranch
    ];
});
_c9 = MessageBranchPage;
const MessageResponse = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c10 = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    let t1;
    if ($[4] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", className);
        $[4] = className;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== props || $[7] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$streamdown$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Streamdown"], {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 713,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = props;
        $[7] = t1;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    return t2;
}, (prevProps, nextProps)=>prevProps.children === nextProps.children);
_c11 = MessageResponse;
MessageResponse.displayName = "MessageResponse";
function MessageAttachment(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let className;
    let data;
    let onRemove;
    let props;
    if ($[1] !== t0) {
        ({ data, className, onRemove, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = data;
        $[4] = onRemove;
        $[5] = props;
    } else {
        className = $[2];
        data = $[3];
        onRemove = $[4];
        props = $[5];
    }
    const filename = data.filename || "";
    const mediaType = data.mediaType?.startsWith("image/") && data.url ? "image" : "file";
    const isImage = mediaType === "image";
    const attachmentLabel = filename || (isImage ? "Image" : "Attachment");
    let t1;
    if ($[6] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative size-24 overflow-hidden rounded-lg", className);
        $[6] = className;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== attachmentLabel || $[9] !== data.url || $[10] !== filename || $[11] !== isImage || $[12] !== onRemove) {
        t2 = isImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: filename || "attachment",
                    className: "size-full object-cover",
                    height: 100,
                    src: data.url,
                    width: 100
                }, void 0, false, {
                    fileName: "[project]/src/components/ai-elements/message.tsx",
                    lineNumber: 772,
                    columnNumber: 22
                }, this),
                onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    "aria-label": "Remove attachment",
                    className: "absolute top-2 right-2 size-6 rounded-full bg-background/80 p-0 opacity-0 backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100 [&>svg]:size-3",
                    onClick: {
                        "MessageAttachment[<Button>.onClick]": (e)=>{
                            e.stopPropagation();
                            onRemove();
                        }
                    }["MessageAttachment[<Button>.onClick]"],
                    type: "button",
                    variant: "ghost",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                            fileName: "[project]/src/components/ai-elements/message.tsx",
                            lineNumber: 777,
                            columnNumber: 79
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Remove"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ai-elements/message.tsx",
                            lineNumber: 777,
                            columnNumber: 88
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ai-elements/message.tsx",
                    lineNumber: 772,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex size-full shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaperclipIcon$3e$__["PaperclipIcon"], {
                                    className: "size-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ai-elements/message.tsx",
                                    lineNumber: 777,
                                    columnNumber: 296
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ai-elements/message.tsx",
                                lineNumber: 777,
                                columnNumber: 185
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ai-elements/message.tsx",
                            lineNumber: 777,
                            columnNumber: 154
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: attachmentLabel
                            }, void 0, false, {
                                fileName: "[project]/src/components/ai-elements/message.tsx",
                                lineNumber: 777,
                                columnNumber: 371
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ai-elements/message.tsx",
                            lineNumber: 777,
                            columnNumber: 355
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ai-elements/message.tsx",
                    lineNumber: 777,
                    columnNumber: 145
                }, this),
                onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    "aria-label": "Remove attachment",
                    className: "size-6 shrink-0 rounded-full p-0 opacity-0 transition-opacity hover:bg-accent group-hover:opacity-100 [&>svg]:size-3",
                    onClick: {
                        "MessageAttachment[<Button>.onClick]": (e_0)=>{
                            e_0.stopPropagation();
                            onRemove();
                        }
                    }["MessageAttachment[<Button>.onClick]"],
                    type: "button",
                    variant: "ghost",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                            fileName: "[project]/src/components/ai-elements/message.tsx",
                            lineNumber: 782,
                            columnNumber: 79
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Remove"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ai-elements/message.tsx",
                            lineNumber: 782,
                            columnNumber: 88
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ai-elements/message.tsx",
                    lineNumber: 777,
                    columnNumber: 435
                }, this)
            ]
        }, void 0, true);
        $[8] = attachmentLabel;
        $[9] = data.url;
        $[10] = filename;
        $[11] = isImage;
        $[12] = onRemove;
        $[13] = t2;
    } else {
        t2 = $[13];
    }
    let t3;
    if ($[14] !== props || $[15] !== t1 || $[16] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 794,
            columnNumber: 10
        }, this);
        $[14] = props;
        $[15] = t1;
        $[16] = t2;
        $[17] = t3;
    } else {
        t3 = $[17];
    }
    return t3;
}
_c12 = MessageAttachment;
function MessageAttachments(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ children, className, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    if (!children) {
        return null;
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto flex w-fit flex-wrap items-start gap-2", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children || $[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 844,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c13 = MessageAttachments;
const MessageToolbar = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1587e963b9b4e58f8818e606fdbb13a022f4f4d6a4290c69a11ede0645e6575";
    }
    let children;
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 flex w-full items-center justify-between gap-4", className);
        $[5] = className;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== children || $[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ai-elements/message.tsx",
            lineNumber: 891,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = children;
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
};
_c14 = MessageToolbar;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "Message");
__turbopack_context__.k.register(_c1, "MessageContent");
__turbopack_context__.k.register(_c2, "MessageActions");
__turbopack_context__.k.register(_c3, "MessageAction");
__turbopack_context__.k.register(_c4, "MessageBranch");
__turbopack_context__.k.register(_c5, "MessageBranchContent");
__turbopack_context__.k.register(_c6, "MessageBranchSelector");
__turbopack_context__.k.register(_c7, "MessageBranchPrevious");
__turbopack_context__.k.register(_c8, "MessageBranchNext");
__turbopack_context__.k.register(_c9, "MessageBranchPage");
__turbopack_context__.k.register(_c10, "MessageResponse$memo");
__turbopack_context__.k.register(_c11, "MessageResponse");
__turbopack_context__.k.register(_c12, "MessageAttachment");
__turbopack_context__.k.register(_c13, "MessageAttachments");
__turbopack_context__.k.register(_c14, "MessageToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/chat/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ai$2d$elements$2f$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ai-elements/conversation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ai-elements/message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquareIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const messages = [
    {
        key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
        value: "Hello, how are you?",
        from: "user"
    },
    {
        key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
        value: "I'm good, thank you! How can I assist you today?",
        from: "assistant"
    }
];
const Example = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "a1be27d34877983726d0286925e63958e57f4aeb49ba617b4c890a2f206bb9ab") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1be27d34877983726d0286925e63958e57f4aeb49ba617b4c890a2f206bb9ab";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [visibleMessages, setVisibleMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            let currentIndex = 0;
            const interval = setInterval(()=>{
                if (currentIndex < messages.length && messages[currentIndex]) {
                    const currentMessage = messages[currentIndex];
                    setVisibleMessages((prev)=>[
                            ...prev,
                            {
                                key: currentMessage.key,
                                value: currentMessage.value,
                                from: currentMessage.from
                            }
                        ]);
                    currentIndex = currentIndex + 1;
                    currentIndex;
                } else {
                    clearInterval(interval);
                }
            }, 500);
            return ()=>clearInterval(interval);
        };
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== visibleMessages) {
        t3 = visibleMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ai$2d$elements$2f$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConversationEmptyState"], {
            description: "Messages will appear here as the conversation progresses.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareIcon$3e$__["MessageSquareIcon"], {
                className: "size-6"
            }, void 0, false, {
                fileName: "[project]/src/app/chat/page.tsx",
                lineNumber: 69,
                columnNumber: 143
            }, void 0),
            title: "Start a conversation"
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 69,
            columnNumber: 41
        }, ("TURBOPACK compile-time value", void 0)) : visibleMessages.map(_temp);
        $[4] = visibleMessages;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ai$2d$elements$2f$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConversationContent"], {
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ai$2d$elements$2f$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConversationScrollButton"], {}, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ai$2d$elements$2f$conversation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Conversation"], {
            className: "relative size-full",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t4;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    return t6;
};
_s(Example, "Ff3tNrLCyUMYtJ3n7wImznbRZws=");
_c = Example;
const __TURBOPACK__default__export__ = Example;
function _temp(t0) {
    const { key, value, from } = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Message"], {
        from: from,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ai$2d$elements$2f$message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageContent"], {
            children: value
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 107,
            columnNumber: 41
        }, this)
    }, key, false, {
        fileName: "[project]/src/app/chat/page.tsx",
        lineNumber: 107,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Example");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b8333550._.js.map