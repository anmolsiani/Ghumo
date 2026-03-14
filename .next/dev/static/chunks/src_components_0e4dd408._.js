(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Button = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "0c46b865ca977c59bfb25cec3ad621cb56bafe4397df0b4e387ad98d31a95d24") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0c46b865ca977c59bfb25cec3ad621cb56bafe4397df0b4e387ad98d31a95d24";
    }
    let children;
    let props;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== t0) {
        ({ children, variant: t1, magnetic: t2, withArrow: t3, className: t4, as: t5, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
    } else {
        children = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
    }
    const variant = t1 === undefined ? "primary" : t1;
    const magnetic = t2 === undefined ? false : t2;
    const withArrow = t3 === undefined ? false : t3;
    const className = t4 === undefined ? "" : t4;
    const Component = t5 === undefined ? "button" : t5;
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            x: 0,
            y: 0
        };
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    let t7;
    if ($[10] !== magnetic) {
        t7 = (e)=>{
            if (!magnetic || !buttonRef.current) {
                return;
            }
            const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) * 0.3;
            const y = (e.clientY - top - height / 2) * 0.3;
            setPosition({
                x,
                y
            });
        };
        $[10] = magnetic;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const handleMouseMove = t7;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ()=>{
            setPosition({
                x: 0,
                y: 0
            });
        };
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const handleMouseLeave = t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            primary: "bg-[#8B7355] text-white hover:bg-[#2C5F5D] shadow-[0_4px_16px_rgba(139,115,85,0.3)] hover:shadow-[0_8px_24px_rgba(44,95,93,0.4)]",
            secondary: "bg-transparent border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white",
            glass: "glass text-white"
        };
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const variants = t9;
    let t10;
    if ($[14] !== Component) {
        t10 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].create(Component);
        $[14] = Component;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const MotionComponent = t10;
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1
        };
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    const t12 = `relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-colors duration-400 ease-smooth cursor-pointer ${variants[variant]} ${className}`;
    let t13;
    if ($[17] !== children) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = children;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== withArrow) {
        t14 = withArrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 155,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = withArrow;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== MotionComponent || $[22] !== handleMouseMove || $[23] !== position || $[24] !== props || $[25] !== t12 || $[26] !== t13 || $[27] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionComponent, {
            ref: buttonRef,
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
            animate: position,
            transition: t11,
            className: t12,
            ...props,
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = MotionComponent;
        $[22] = handleMouseMove;
        $[23] = position;
        $[24] = props;
        $[25] = t12;
        $[26] = t13;
        $[27] = t14;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    return t15;
};
_s(Button, "LswbeZ56KjFGeR+kU46HS30I3b0=");
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/NavBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavBar",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function NavBar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "627abd509b69c66411b4322f964163c34db4eca44229df2ef6ffd6e8bd2d5002") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "627abd509b69c66411b4322f964163c34db4eca44229df2ef6ffd6e8bd2d5002";
    }
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    let t0;
    if ($[1] !== hidden || $[2] !== isOpen || $[3] !== scrollY || $[4] !== scrolled) {
        t0 = ({
            "NavBar[useMotionValueEvent()]": (latest)=>{
                if (isOpen) {
                    if (hidden) {
                        setHidden(false);
                    }
                    return;
                }
                const previous = scrollY.getPrevious() || 0;
                const diff = latest - previous;
                if (Math.abs(diff) > 5) {
                    const shouldHide = latest > previous && latest > 200;
                    if (shouldHide !== hidden) {
                        setHidden(shouldHide);
                    }
                }
                const isScrolled = latest > 50;
                if (isScrolled !== scrolled) {
                    setScrolled(isScrolled);
                }
            }
        })["NavBar[useMotionValueEvent()]"];
        $[1] = hidden;
        $[2] = isOpen;
        $[3] = scrollY;
        $[4] = scrolled;
        $[5] = t0;
    } else {
        t0 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollY, "change", t0);
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                name: "Home",
                href: "/"
            },
            {
                name: "Destinations",
                href: "/destinations"
            },
            {
                name: "About",
                href: "/about"
            },
            {
                name: "Gallery",
                href: "/gallery"
            },
            {
                name: "Start Journey",
                href: "/start-journey",
                highlight: true
            },
            {
                name: "Blog",
                href: "/blog"
            }
        ];
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const navLinks = t1;
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            visible: {
                y: 0
            },
            hidden: {
                y: "-100%"
            }
        };
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const t3 = hidden ? "hidden" : "visible";
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            duration: 0.35,
            ease: "easeInOut"
        };
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const t5 = `fixed top-0 left-0 right-0 z-[130] transition-colors duration-300 ${scrolled || isOpen ? "glass border-b border-black/5" : "bg-transparent"}`;
    let t6;
    if ($[9] !== isOpen) {
        t6 = ({
            "NavBar[<button>.onClick]": ()=>setIsOpen(!isOpen)
        })["NavBar[<button>.onClick]"];
        $[9] = isOpen;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== isOpen) {
        t7 = isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/NavBar.tsx",
            lineNumber: 121,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/NavBar.tsx",
            lineNumber: 121,
            columnNumber: 47
        }, this);
        $[11] = isOpen;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t6 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden flex-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t6,
                className: "p-2 rounded-xl bg-gray-100/50 hover:bg-gray-100 transition-colors text-[var(--text-primary)]",
                "aria-label": "Toggle Menu",
                children: t7
            }, void 0, false, {
                fileName: "[project]/src/components/ui/NavBar.tsx",
                lineNumber: 129,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/NavBar.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "NavBar[<Link>.onClick]": ()=>setIsOpen(false)
        })["NavBar[<Link>.onClick]"];
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 lg:flex-none flex justify-center lg:justify-start lg:mr-auto overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "font-heading font-black text-base sx:text-lg sm:text-xl md:text-2xl tracking-tighter text-[var(--accent-earth)] whitespace-nowrap",
                onClick: t9,
                children: [
                    "GHUMO",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--text-primary)]",
                        children: "HOLIDAYS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavBar.tsx",
                        lineNumber: 147,
                        columnNumber: 287
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NavBar.tsx",
                lineNumber: 147,
                columnNumber: 112
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/NavBar.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden lg:flex items-center gap-8 font-medium mx-12",
            children: navLinks.map(_NavBarNavLinksMap)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/NavBar.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "NavBar[<Link>.onClick]": ()=>setIsOpen(false)
        })["NavBar[<Link>.onClick]"];
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/cart",
            onClick: t12,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "secondary",
                className: "!px-3 sm:!px-4 md:!px-6 !py-2 md:!py-3 !rounded-full !text-xs md:!text-sm flex items-center gap-2",
                as: "div",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                        className: "w-4 h-4 text-[var(--text-primary)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavBar.tsx",
                        lineNumber: 170,
                        columnNumber: 191
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: "Cart"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavBar.tsx",
                        lineNumber: 170,
                        columnNumber: 254
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NavBar.tsx",
                lineNumber: 170,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/NavBar.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-none lg:flex-none flex items-center justify-end gap-2 md:gap-4",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    className: "hidden lg:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "primary",
                        magnetic: true,
                        className: "!px-6 !py-3 !rounded-full !text-sm",
                        as: "div",
                        children: "Contact Us"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NavBar.tsx",
                        lineNumber: 177,
                        columnNumber: 151
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/NavBar.tsx",
                    lineNumber: 177,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/NavBar.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 h-16 md:h-24 flex items-center gap-2",
            children: [
                t8,
                t10,
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/NavBar.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[22] = t8;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t15 || $[25] !== t3 || $[26] !== t5) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
            variants: t2,
            animate: t3,
            transition: t4,
            className: t5,
            children: t15
        }, void 0, false, {
            fileName: "[project]/src/components/ui/NavBar.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[24] = t15;
        $[25] = t3;
        $[26] = t5;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== isOpen) {
        t17 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: {
                        "NavBar[<motion.div>.onClick]": ()=>setIsOpen(false)
                    }["NavBar[<motion.div>.onClick]"],
                    className: "fixed inset-0 bg-black/20 backdrop-blur-sm z-[110] lg:hidden"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/NavBar.tsx",
                    lineNumber: 202,
                    columnNumber: 23
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        x: "-100%"
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: "-100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 200
                    },
                    className: "fixed inset-y-0 left-0 w-[280px] sm:w-[300px] z-[120] p-8 lg:hidden glass border-r border-black/5 flex flex-col pt-24 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-6",
                        children: [
                            navLinks.map({
                                "NavBar[navLinks.map()]": (link_0, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.1 + idx * 0.05
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link_0.href,
                                            onClick: {
                                                "NavBar[navLinks.map() > <Link>.onClick]": ()=>setIsOpen(false)
                                            }["NavBar[navLinks.map() > <Link>.onClick]"],
                                            className: `text-2xl font-black tracking-tighter hover:text-[var(--accent-earth)] transition-colors block ${link_0.highlight ? "text-[var(--accent-teal)]" : "text-[var(--text-primary)]"}`,
                                            children: link_0.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NavBar.tsx",
                                            lineNumber: 229,
                                            columnNumber: 16
                                        }, this)
                                    }, link_0.name, false, {
                                        fileName: "[project]/src/components/ui/NavBar.tsx",
                                        lineNumber: 221,
                                        columnNumber: 56
                                    }, this)
                            }["NavBar[navLinks.map()]"]),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 0.4
                                },
                                className: "pt-10 mt-4 border-t border-black/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    onClick: {
                                        "NavBar[<Link>.onClick]": ()=>setIsOpen(false)
                                    }["NavBar[<Link>.onClick]"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "primary",
                                        className: "w-full !py-4 !rounded-2xl !text-base",
                                        as: "div",
                                        children: "Talk to an Expert"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NavBar.tsx",
                                        lineNumber: 242,
                                        columnNumber: 42
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/NavBar.tsx",
                                    lineNumber: 240,
                                    columnNumber: 61
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NavBar.tsx",
                                lineNumber: 232,
                                columnNumber: 40
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NavBar.tsx",
                        lineNumber: 220,
                        columnNumber: 156
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/NavBar.tsx",
                    lineNumber: 210,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true);
        $[28] = isOpen;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/ui/NavBar.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[30] = t17;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] !== t16 || $[33] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t16,
                t18
            ]
        }, void 0, true);
        $[32] = t16;
        $[33] = t18;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    return t19;
}
_s(NavBar, "OoJgkE00ZhLZnGiuRhztbnhX86s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = NavBar;
function _NavBarNavLinksMap(link) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: link.href,
        className: `hover:text-[var(--accent-earth)] transition-colors text-xs uppercase tracking-widest font-bold ${link.highlight ? "text-[var(--accent-teal)]" : "text-[var(--text-primary)]"}`,
        children: link.name
    }, link.name, false, {
        fileName: "[project]/src/components/ui/NavBar.tsx",
        lineNumber: 268,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>");
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
function Footer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "12eb60bbed3d4f3579c175de4ffae3dc84c4c1e776a388710e3ba582e06de2a8") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12eb60bbed3d4f3579c175de4ffae3dc84c4c1e776a388710e3ba582e06de2a8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            name: "",
            email: "",
            phone: "",
            message: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    let t1;
    if ($[2] !== formData.email || $[3] !== formData.message || $[4] !== formData.name || $[5] !== formData.phone) {
        t1 = ({
            "Footer[handleSubmit]": async (e)=>{
                e.preventDefault();
                setStatus("sending");
                const params = {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message || "Legacy Footer Contact",
                    submission_date: new Date().toLocaleString("en-IN"),
                    reference_id: "GH-" + Date.now().toString().slice(-8)
                };
                ;
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send(("TURBOPACK compile-time value", "service_f2x5t7q"), ("TURBOPACK compile-time value", "template_440at29"), params, ("TURBOPACK compile-time value", "Q_ti9n4B5LPHdxHO9"));
                    setStatus("success");
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: ""
                    });
                    setTimeout({
                        "Footer[handleSubmit > setTimeout()]": ()=>setStatus("idle")
                    }["Footer[handleSubmit > setTimeout()]"], 3000);
                } catch (t2) {
                    const err = t2;
                    console.error(err);
                    setStatus("error");
                }
            }
        })["Footer[handleSubmit]"];
        $[2] = formData.email;
        $[3] = formData.message;
        $[4] = formData.name;
        $[5] = formData.phone;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const handleSubmit = t1;
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[25vw] font-black text-black/[0.02] leading-none tracking-tighter uppercase",
                children: "GHUMO"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Footer.tsx",
                lineNumber: 77,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    let t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            y: 50,
            opacity: 0
        };
        t4 = {
            y: 0,
            opacity: 1
        };
        t5 = {
            once: true
        };
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
    } else {
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
    }
    let t6;
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 w-[50%] h-full bg-gradient-to-bl from-[var(--accent-earth)]/20 to-transparent blur-3xl -z-10"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 w-[50%] h-full bg-gradient-to-tr from-[var(--accent-teal)]/10 to-transparent blur-3xl -z-10"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t7;
    } else {
        t6 = $[11];
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t10;
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-5xl font-black text-white leading-tight",
            children: [
                "The range of functionalities ",
                t8,
                "offered on the platform ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 126,
                    columnNumber: 140
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-400",
                    children: "includes the ability to connect"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 126,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 max-w-md mx-auto lg:mx-0 text-sm md:text-base leading-relaxed",
            children: "With existing travel strategies that reduce risk and automatically curate the best soulful journeys for you."
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t9;
    } else {
        t10 = $[14];
        t9 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/start-journey",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "primary",
                className: "!rounded-full !px-8 !py-4 h-auto shadow-lg shadow-[var(--accent-earth)]/20",
                as: "div",
                children: [
                    "Get started ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "ml-2 w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Footer.tsx",
                        lineNumber: 136,
                        columnNumber: 173
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Footer.tsx",
                lineNumber: 136,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 text-center lg:text-left",
            children: [
                t9,
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center lg:justify-start gap-6 pt-4",
                    children: [
                        t11,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/gallery",
                            className: "flex items-center gap-2 text-white font-bold hover:text-[var(--accent-earth)] transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center",
                                    children: "▶"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Footer.tsx",
                                    lineNumber: 143,
                                    columnNumber: 282
                                }, this),
                                "Watch how it works"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 143,
                            columnNumber: 152
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 143,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== formData) {
        t13 = ({
            "Footer[<input>.onChange]": (e_0)=>setFormData({
                    ...formData,
                    name: e_0.target.value
                })
        })["Footer[<input>.onChange]"];
        $[18] = formData;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== formData.name || $[21] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            required: true,
            placeholder: "Name",
            value: formData.name,
            onChange: t13,
            className: "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[var(--accent-earth)] outline-none transition-colors text-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[20] = formData.name;
        $[21] = t13;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== formData) {
        t15 = ({
            "Footer[<input>.onChange]": (e_1)=>setFormData({
                    ...formData,
                    phone: e_1.target.value
                })
        })["Footer[<input>.onChange]"];
        $[23] = formData;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== formData.phone || $[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "tel",
            required: true,
            placeholder: "Phone",
            value: formData.phone,
            onChange: t15,
            className: "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[var(--accent-earth)] outline-none transition-colors text-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[25] = formData.phone;
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t14 || $[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[28] = t14;
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== formData) {
        t18 = ({
            "Footer[<input>.onChange]": (e_2)=>setFormData({
                    ...formData,
                    email: e_2.target.value
                })
        })["Footer[<input>.onChange]"];
        $[31] = formData;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== formData.email || $[34] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "email",
            required: true,
            placeholder: "Email Address",
            value: formData.email,
            onChange: t18,
            className: "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[var(--accent-earth)] outline-none transition-colors text-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[33] = formData.email;
        $[34] = t18;
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    if ($[36] !== formData) {
        t20 = ({
            "Footer[<textarea>.onChange]": (e_3)=>setFormData({
                    ...formData,
                    message: e_3.target.value
                })
        })["Footer[<textarea>.onChange]"];
        $[36] = formData;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== formData.message || $[39] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            placeholder: "Tell us about your next adventure...",
            rows: 2,
            value: formData.message,
            onChange: t20,
            className: "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[var(--accent-earth)] outline-none transition-colors resize-none text-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[38] = formData.message;
        $[39] = t20;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    const t22 = status === "sending";
    const t23 = status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message";
    let t24;
    if ($[41] !== t22 || $[42] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            variant: "primary",
            className: "w-full py-4 !rounded-xl",
            disabled: t22,
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[41] = t22;
        $[42] = t23;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    let t25;
    if ($[44] !== handleSubmit || $[45] !== t17 || $[46] !== t19 || $[47] !== t21 || $[48] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t3,
            whileInView: t4,
            viewport: t5,
            className: "relative -mt-64 mb-32 bg-[#0A0C12] rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl",
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4",
                                children: [
                                    t17,
                                    t19,
                                    t21,
                                    t24
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Footer.tsx",
                                lineNumber: 258,
                                columnNumber: 345
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 258,
                            columnNumber: 258
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 258,
                    columnNumber: 184
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[44] = handleSubmit;
        $[45] = t17;
        $[46] = t19;
        $[47] = t21;
        $[48] = t24;
        $[49] = t25;
    } else {
        t25 = $[49];
    }
    let t26;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "font-black text-2xl tracking-tighter uppercase",
                    children: [
                        "GHUMO",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[var(--accent-earth)]",
                            children: "."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 270,
                            columnNumber: 117
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 270,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[var(--text-secondary)] font-medium leading-relaxed max-w-[240px]",
                    children: "We curate experiences that stay with you long after you return home."
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 270,
                    columnNumber: 177
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[50] = t26;
    } else {
        t26 = $[50];
    }
    let t27;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-sm uppercase tracking-widest text-black/40",
            children: "Discover"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4 text-sm font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/destinations",
                                className: "hover:text-[var(--accent-earth)] transition-colors",
                                children: "Destinations"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Footer.tsx",
                                lineNumber: 284,
                                columnNumber: 91
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 284,
                            columnNumber: 87
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/packages",
                                className: "hover:text-[var(--accent-earth)] transition-colors",
                                children: "Curated Packages"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Footer.tsx",
                                lineNumber: 284,
                                columnNumber: 209
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 284,
                            columnNumber: 205
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/gallery",
                                className: "hover:text-[var(--accent-earth)] transition-colors",
                                children: "Visual Gallery"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Footer.tsx",
                                lineNumber: 284,
                                columnNumber: 327
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 284,
                            columnNumber: 323
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/blog",
                                className: "hover:text-[var(--accent-earth)] transition-colors",
                                children: "Travel Stories"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Footer.tsx",
                                lineNumber: 284,
                                columnNumber: 442
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 284,
                            columnNumber: 438
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 284,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[52] = t28;
    } else {
        t28 = $[52];
    }
    let t29;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-sm uppercase tracking-widest text-black/40",
            children: "Company"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[53] = t29;
    } else {
        t29 = $[53];
    }
    let t30;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4 text-sm font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                className: "hover:text-[var(--accent-earth)] transition-colors",
                                children: "Visionaries"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Footer.tsx",
                                lineNumber: 298,
                                columnNumber: 91
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 298,
                            columnNumber: 87
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "hover:text-[var(--accent-earth)] transition-colors",
                                children: "Support Center"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Footer.tsx",
                                lineNumber: 298,
                                columnNumber: 201
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 298,
                            columnNumber: 197
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/privacy",
                                className: "hover:text-[var(--accent-earth)] transition-colors",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Footer.tsx",
                                lineNumber: 298,
                                columnNumber: 316
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 298,
                            columnNumber: 312
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/terms",
                                className: "hover:text-[var(--accent-earth)] transition-colors",
                                children: "Terms of Use"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Footer.tsx",
                                lineNumber: 298,
                                columnNumber: 431
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 298,
                            columnNumber: 427
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 298,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[54] = t30;
    } else {
        t30 = $[54];
    }
    let t31;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-sm uppercase tracking-widest text-black/40",
            children: "Social"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[55] = t31;
    } else {
        t31 = $[55];
    }
    let t32;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20",
            children: [
                t26,
                t28,
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        t31,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-4 text-sm font-bold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[var(--accent-earth)] transition-colors",
                                        children: "X (Twitter)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Footer.tsx",
                                        lineNumber: 312,
                                        columnNumber: 183
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Footer.tsx",
                                    lineNumber: 312,
                                    columnNumber: 179
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[var(--accent-earth)] transition-colors",
                                        children: "Instagram"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Footer.tsx",
                                        lineNumber: 312,
                                        columnNumber: 282
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Footer.tsx",
                                    lineNumber: 312,
                                    columnNumber: 278
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[var(--accent-earth)] transition-colors",
                                        children: "LinkedIn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Footer.tsx",
                                        lineNumber: 312,
                                        columnNumber: 379
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Footer.tsx",
                                    lineNumber: 312,
                                    columnNumber: 375
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[var(--accent-earth)] transition-colors",
                                        children: "YouTube"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Footer.tsx",
                                        lineNumber: 312,
                                        columnNumber: 475
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Footer.tsx",
                                    lineNumber: 312,
                                    columnNumber: 471
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 312,
                            columnNumber: 135
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 312,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[56] = t32;
    } else {
        t32 = $[56];
    }
    let t33;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 319,
                    columnNumber: 111
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] font-black uppercase tracking-widest text-green-600",
                    children: "All systems operational"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 319,
                    columnNumber: 178
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[57] = t33;
    } else {
        t33 = $[57];
    }
    let t34;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-bold text-black/40 uppercase tracking-widest",
            children: [
                "© ",
                new Date().getFullYear(),
                " GHUMO. All rights reserved."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[58] = t34;
    } else {
        t34 = $[58];
    }
    let t35;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-8 border-t border-black/5 flex flex-col md:row items-center justify-between gap-6",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center gap-6",
                    children: [
                        t34,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy",
                                    className: "text-[10px] font-bold text-black/40 uppercase tracking-widest hover:text-black transition-colors",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Footer.tsx",
                                    lineNumber: 333,
                                    columnNumber: 213
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/terms",
                                    className: "text-[10px] font-bold text-black/40 uppercase tracking-widest hover:text-black transition-colors",
                                    children: "Terms of Use"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Footer.tsx",
                                    lineNumber: 333,
                                    columnNumber: 365
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/Footer.tsx",
                            lineNumber: 333,
                            columnNumber: 185
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 333,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[59] = t35;
    } else {
        t35 = $[59];
    }
    let t36;
    if ($[60] !== t25) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "relative bg-[#F8F9FA] pt-48 pb-12 overflow-hidden",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10",
                    children: [
                        t25,
                        t32,
                        t35
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Footer.tsx",
                    lineNumber: 340,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Footer.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[60] = t25;
        $[61] = t36;
    } else {
        t36 = $[61];
    }
    return t36;
}
_s(Footer, "EZq1Vc/b4oW8mKVkAjue1L5kQ1I=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/SmoothScrollProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmoothScrollProvider",
    ()=>SmoothScrollProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SmoothScrollProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "c2a9c8118332bc61f47fba1bf6033bf9ead6b0e6f91b30d8049bed2d41bddd9c") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c2a9c8118332bc61f47fba1bf6033bf9ead6b0e6f91b30d8049bed2d41bddd9c";
    }
    const { children } = t0;
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "SmoothScrollProvider[useEffect()]": ()=>{
                setMounted(true);
            }
        })["SmoothScrollProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[3] !== mounted) {
        t3 = ({
            "SmoothScrollProvider[useEffect()]": ()=>{
                if (!mounted) {
                    return;
                }
                const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                    duration: 1.5,
                    easing: _temp,
                    lerp: 0.1,
                    smoothWheel: true
                });
                lenisRef.current = lenis;
                let rfId;
                function raf(time) {
                    lenis.raf(time);
                    rfId = requestAnimationFrame(raf);
                }
                rfId = requestAnimationFrame(raf);
                return ()=>{
                    lenis.destroy();
                    cancelAnimationFrame(rfId);
                };
            }
        })["SmoothScrollProvider[useEffect()]"];
        t4 = [
            mounted
        ];
        $[3] = mounted;
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== children) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "smooth-scroll-wrapper",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/layout/SmoothScrollProvider.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_s(SmoothScrollProvider, "yhgCiuYi+Kmc2fR7UZAmHNEd7Ys=");
_c = SmoothScrollProvider;
function _temp(t) {
    return Math.min(1, 1.001 - Math.pow(2, -10 * t));
}
var _c;
__turbopack_context__.k.register(_c, "SmoothScrollProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_0e4dd408._.js.map