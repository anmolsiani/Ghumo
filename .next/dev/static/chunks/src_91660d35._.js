(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/animations/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Reveal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "e6fb7296d39adab61acd63d90c5fe5536e61921d31dbaf4dac6ccdcf43168ceb") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e6fb7296d39adab61acd63d90c5fe5536e61921d31dbaf4dac6ccdcf43168ceb";
    }
    const { children, direction: t1, delay: t2, duration: t3, distance: t4, stagger: t5 } = t0;
    const direction = t1 === undefined ? "up" : t1;
    const delay = t2 === undefined ? 0 : t2;
    const duration = t3 === undefined ? 0.8 : t3;
    const distance = t4 === undefined ? 50 : t4;
    const stagger = t5 === undefined ? 0.1 : t5;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t6;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t6;
    } else {
        t6 = $[1];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t6);
    const t7 = direction === "left" ? -distance : direction === "right" ? distance : 0;
    const t8 = direction === "up" ? distance : direction === "down" ? -distance : 0;
    let t9;
    if ($[2] !== t7 || $[3] !== t8) {
        t9 = {
            opacity: 0,
            x: t7,
            y: t8
        };
        $[2] = t7;
        $[3] = t8;
        $[4] = t9;
    } else {
        t9 = $[4];
    }
    let t10;
    if ($[5] !== delay || $[6] !== duration || $[7] !== stagger) {
        t10 = {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                staggerChildren: stagger,
                ease: "easeOut"
            }
        };
        $[5] = delay;
        $[6] = duration;
        $[7] = stagger;
        $[8] = t10;
    } else {
        t10 = $[8];
    }
    let t11;
    if ($[9] !== t10 || $[10] !== t9) {
        t11 = {
            hidden: t9,
            visible: t10
        };
        $[9] = t10;
        $[10] = t9;
        $[11] = t11;
    } else {
        t11 = $[11];
    }
    const variants = t11;
    const t12 = isInView ? "visible" : "hidden";
    let t13;
    if ($[12] !== children || $[13] !== t12 || $[14] !== variants) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "reveal-wrapper",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: variants,
                initial: "hidden",
                animate: t12,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/animations/Reveal.tsx",
                lineNumber: 98,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/animations/Reveal.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[12] = children;
        $[13] = t12;
        $[14] = variants;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    return t13;
}
_s(Reveal, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animations/Reveal.tsx [app-client] (ecmascript)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Hero() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "ffc590fea881a99bb9a209ecbcc907e7635803b05ec9e6e3dbdefc69bad0f379") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ffc590fea881a99bb9a209ecbcc907e7635803b05ec9e6e3dbdefc69bad0f379";
    }
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Hero[useEffect()]": ()=>{
                if (!containerRef.current) {
                    return;
                }
                const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                    "Hero[useEffect() > gsap.context()]": ()=>{
                        const parallaxElements = containerRef.current?.querySelectorAll("[data-speed]");
                        parallaxElements?.forEach({
                            "Hero[useEffect() > gsap.context() > (anonymous)()]": (el)=>{
                                const speed = parseFloat(el.dataset.speed || "1");
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                                    y: ()=>-(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].maxScroll(window) * (speed - 1) * 0.1),
                                    ease: "none",
                                    scrollTrigger: {
                                        trigger: containerRef.current,
                                        start: "top top",
                                        end: "bottom top",
                                        scrub: true
                                    }
                                });
                            }
                        }["Hero[useEffect() > gsap.context() > (anonymous)()]"]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imageRef.current, {
                            scale: 0.8,
                            opacity: 0,
                            y: 100
                        }, {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            duration: 1.5,
                            ease: "expo.out",
                            delay: 0.5
                        });
                    }
                }["Hero[useEffect() > gsap.context()]"], containerRef);
                return ()=>ctx.revert();
            }
        })["Hero[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1/4 left-1/10 w-64 h-64 bg-[#8B7355]/5 rounded-full blur-3xl",
            "data-speed": "0.3"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#2C5F5D]/5 rounded-full blur-3xl",
            "data-speed": "0.6"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block px-4 py-2 bg-white/50 backdrop-blur-md border border-white/30 rounded-full shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-earth)]",
                children: "Premium Travel 2026"
            }, void 0, false, {
                fileName: "[project]/src/components/home/Hero.tsx",
                lineNumber: 86,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            fontFamily: "var(--font-oxanium)"
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-earth)] to-[var(--accent-teal)]",
            children: "PREMIUM"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-[var(--text-hero)] leading-[1.05] font-black tracking-tight",
            style: t5,
            children: [
                "SUPER ",
                t6,
                t7,
                "TRAVEL ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "italic font-light",
                    children: "EXPERIENCES"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.tsx",
                    lineNumber: 114,
                    columnNumber: 123
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[var(--text-base)] text-[var(--text-secondary)] max-w-lg leading-relaxed font-medium",
            children: "We don't just plan trips — we curate soulful odysseys that transcend the ordinary. Every journey is a masterpiece of discovery across 8 states and 43 exclusive packages."
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/start-journey",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "primary",
                magnetic: true,
                withArrow: true,
                as: "div",
                children: "Start Your Journey"
            }, void 0, false, {
                fileName: "[project]/src/components/home/Hero.tsx",
                lineNumber: 124,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-4 pt-4",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/packages",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        as: "div",
                        children: "View Catalog"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Hero.tsx",
                        lineNumber: 131,
                        columnNumber: 82
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.tsx",
                    lineNumber: 131,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex -space-x-3",
            children: [
                [
                    1,
                    2,
                    3
                ].map(_HeroAnonymous),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-full border-2 border-white bg-[#FAFAFA] flex items-center justify-center text-[var(--text-muted)] text-sm font-bold",
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.tsx",
                    lineNumber: 139,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-sm font-bold",
            children: "10k+ Positive Reviews"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[13] = t12;
        $[14] = t13;
    } else {
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
            direction: "left",
            delay: 0.2,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-text space-y-8",
                "data-speed": "1.2",
                children: [
                    t4,
                    t8,
                    t9,
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6 pt-12",
                        children: [
                            t12,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t13,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex text-[#D4AF37]",
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5
                                        ].map(_HeroAnonymous2)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Hero.tsx",
                                        lineNumber: 149,
                                        columnNumber: 181
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Hero.tsx",
                                lineNumber: 149,
                                columnNumber: 171
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/Hero.tsx",
                        lineNumber: 149,
                        columnNumber: 119
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/Hero.tsx",
                lineNumber: 149,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent rounded-[2rem] -z-10 transform rotate-3"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-x-12 hover:rotate-y-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80",
                    fill: true,
                    className: "object-cover",
                    alt: "Premium Travel Destination",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.tsx",
                    lineNumber: 163,
                    columnNumber: 163
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.tsx",
                    lineNumber: 163,
                    columnNumber: 358
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-8 -left-8 glass p-6 rounded-2xl flex items-center gap-4 animate-float",
            style: {
                transform: "translateZ(var(--z-depth-lg))"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-full bg-[var(--accent-earth)] flex items-center justify-center text-xl",
                    children: "🏔️"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.tsx",
                    lineNumber: 172,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-bold text-sm",
                            children: "8 States"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.tsx",
                            lineNumber: 172,
                            columnNumber: 128
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[var(--text-secondary)]",
                            children: "43 Curated Packages"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.tsx",
                            lineNumber: 172,
                            columnNumber: 175
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/Hero.tsx",
                    lineNumber: 172,
                    columnNumber: 123
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    let t19;
    let t20;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            transform: "translateZ(var(--z-depth-md))"
        };
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]",
            children: "Current Trend"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-black text-xl text-[var(--accent-teal)]",
            children: "Manali Magic"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[19] = t18;
        $[20] = t19;
        $[21] = t20;
    } else {
        t18 = $[19];
        t19 = $[20];
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] w-full mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 items-center z-10 preserve-3d",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animations$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    direction: "right",
                    delay: 0.5,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: imageRef,
                        className: "relative aspect-square lg:aspect-[4/3] w-full preserve-3d",
                        "data-speed": "1.5",
                        children: [
                            t15,
                            t16,
                            t17,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-10 -right-8 glass p-6 rounded-2xl flex flex-col gap-2 shadow-xl",
                                style: t18,
                                children: [
                                    t19,
                                    t20,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "Starting from"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Hero.tsx",
                                                lineNumber: 196,
                                                columnNumber: 487
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-black text-lg",
                                                children: "₹5,999/-"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Hero.tsx",
                                                lineNumber: 196,
                                                columnNumber: 545
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/Hero.tsx",
                                        lineNumber: 196,
                                        columnNumber: 430
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Hero.tsx",
                                lineNumber: 196,
                                columnNumber: 314
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/Hero.tsx",
                        lineNumber: 196,
                        columnNumber: 192
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.tsx",
                    lineNumber: 196,
                    columnNumber: 154
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: containerRef,
            className: "relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#FAFAFA] to-[#F0F0F0] flex items-center justify-center pt-24 perspective-container",
            children: [
                t2,
                t3,
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-[10px] uppercase tracking-[0.3em] font-bold",
                            children: "Scroll to Explore"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.tsx",
                            lineNumber: 203,
                            columnNumber: 318
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[1px] h-16 bg-gradient-to-b from-black to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.tsx",
                            lineNumber: 203,
                            columnNumber: 405
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/Hero.tsx",
                    lineNumber: 203,
                    columnNumber: 212
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    return t22;
}
_s(Hero, "nKpXp2HhmmD/qRdLJ10k3brdGpQ=");
_c = Hero;
function _HeroAnonymous2(i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: "★"
    }, i_0, false, {
        fileName: "[project]/src/components/home/Hero.tsx",
        lineNumber: 211,
        columnNumber: 10
    }, this);
}
function _HeroAnonymous(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: `https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&q=80&sig=${i}`,
            fill: true,
            sizes: "100px",
            className: "object-cover",
            alt: "User"
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.tsx",
            lineNumber: 214,
            columnNumber: 117
        }, this)
    }, i, false, {
        fileName: "[project]/src/components/home/Hero.tsx",
        lineNumber: 214,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/DestinationsCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DestinationsCarousel",
    ()=>DestinationsCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const DESTINATIONS = [
    {
        id: 'himachal-pradesh',
        name: 'Himachal Pradesh',
        packages: 8,
        price: 5999,
        icon: '🏔️',
        tag: 'Snow Peaks',
        query: 'manali mountains'
    },
    {
        id: 'goa',
        name: 'Goa',
        packages: 5,
        price: 5999,
        icon: '🏖️',
        tag: 'Beach Paradise',
        query: 'goa beach'
    },
    {
        id: 'leh-ladakh',
        name: 'Leh Ladakh',
        packages: 3,
        price: 24999,
        icon: '🏜️',
        tag: 'Desert Mountains',
        query: 'ladakh'
    },
    {
        id: 'darjeeling-sikkim',
        name: 'Darjeeling & Sikkim',
        packages: 3,
        price: 22999,
        icon: '🍵',
        tag: 'Tea Gardens',
        query: 'darjeeling'
    },
    {
        id: 'uttarakhand',
        name: 'Uttarakhand',
        packages: 9,
        price: 9999,
        icon: '🕉️',
        tag: 'Spiritual Trails',
        query: 'rishikesh'
    },
    {
        id: 'kerala',
        name: 'Kerala',
        packages: 6,
        price: 7500,
        icon: '🚤',
        tag: 'Backwaters',
        query: 'kerala'
    },
    {
        id: 'rajasthan',
        name: 'Rajasthan',
        packages: 6,
        price: 7500,
        icon: '🏰',
        tag: 'Royal Heritage',
        query: 'rajasthan fort'
    },
    {
        id: 'kashmir',
        name: 'Kashmir',
        packages: 3,
        price: 14999,
        icon: '🏔️',
        tag: 'Paradise on Earth',
        query: 'kashmir lake'
    }
];
function DestinationsCarousel() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "d8f3f1b84c0314fde45d9279993d1e15f54a8881a8f64582b2bb7e640d870c8b") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d8f3f1b84c0314fde45d9279993d1e15f54a8881a8f64582b2bb7e640d870c8b";
    }
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "DestinationsCarousel[useLayoutEffect()]": ()=>{
                if (!trackRef.current) {
                    return;
                }
                const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                    "DestinationsCarousel[useLayoutEffect() > gsap.context()]": ()=>{
                        const track = trackRef.current;
                        if (!track) {
                            return;
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(track, {
                            x: ()=>-(track.scrollWidth - window.innerWidth + 160),
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top top",
                                end: ()=>`+=${track.scrollWidth}`,
                                scrub: 1,
                                pin: true,
                                onUpdate: (self)=>{
                                    setProgress(self.progress * 100);
                                    const index = Math.round(self.progress * (DESTINATIONS.length - 1)) + 1;
                                    setCurrentIndex(index);
                                }
                            }
                        });
                    }
                }["DestinationsCarousel[useLayoutEffect() > gsap.context()]"], sectionRef);
                return ()=>{
                    ctx.revert();
                };
            }
        })["DestinationsCarousel[useLayoutEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]",
                    children: "Explore Destinations"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                    lineNumber: 136,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[var(--text-lg)] font-black leading-tight max-w-xl",
                    children: "Where would you like to go?"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                    lineNumber: 136,
                    columnNumber: 154
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            transform: "translateZ(30px)"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "50",
            cy: "50",
            r: "45",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "text-gray-200"
        }, void 0, false, {
            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = 283 - 283 * progress / 100;
    let t6;
    if ($[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-full h-full -rotate-90",
            viewBox: "0 0 100 100",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "50",
                    r: "45",
                    fill: "none",
                    stroke: "var(--accent-earth)",
                    strokeWidth: "4",
                    strokeDasharray: "283",
                    strokeDashoffset: t5,
                    className: "transition-all duration-300"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                    lineNumber: 160,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== currentIndex) {
        t7 = currentIndex.toString().padStart(2, "0");
        $[8] = currentIndex;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center font-heading font-black text-xl",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
            lineNumber: 176,
            columnNumber: 10
        }, this);
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t6 || $[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 lg:px-20 mb-16 preserve-3d",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-end justify-between gap-8",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-24 h-24",
                            style: t3,
                            children: [
                                t6,
                                t8
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                            lineNumber: 184,
                            columnNumber: 205
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                        lineNumber: 184,
                        columnNumber: 164
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                lineNumber: 184,
                columnNumber: 82
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
            lineNumber: 184,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "carousel-container relative overflow-visible preserve-3d",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: trackRef,
                className: "carousel-track flex gap-8 px-6 lg:px-20 pb-20 preserve-3d",
                children: DESTINATIONS.map(_DestinationsCarouselDESTINATIONSMap)
            }, void 0, false, {
                fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                lineNumber: 193,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: "destinations-section relative bg-[var(--bg-secondary)] overflow-hidden py-32 min-h-screen flex flex-col justify-center perspective-container",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[16] = t9;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    return t11;
}
_s(DestinationsCarousel, "owJ+8CXDw8G0B/TS9TSnulu/WJU=");
_c = DestinationsCarousel;
function _DestinationsCarouselDESTINATIONSMap(state) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
        whileHover: {
            rotateY: 10,
            z: 50,
            scale: 1.02
        },
        className: "state-card flex-shrink-0 w-[450px] group preserve-3d",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl glass border-white/40 preserve-3d",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 preserve-3d",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: `https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80&sig=${state.id}`,
                            fill: true,
                            className: "object-cover transition-transform duration-700 group-hover:scale-110",
                            alt: state.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                            lineNumber: 213,
                            columnNumber: 229
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                            lineNumber: 213,
                            columnNumber: 465
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                    lineNumber: 213,
                    columnNumber: 183
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-8 right-8 glass px-4 py-2 rounded-full flex items-center gap-2",
                    style: {
                        transform: "translateZ(40px)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: state.icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                            lineNumber: 215,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-xs font-bold text-white tracking-widest uppercase",
                            children: state.tag
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                            lineNumber: 215,
                            columnNumber: 35
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                    lineNumber: 213,
                    columnNumber: 566
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 right-0 p-10 text-white space-y-4 preserve-3d",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-end border-b border-white/20 pb-6 mb-6",
                            style: {
                                transform: "translateZ(30px)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-medium opacity-60 uppercase tracking-widest block mb-2",
                                        children: [
                                            state.packages,
                                            " Packages"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-black font-heading",
                                        children: state.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                                        lineNumber: 217,
                                        columnNumber: 131
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                                lineNumber: 217,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                            lineNumber: 215,
                            columnNumber: 216
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            style: {
                                transform: "translateZ(50px)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[10px] uppercase tracking-widest opacity-60 mb-1 font-normal",
                                            children: "Starting from"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                                            lineNumber: 219,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-black",
                                            children: [
                                                "₹",
                                                state.price.toLocaleString(),
                                                "/-"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                                            lineNumber: 219,
                                            columnNumber: 117
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                                    lineNumber: 219,
                                    columnNumber: 12
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/destinations/${state.id}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-[var(--accent-earth)] hover:text-white transition-colors cursor-pointer shadow-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                                            lineNumber: 219,
                                            columnNumber: 422
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                                        lineNumber: 219,
                                        columnNumber: 238
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                                    lineNumber: 219,
                                    columnNumber: 197
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                            lineNumber: 217,
                            columnNumber: 209
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
                    lineNumber: 215,
                    columnNumber: 128
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
            lineNumber: 213,
            columnNumber: 71
        }, this)
    }, state.id, false, {
        fileName: "[project]/src/components/home/DestinationsCarousel.tsx",
        lineNumber: 209,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "DestinationsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/packages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "packagesData",
    ()=>packagesData
]);
const packagesData = [
    // HIMACHAL PRADESH
    {
        id: "HP-01",
        title: "Kullu Manali Volvo Tour",
        state: "himachal-pradesh",
        price: 5999,
        duration: "3 Nights / 4 Days",
        description: "Route: Delhi → Manali → Sollang Valley → Kullu → Manikaran → Manali → Delhi",
        category: "Mountain Escape",
        rating: 4.8,
        reviews: 120,
        isFeatured: true,
        highlights: [
            "Volvo Transport",
            "Hotel Included",
            "Sightseeing"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1605649487212-4d4ce77fd431?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "HP-02",
        title: "Shimla Tour",
        state: "himachal-pradesh",
        price: 6999,
        duration: "3 Nights / 4 Days",
        description: "Route: Delhi → Shimla → Delhi (BY BUS)",
        category: "Mountain Escape",
        rating: 4.7,
        reviews: 85,
        isFeatured: false,
        highlights: [
            "Hotel Included",
            "Food Included",
            "Sightseeing"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "HP-03",
        title: "Golden Temple with Himachal Tour",
        state: "himachal-pradesh",
        price: 11999,
        duration: "5 Nights / 6 Days",
        description: "Route: Delhi → Amritsar → Manali → Delhi",
        category: "Cultural & Mountains",
        rating: 4.9,
        reviews: 210,
        isFeatured: true,
        highlights: [
            "Golden Temple Visit",
            "Manali Sightseeing",
            "Transport Included"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1514222026856-116ebf4b0ab4?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "HP-04",
        title: "Dalhousie with Dharamshala Tour",
        state: "himachal-pradesh",
        price: 14999,
        duration: "On Request",
        description: "Route: Amritsar → Dalhousie → Dharamsala",
        category: "Nature Escape",
        rating: 4.6,
        reviews: 65,
        isFeatured: false,
        highlights: [
            "Dalhousie Stay",
            "Dharamshala Visit",
            "Meals Included"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1598305071913-3994e7861afa?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "HP-05",
        title: "Shimla Kullu Manali Honeymoon Tour",
        state: "himachal-pradesh",
        price: 14999,
        duration: "5 Nights / 6 Days",
        description: "Route: Shimla → Kullu → Manali",
        category: "Honeymoon",
        rating: 5.0,
        reviews: 340,
        isFeatured: true,
        highlights: [
            "Romantic Setup",
            "Premium Stays",
            "Private Transport"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1581793746485-04698e79a4e8?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "HP-06",
        title: "Golden Temple with Himachal & Agra Tour",
        state: "himachal-pradesh",
        price: 16999,
        duration: "6 Nights / 7 Days",
        description: "Route: Delhi → Amritsar → Manali → Agra → Delhi",
        category: "Heritage",
        rating: 4.8,
        reviews: 190,
        isFeatured: false,
        highlights: [
            "Taj Mahal Visit",
            "Golden Temple",
            "Manali Snow"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1564507592208-0282b0eace69?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "HP-07",
        title: "Shimla Kullu Manali with Agra Tour",
        state: "himachal-pradesh",
        price: 18999,
        duration: "6 Nights / 7 Days",
        description: "Route: Delhi → Kullu → Manali → Shimla → Delhi → Same Day Agra → Delhi",
        category: "Extensive Explorer",
        rating: 4.7,
        reviews: 145,
        isFeatured: false,
        highlights: [
            "Agra Sightseeing",
            "Shimla Mall Road",
            "Manali Valleys"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "HP-08",
        title: "Grand Himachal with Amritsar Tour",
        state: "himachal-pradesh",
        price: 25999,
        duration: "9 Nights / 10 Days",
        description: "Route: Shimla → Manali → Dharamshala → Dalhousie → Amritsar",
        category: "Grand Tour",
        rating: 4.9,
        reviews: 420,
        isFeatured: true,
        highlights: [
            "Complete Himachal",
            "Premium Hotels",
            "Dedicated Guide"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1605649487212-4d4ce77fd431?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    // GOA
    {
        id: "GA-01",
        title: "Goa Tour Package",
        state: "goa",
        price: 5999,
        duration: "3 Nights / 4 Days",
        description: "Route: Near Railway Station / Airport → Goa",
        category: "Beach Paradise",
        rating: 4.6,
        reviews: 210,
        isFeatured: true,
        highlights: [
            "Beach Drops",
            "Hotel Included",
            "Food Included"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "GA-02",
        title: "Goa & Dudhsagar Waterfall Tour",
        state: "goa",
        price: 7999,
        duration: "3 Nights / 4 Days",
        description: "Route: Goa → Dudhsagar Waterfall → South Goa → North Goa",
        category: "Adventure",
        rating: 4.8,
        reviews: 185,
        isFeatured: true,
        highlights: [
            "Dudhsagar Trek",
            "North & South Goa",
            "Transport"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "GA-03",
        title: "Goa Dinner Cruise Tour",
        state: "goa",
        price: 8999,
        duration: "3 Nights / 4 Days",
        description: "Route: Goa → Dinner Cruise → South Goa → North Goa",
        category: "Luxury",
        rating: 4.7,
        reviews: 156,
        isFeatured: false,
        highlights: [
            "Mandovi Cruise",
            "Live Music",
            "Gala Dinner"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "GA-04",
        title: "Goa Adventure Party Boat Tour",
        state: "goa",
        price: 6500,
        duration: "3 Nights / 4 Days",
        description: "Route: Goa → South Goa → North Goa → Adventure Boat Party",
        category: "Party",
        rating: 4.9,
        reviews: 320,
        isFeatured: true,
        highlights: [
            "Boat Party",
            "DJ Music",
            "Water Sports"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1555021200-dcb74c43ba09?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "GA-05",
        title: "Exciting Goa Tour",
        state: "goa",
        price: 7999,
        duration: "4 Nights / 5 Days",
        description: "Route: Goa → South Goa → North Goa",
        category: "Extended Stay",
        rating: 4.6,
        reviews: 112,
        isFeatured: false,
        highlights: [
            "Leisure Days",
            "Beach Hopping",
            "Scooty Rentals"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    // LEH LADAKH
    {
        id: "LL-01",
        title: "Leh Ladakh & Nubra Valley Tour",
        state: "leh-ladakh",
        price: 24999,
        duration: "5 Nights / 6 Days",
        description: "Route: Leh → Nubra Valley → Same Day Tour Pangong → Lake Leh",
        category: "Adventure",
        rating: 4.9,
        reviews: 450,
        isFeatured: true,
        highlights: [
            "Pangong Lake",
            "Khardung La",
            "Nubra Stay"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1580136611388-644782bb19ac?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "LL-02",
        title: "Leh Turtuk – Hunder Tour",
        state: "leh-ladakh",
        price: 29999,
        duration: "6 Nights / 7 Days",
        description: "Route: Leh → Gurudwara Pather Sahib → Turtuk → Hunder → Leh",
        category: "Cultural Explorer",
        rating: 4.8,
        reviews: 195,
        isFeatured: false,
        highlights: [
            "Turtuk Village",
            "Double Hump Camels",
            "Monasteries"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "LL-03",
        title: "Manali to Leh Tour",
        state: "leh-ladakh",
        price: 39999,
        duration: "8 Nights / 9 Days",
        description: "Route: Manali → Serchu → Leh → Nubra → Pangong",
        category: "Road Trip",
        rating: 5.0,
        reviews: 580,
        isFeatured: true,
        highlights: [
            "Bike Available",
            "High Passes",
            "Ultimate Adventure"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1580136611388-644782bb19ac?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    // DARJEELING & SIKKIM
    {
        id: "DS-01",
        title: "Gangtok Lachung Tour",
        state: "darjeeling-sikkim",
        price: 22999,
        duration: "4 Nights / 5 Days",
        description: "Route: 3N Gangtok + 1N Lachung",
        category: "Mountain Escape",
        rating: 4.7,
        reviews: 160,
        isFeatured: true,
        highlights: [
            "Yumthang Valley",
            "Tsomgo Lake",
            "Local Cuisine"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1544634076-a90160ddf44a?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "DS-02",
        title: "Darjeeling Pelling Gangtok Tour",
        state: "darjeeling-sikkim",
        price: 32000,
        duration: "6 Nights / 7 Days",
        description: "Route: 2N Darjeeling → 1N Pelling → 3N Gangtok",
        category: "Extensive Tour",
        rating: 4.8,
        reviews: 210,
        isFeatured: true,
        highlights: [
            "Tiger Hill",
            "Tea Estates",
            "Monasteries"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1580302388048-fb264f69324e?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "DS-03",
        title: "Gangtok Lachung Pelling Darjeeling Tour",
        state: "darjeeling-sikkim",
        price: 39999,
        duration: "8 Nights / 9 Days",
        description: "Route: 3N Gangtok → 1N Lachung → 2N Pelling → 2N Darjeeling",
        category: "Grand Explorer",
        rating: 4.9,
        reviews: 140,
        isFeatured: false,
        highlights: [
            "Complete East",
            "Premium Transport",
            "Luxury Stays"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1544634076-a90160ddf44a?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    // UTTARAKHAND
    {
        id: "UK-01",
        title: "Uttarakhand Mussoorie Tour",
        state: "uttarakhand",
        price: 9999,
        duration: "2 Nights / 3 Days",
        description: "Route: 2 Nights Mussoorie",
        category: "Weekend Getaway",
        rating: 4.5,
        reviews: 90,
        isFeatured: false,
        highlights: [
            "Kempty Falls",
            "Mall Road",
            "Hotel Included"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1596422846543-75c6ff416766?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "UK-02",
        title: "Uttarakhand Haridwar & Rishikesh Tour",
        state: "uttarakhand",
        price: 13500,
        duration: "3 Nights / 4 Days",
        description: "Route: 2N Haridwar + 1N Rishikesh",
        category: "Spiritual",
        rating: 4.8,
        reviews: 310,
        isFeatured: true,
        highlights: [
            "Ganga Aarti",
            "River Rafting",
            "Ashram Visit"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1603502905325-15e86d0611e9?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "UK-03",
        title: "Haridwar, Rishikesh & Mussoorie Tour",
        state: "uttarakhand",
        price: 16500,
        duration: "4 Nights / 5 Days",
        description: "Route: Haridwar → Rishikesh → Mussoorie",
        category: "Spirit & Nature",
        rating: 4.7,
        reviews: 185,
        isFeatured: false,
        highlights: [
            "Complete Mix",
            "Private Cab",
            "Sightseeing"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1596422846543-75c6ff416766?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "UK-04",
        title: "Uttarakhand Auli Tour",
        state: "uttarakhand",
        price: 16999,
        duration: "4 Nights / 5 Days",
        description: "Route: 2N Haridwar + 2N Auli / Joshimath",
        category: "Snow Adventure",
        rating: 4.9,
        reviews: 240,
        isFeatured: true,
        highlights: [
            "Skiing",
            "Cable Car",
            "Nanda Devi Views"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1626713919102-1ff71eb6afb3?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "UK-05",
        title: "Haridwar, Rishikesh, Mussoorie – Dhanaulti Tour",
        state: "uttarakhand",
        price: 21000,
        duration: "5 Nights / 6 Days",
        description: "Route: Haridwar → Rishikesh → Mussoorie → Dehradun",
        category: "Extensive Tour",
        rating: 4.6,
        reviews: 120,
        isFeatured: false,
        highlights: [
            "Eco Park",
            "Robbers Cave",
            "Complete Comfort"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1603502905325-15e86d0611e9?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "UK-06",
        title: "Mussoorie – Haridwar, Rishikesh – Nainital Tour",
        state: "uttarakhand",
        price: 21999,
        duration: "5 Nights / 6 Days",
        description: "Route: Mussoorie → Haridwar → Nainital",
        category: "Grand Loop",
        rating: 4.8,
        reviews: 155,
        isFeatured: false,
        highlights: [
            "Naini Lake",
            "Ganga Aarti",
            "Mall Road"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1587311820689-d4f1cdbc21d6?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "UK-07",
        title: "Uttarakhand Nainital Tour",
        state: "uttarakhand",
        price: 10999,
        duration: "2 Nights / 3 Days",
        description: "Route: 2 Nights Nainital",
        category: "Lakeside Retreat",
        rating: 4.7,
        reviews: 190,
        isFeatured: true,
        highlights: [
            "Boating",
            "Zoo Visit",
            "Tiffin Top"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1598440590685-6101ce9196b6?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "UK-08",
        title: "Nainital, Ranikhet, Almora & Jim Corbett Tour",
        state: "uttarakhand",
        price: 25999,
        duration: "7 Nights / 8 Days",
        description: "Route: Nainital → Ranikhet → Almora → Kausani → Jim Corbett",
        category: "Nature Safari",
        rating: 4.9,
        reviews: 280,
        isFeatured: true,
        highlights: [
            "Safari",
            "Himalayan Views",
            "Pine Forests"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1598440590685-6101ce9196b6?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "UK-09",
        title: "Uttarakhand Chardham Tour Package",
        state: "uttarakhand",
        price: 47999,
        duration: "11 Nights / 12 Days",
        description: "Route: Haridwar → Barkot → Uttarkashi → Guptkashi → Kedarnath → Badrinath → Pipalkoti",
        category: "Pilgrimage",
        rating: 5.0,
        reviews: 550,
        isFeatured: true,
        highlights: [
            "All 4 Dhams",
            "Helicopter Options",
            "VIP Darshan"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1603502905325-15e86d0611e9?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    // KERALA
    {
        id: "KL-01",
        title: "Exciting Kochin & Munnar Tour",
        state: "kerala",
        price: 7500,
        duration: "2 Nights / 3 Days",
        description: "Route: Delhi → Munnar → Delhi",
        category: "Nature Retreat",
        rating: 4.6,
        reviews: 140,
        isFeatured: true,
        highlights: [
            "Tea Gardens",
            "Waterfalls",
            "Spice Plantations"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "KL-02",
        title: "Kochin – Munnar & Alappuzha Tour",
        state: "kerala",
        price: 15500,
        duration: "4 Nights / 5 Days",
        description: "Route: Kochin → Munnar → Alappuzha",
        category: "Classic Kerala",
        rating: 4.8,
        reviews: 290,
        isFeatured: true,
        highlights: [
            "Houseboat Stay",
            "Backwaters",
            "Tea Estates"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1593693248882-96ab6fa7b12d?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "KL-03",
        title: "Kerala Tour Package (Custom)",
        state: "kerala",
        price: 21500,
        duration: "On Request",
        description: "Route: Kerala (Custom Itinerary)",
        category: "Flexible",
        rating: 4.7,
        reviews: 80,
        isFeatured: false,
        highlights: [
            "Custom Schedule",
            "Private Car",
            "Choose Hotels"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "KL-04",
        title: "Kerala Kanyakumari Tour Package",
        state: "kerala",
        price: 23500,
        duration: "6 Nights / 7 Days",
        description: "Route: Munnar → Thekkady → Alappuzha → Kovalam",
        category: "Coastal Drive",
        rating: 4.9,
        reviews: 320,
        isFeatured: true,
        highlights: [
            "Vivekananda Rock",
            "Kovalam Beach",
            "Periyar Safari"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1593693248882-96ab6fa7b12d?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "KL-05",
        title: "Grand Kerala & Tamil Nadu Tour",
        state: "kerala",
        price: 35500,
        duration: "9 Nights / 10 Days",
        description: "Route: Munnar → Thekkady → Alappuzha → Kovalam → Kanyakumari → Madurai",
        category: "South Explorer",
        rating: 5.0,
        reviews: 410,
        isFeatured: false,
        highlights: [
            "Meenakshi Temple",
            "Complete Kerala",
            "Luxury Resorts"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "KL-06",
        title: "Tamil Nadu Tour Package",
        state: "kerala",
        price: 25000,
        duration: "On Request",
        description: "Route: Tamil Nadu (Custom Itinerary)",
        category: "Heritage",
        rating: 4.6,
        reviews: 65,
        isFeatured: false,
        highlights: [
            "Temples",
            "Architecture",
            "Culture"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1593693248882-96ab6fa7b12d?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    // RAJASTHAN
    {
        id: "RJ-01",
        title: "Jaipur (Chokhi Dhani) Tour",
        state: "rajasthan",
        price: 7500,
        duration: "2 Nights / 3 Days",
        description: "Route: 2 Nights Jaipur",
        category: "Royal Heritage",
        rating: 4.7,
        reviews: 230,
        isFeatured: true,
        highlights: [
            "Amber Fort",
            "Chokhi Dhani Dinner",
            "City Palace"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "RJ-02",
        title: "Jaipur & Pushkar Ajmer Tour",
        state: "rajasthan",
        price: 9999,
        duration: "3 Nights / 4 Days",
        description: "Route: Jaipur → Pushkar → Ajmer",
        category: "Heritage & Spirit",
        rating: 4.8,
        reviews: 195,
        isFeatured: false,
        highlights: [
            "Ajmer Dargah",
            "Pushkar Lake",
            "Pink City"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1599661559495-9fc2fba176c1?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "RJ-03",
        title: "Jodhpur Tour Package",
        state: "rajasthan",
        price: 8500,
        duration: "On Request",
        description: "Route: 2 Nights Jodhpur",
        category: "Blue City",
        rating: 4.6,
        reviews: 95,
        isFeatured: false,
        highlights: [
            "Mehrangarh Fort",
            "Umaid Bhawan",
            "Blue Streets"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "RJ-04",
        title: "Mount Abu Tour Package",
        state: "rajasthan",
        price: 10999,
        duration: "2 Nights / 3 Days",
        description: "Route: 2 Nights Mount Abu",
        category: "Hill Station",
        rating: 4.7,
        reviews: 115,
        isFeatured: true,
        highlights: [
            "Nakki Lake",
            "Dilwara Temples",
            "Sunset Point"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1599661559495-9fc2fba176c1?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "RJ-05",
        title: "Ranthambore Tour Package",
        state: "rajasthan",
        price: 13999,
        duration: "2 Nights / 3 Days",
        description: "Route: 2 Nights Ranthambore",
        category: "Wildlife Safari",
        rating: 4.9,
        reviews: 310,
        isFeatured: true,
        highlights: [
            "Tiger Safari",
            "Fort Visit",
            "Luxury Tents"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "RJ-06",
        title: "Jaisalmer & Bikaner Tour",
        state: "rajasthan",
        price: 16500,
        duration: "4 Nights / 5 Days",
        description: "Route: 2N Jaisalmer → 2N Bikaner",
        category: "Desert Safari",
        rating: 4.8,
        reviews: 245,
        isFeatured: true,
        highlights: [
            "Sand Dunes",
            "Camel Ride",
            "Golden Fort"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1599661559495-9fc2fba176c1?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    // KASHMIR
    {
        id: "KM-01",
        title: "Kashmir Tour Package",
        state: "kashmir",
        price: 14999,
        duration: "5 Nights / 6 Days",
        description: "Route: Srinagar Hotel → Pahalgam",
        category: "Valley Explorer",
        rating: 4.8,
        reviews: 290,
        isFeatured: true,
        highlights: [
            "Shikara Ride",
            "Pahalgam Valleys",
            "Mughal Gardens"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1550215754-0eb7504a79df?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "KM-02",
        title: "Kashmir Tour (with Houseboat)",
        state: "kashmir",
        price: 16500,
        duration: "5 Nights / 6 Days",
        description: "Route: 1N Srinagar Houseboat → 3N Srinagar Hotel → 1N Pahalgam",
        category: "Classic Kashmir",
        rating: 4.9,
        reviews: 380,
        isFeatured: true,
        highlights: [
            "Premium Houseboat",
            "Gulmarg Day Trip",
            "Gondola Ride"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1621217734493-2940bc2a2ee3?auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: "KM-03",
        title: "Kashmir Tour Package (Extended)",
        state: "kashmir",
        price: 25000,
        duration: "On Request",
        description: "Route: Kashmir (Extended Itinerary)",
        category: "Grand Tour",
        rating: 4.7,
        reviews: 110,
        isFeatured: false,
        highlights: [
            "Sonmarg",
            "Yousmarg",
            "Complete Leisure"
        ],
        itinerary: [],
        images: [
            "https://images.unsplash.com/photo-1550215754-0eb7504a79df?auto=format&fit=crop&w=1200&q=80"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/FeaturedPackages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedPackages",
    ()=>FeaturedPackages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$packages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/packages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
function FeaturedPackages() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "c92f3c893822ee35ab3ecff3945ec11e0f7b39418dae1571c29e7aed6069d431") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c92f3c893822ee35ab3ecff3945ec11e0f7b39418dae1571c29e7aed6069d431";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [packages, setPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "FeaturedPackages[useEffect()]": ()=>{
                const featured = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$packages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packagesData"].filter(_FeaturedPackagesUseEffectPackagesDataFilter).slice(0, 3);
                setPackages(featured);
            }
        })["FeaturedPackages[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]",
                    children: "Curated Selection"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                    lineNumber: 45,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[var(--text-lg)] font-black leading-tight",
                    children: "Featured Packages"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                    lineNumber: 45,
                    columnNumber: 151
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/FeaturedPackages.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 preserve-3d",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/destinations",
                    style: {
                        transform: "translateZ(20px)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        magnetic: true,
                        children: "View All Packages"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                        lineNumber: 54,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                    lineNumber: 52,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/FeaturedPackages.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== packages) {
        t5 = packages.map(_FeaturedPackagesPackagesMap);
        $[6] = packages;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-32 bg-white perspective-container overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto px-6 lg:px-20 preserve-3d",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 preserve-3d",
                        children: t5
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                        lineNumber: 69,
                        columnNumber: 154
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                lineNumber: 69,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/FeaturedPackages.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    return t6;
}
_s(FeaturedPackages, "pLM7vKY0TiCXNZoFtxX0QrtoH0g=");
_c = FeaturedPackages;
function _FeaturedPackagesPackagesMap(pkg_0, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            rotateX: 5,
            rotateY: -5,
            z: 40
        },
        className: "preserve-3d",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/packages/${pkg_0.id}`,
            className: "group cursor-pointer block preserve-3d",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 shadow-2xl transition-shadow hover:shadow-shadow-xl preserve-3d border border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: pkg_0.images?.[0] || "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80",
                            fill: true,
                            className: "object-cover transition-transform duration-700 group-hover:scale-110",
                            alt: pkg_0.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                            lineNumber: 82,
                            columnNumber: 282
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-6 left-6 glass px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white",
                            style: {
                                transform: "translateZ(30px)"
                            },
                            children: "Trending"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                            lineNumber: 82,
                            columnNumber: 524
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                    lineNumber: 82,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 px-4",
                    style: {
                        transform: "translateZ(20px)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-heading font-black text-2xl leading-tight group-hover:text-[var(--accent-earth)] transition-colors",
                                children: pkg_0.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                                lineNumber: 86,
                                columnNumber: 60
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                            lineNumber: 86,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-sm text-[var(--text-secondary)] flex items-center gap-2 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "📍 ",
                                        pkg_0.state.replace("-", " ")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                                    lineNumber: 86,
                                    columnNumber: 293
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                                    lineNumber: 86,
                                    columnNumber: 340
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "⏱️ ",
                                        pkg_0.duration
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                                    lineNumber: 86,
                                    columnNumber: 354
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                            lineNumber: 86,
                            columnNumber: 204
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 pt-2",
                            style: {
                                transform: "translateZ(10px)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-black text-[var(--accent-teal)]",
                                    children: [
                                        "₹",
                                        pkg_0.price.toLocaleString(),
                                        "/-"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                                    lineNumber: 88,
                                    columnNumber: 12
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs text-[var(--text-muted)] font-normal",
                                    children: "per person"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                                    lineNumber: 88,
                                    columnNumber: 112
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                            lineNumber: 86,
                            columnNumber: 391
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/FeaturedPackages.tsx",
                    lineNumber: 84,
                    columnNumber: 32
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/FeaturedPackages.tsx",
            lineNumber: 82,
            columnNumber: 30
        }, this)
    }, pkg_0.id, false, {
        fileName: "[project]/src/components/home/FeaturedPackages.tsx",
        lineNumber: 78,
        columnNumber: 10
    }, this);
}
function _FeaturedPackagesUseEffectPackagesDataFilter(pkg) {
    return pkg.isFeatured;
}
var _c;
__turbopack_context__.k.register(_c, "FeaturedPackages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/GalleryPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryPreview",
    ()=>GalleryPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function GalleryPreview() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "8ddc355b88ea9cdfbd73958a03d556d3ab726a9b4245bbc4522181ae49d3464f") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8ddc355b88ea9cdfbd73958a03d556d3ab726a9b4245bbc4522181ae49d3464f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const images = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6 lg:px-20 text-center space-y-8 mb-16 preserve-3d",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-earth)]",
                    children: "Visual Journey"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/GalleryPreview.tsx",
                    lineNumber: 27,
                    columnNumber: 104
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[var(--text-lg)] font-black leading-tight",
                    children: "The Ghumo Gallery"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/GalleryPreview.tsx",
                    lineNumber: 27,
                    columnNumber: 215
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-bold uppercase tracking-widest text-[var(--text-muted)]",
                    children: "Experience India Through Our Lens"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/GalleryPreview.tsx",
                    lineNumber: 27,
                    columnNumber: 300
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/GalleryPreview.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-8 animate-scroll-x hover:pause preserve-3d py-10",
            children: [
                ...images,
                ...images
            ].map(_GalleryPreviewAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/components/home/GalleryPreview.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-32 bg-[var(--bg-primary)] overflow-hidden perspective-container",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-20 text-center preserve-3d",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/gallery",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            magnetic: true,
                            as: "div",
                            children: "Explore Full Gallery"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/GalleryPreview.tsx",
                            lineNumber: 41,
                            columnNumber: 175
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/GalleryPreview.tsx",
                        lineNumber: 41,
                        columnNumber: 153
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/GalleryPreview.tsx",
                    lineNumber: 41,
                    columnNumber: 106
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/GalleryPreview.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = GalleryPreview;
function _GalleryPreviewAnonymous(img, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            rotateX: 10,
            rotateY: -10,
            z: 50,
            scale: 1.05
        },
        className: "relative flex-shrink-0 w-80 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/20 preserve-3d cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: img,
                fill: true,
                className: "object-cover",
                alt: "Gallery preview"
            }, void 0, false, {
                fileName: "[project]/src/components/home/GalleryPreview.tsx",
                lineNumber: 54,
                columnNumber: 148
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            }, void 0, false, {
                fileName: "[project]/src/components/home/GalleryPreview.tsx",
                lineNumber: 54,
                columnNumber: 226
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/components/home/GalleryPreview.tsx",
        lineNumber: 49,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "GalleryPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/CTASection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASection",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function CTASection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "ebee612ccedc48f35ce2cc746b6f619141523347af764b6ce34e9425d8fd149a") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ebee612ccedc48f35ce2cc746b6f619141523347af764b6ce34e9425d8fd149a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            rotateX: 5,
            rotateY: -5,
            z: 50
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-20 -right-20 w-64 h-64 bg-[var(--accent-earth)]/10 rounded-full blur-[80px]"
        }, void 0, false, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--accent-teal)]/10 rounded-full blur-[80px]"
        }, void 0, false, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs font-bold uppercase tracking-[0.4em] text-[var(--accent-earth)]",
            children: "Adventure Awaits"
        }, void 0, false, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-[var(--text-lg)] font-black leading-tight max-w-2xl mx-auto",
            children: "Ready to start your next great story?"
        }, void 0, false, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[var(--text-base)] text-[var(--text-secondary)] max-w-xl mx-auto font-medium",
            style: {
                transform: "translateZ(20px)"
            },
            children: "Book a consultation with our travel experts today and let us craft a journey tailored specifically for you."
        }, void 0, false, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            transform: "translateZ(40px)"
        };
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "primary",
            magnetic: true,
            withArrow: true,
            className: "!px-12",
            children: "Plan My Trip"
        }, void 0, false, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-6 pt-4",
            style: t6,
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        className: "!px-12",
                        as: "div",
                        magnetic: true,
                        children: "Contact Support"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/CTASection.tsx",
                        lineNumber: 73,
                        columnNumber: 105
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/CTASection.tsx",
                    lineNumber: 73,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            transform: "translateZ(10px)"
        };
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-2xl font-black",
            children: "24/7"
        }, void 0, false, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 89,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-[10px] font-bold uppercase tracking-widest text-left leading-tight",
                    children: [
                        "Expert",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/home/CTASection.tsx",
                            lineNumber: 96,
                            columnNumber: 151
                        }, this),
                        "Support"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/CTASection.tsx",
                    lineNumber: 96,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-2xl font-black",
            children: "100%"
        }, void 0, false, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-[10px] font-bold uppercase tracking-widest text-left leading-tight",
                    children: [
                        "Secure",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/home/CTASection.tsx",
                            lineNumber: 110,
                            columnNumber: 151
                        }, this),
                        "Payments"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/CTASection.tsx",
                    lineNumber: 110,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-2xl font-black",
            children: "ISO"
        }, void 0, false, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-32 bg-white flex items-center justify-center perspective-container overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1200px] w-full mx-auto px-6 lg:px-20 text-center preserve-3d",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    whileHover: t0,
                    className: "glass p-20 rounded-[4rem] relative overflow-hidden border-none shadow-2xl bg-gradient-to-br from-[#8B7355]/10 to-[#2C5F5D]/10 preserve-3d",
                    children: [
                        t1,
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 space-y-8 preserve-3d",
                            children: [
                                t3,
                                t4,
                                t5,
                                t8,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-12 border-t border-black/5 mt-12 flex flex-wrap justify-center gap-12 grayscale opacity-40",
                                    style: t9,
                                    children: [
                                        t11,
                                        t13,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                t14,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest text-left leading-tight",
                                                    children: [
                                                        "Certified",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/home/CTASection.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 733
                                                        }, this),
                                                        "Agency"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/CTASection.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 636
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/CTASection.tsx",
                                            lineNumber: 124,
                                            columnNumber: 590
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/CTASection.tsx",
                                    lineNumber: 124,
                                    columnNumber: 458
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/CTASection.tsx",
                            lineNumber: 124,
                            columnNumber: 389
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/CTASection.tsx",
                    lineNumber: 124,
                    columnNumber: 203
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/CTASection.tsx",
                lineNumber: 124,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/CTASection.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    return t15;
}
_c = CTASection;
var _c;
__turbopack_context__.k.register(_c, "CTASection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_91660d35._.js.map