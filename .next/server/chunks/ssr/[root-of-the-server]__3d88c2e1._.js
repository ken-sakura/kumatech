module.exports = {

"[project]/.next-internal/server/app/post/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/data/blog-posts.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"title\":\"Introduction to React Hooks\",\"theme\":\"React\",\"excerpt\":\"Learn how to use React hooks to manage state and side effects in your functional components.\",\"imageUrl\":\"https://picsum.photos/id/237/400/300\"},{\"id\":2,\"title\":\"Mastering TypeScript\",\"theme\":\"TypeScript\",\"excerpt\":\"Explore the advanced features of TypeScript and improve your code quality.\",\"imageUrl\":\"https://picsum.photos/id/238/400/300\"},{\"id\":3,\"title\":\"Getting Started with Next.js\",\"theme\":\"Next.js\",\"excerpt\":\"A beginner-friendly guide to building server-rendered React apps with Next.js.\",\"imageUrl\":\"https://picsum.photos/id/239/400/300\"},{\"id\":4,\"title\":\"Advanced JavaScript Concepts\",\"theme\":\"JavaScript\",\"excerpt\":\"Delve into the intricacies of JavaScript, including closures, prototypes, and asynchronous programming.\",\"imageUrl\":\"https://picsum.photos/id/240/400/300\"},{\"id\":5,\"title\":\"Introduction to React Hooks\",\"theme\":\"React\",\"excerpt\":\"Learn how to use React hooks to manage state and side effects in your functional components.\",\"imageUrl\":\"https://picsum.photos/id/237/400/300\"},{\"id\":6,\"title\":\"Mastering TypeScript\",\"theme\":\"TypeScript\",\"excerpt\":\"Explore the advanced features of TypeScript and improve your code quality.\",\"imageUrl\":\"https://picsum.photos/id/238/400/300\"},{\"id\":7,\"title\":\"Getting Started with Next.js\",\"theme\":\"Next.js\",\"excerpt\":\"A beginner-friendly guide to building server-rendered React apps with Next.js.\",\"imageUrl\":\"https://picsum.photos/id/239/400/300\"},{\"id\":8,\"title\":\"Advanced JavaScript Concepts\",\"theme\":\"JavaScript\",\"excerpt\":\"Delve into the intricacies of JavaScript, including closures, prototypes, and asynchronous programming.\",\"imageUrl\":\"https://picsum.photos/id/240/400/300\"},{\"id\":9,\"title\":\"Introduction to React Hooks\",\"theme\":\"React\",\"excerpt\":\"Learn how to use React hooks to manage state and side effects in your functional components.\",\"imageUrl\":\"https://picsum.photos/id/237/400/300\"},{\"id\":10,\"title\":\"Mastering TypeScript\",\"theme\":\"TypeScript\",\"excerpt\":\"Explore the advanced features of TypeScript and improve your code quality.\",\"imageUrl\":\"https://picsum.photos/id/238/400/300\"},{\"id\":11,\"title\":\"Getting Started with Next.js\",\"theme\":\"Next.js\",\"excerpt\":\"A beginner-friendly guide to building server-rendered React apps with Next.js.\",\"imageUrl\":\"https://picsum.photos/id/239/400/300\"},{\"id\":12,\"title\":\"Advanced JavaScript Concepts\",\"theme\":\"JavaScript\",\"excerpt\":\"Delve into the intricacies of JavaScript, including closures, prototypes, and asynchronous programming.\",\"imageUrl\":\"https://picsum.photos/id/240/400/300\"},{\"id\":13,\"title\":\"Introduction to React Hooks\",\"theme\":\"React\",\"excerpt\":\"Learn how to use React hooks to manage state and side effects in your functional components.\",\"imageUrl\":\"https://picsum.photos/id/237/400/300\"},{\"id\":14,\"title\":\"Mastering TypeScript\",\"theme\":\"TypeScript\",\"excerpt\":\"Explore the advanced features of TypeScript and improve your code quality.\",\"imageUrl\":\"https://picsum.photos/id/238/400/300\"},{\"id\":15,\"title\":\"Getting Started with Next.js\",\"theme\":\"Next.js\",\"excerpt\":\"A beginner-friendly guide to building server-rendered React apps with Next.js.\",\"imageUrl\":\"https://picsum.photos/id/239/400/300\"},{\"id\":16,\"title\":\"Advanced JavaScript Concepts\",\"theme\":\"JavaScript\",\"excerpt\":\"Delve into the intricacies of JavaScript, including closures, prototypes, and asynchronous programming.\",\"imageUrl\":\"https://picsum.photos/id/240/400/300\"},{\"id\":17,\"title\":\"Introduction to React Hooks\",\"theme\":\"React\",\"excerpt\":\"Learn how to use React hooks to manage state and side effects in your functional components.\",\"imageUrl\":\"https://picsum.photos/id/237/400/300\"},{\"id\":18,\"title\":\"Mastering TypeScript\",\"theme\":\"TypeScript\",\"excerpt\":\"Explore the advanced features of TypeScript and improve your code quality.\",\"imageUrl\":\"https://picsum.photos/id/238/400/300\"},{\"id\":19,\"title\":\"Getting Started with Next.js\",\"theme\":\"Next.js\",\"excerpt\":\"A beginner-friendly guide to building server-rendered React apps with Next.js.\",\"imageUrl\":\"https://picsum.photos/id/239/400/300\"},{\"id\":20,\"title\":\"Advanced JavaScript Concepts\",\"theme\":\"JavaScript\",\"excerpt\":\"Delve into the intricacies of JavaScript, including closures, prototypes, and asynchronous programming.\",\"imageUrl\":\"https://picsum.photos/id/240/400/300\"},{\"id\":21,\"title\":\"Introduction to React Hooks\",\"theme\":\"React\",\"excerpt\":\"Learn how to use React hooks to manage state and side effects in your functional components.\",\"imageUrl\":\"https://picsum.photos/id/237/400/300\"},{\"id\":22,\"title\":\"Mastering TypeScript\",\"theme\":\"TypeScript\",\"excerpt\":\"Explore the advanced features of TypeScript and improve your code quality.\",\"imageUrl\":\"https://picsum.photos/id/238/400/300\"},{\"id\":23,\"title\":\"Getting Started with Next.js\",\"theme\":\"Next.js\",\"excerpt\":\"A beginner-friendly guide to building server-rendered React apps with Next.js.\",\"imageUrl\":\"https://picsum.photos/id/239/400/300\"},{\"id\":24,\"title\":\"Advanced JavaScript Concepts\",\"theme\":\"JavaScript\",\"excerpt\":\"Delve into the intricacies of JavaScript, including closures, prototypes, and asynchronous programming.\",\"imageUrl\":\"https://picsum.photos/id/240/400/300\"},{\"id\":25,\"title\":\"Introduction to React Hooks\",\"theme\":\"React\",\"excerpt\":\"Learn how to use React hooks to manage state and side effects in your functional components.\",\"imageUrl\":\"https://picsum.photos/id/237/400/300\"},{\"id\":26,\"title\":\"Mastering TypeScript\",\"theme\":\"TypeScript\",\"excerpt\":\"Explore the advanced features of TypeScript and improve your code quality.\",\"imageUrl\":\"https://picsum.photos/id/238/400/300\"},{\"id\":27,\"title\":\"Getting Started with Next.js\",\"theme\":\"Next.js\",\"excerpt\":\"A beginner-friendly guide to building server-rendered React apps with Next.js.\",\"imageUrl\":\"https://picsum.photos/id/239/400/300\"},{\"id\":28,\"title\":\"Advanced JavaScript Concepts\",\"theme\":\"JavaScript\",\"excerpt\":\"Delve into the intricacies of JavaScript, including closures, prototypes, and asynchronous programming.\",\"imageUrl\":\"https://picsum.photos/id/240/400/300\"},{\"id\":29,\"title\":\"New Article\",\"theme\":\"New Theme\",\"excerpt\":\"New Article Excerpt\",\"imageUrl\":\"https://picsum.photos/id/241/400/300\",\"contentPath\":\"/blog/new-article.html\"}]"));}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[project]/src/app/post/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blog$2d$posts$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/blog-posts.json (json)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blog$2d$posts$2e$json__$28$json$29$__["default"].map((post)=>({
            id: post.id.toString()
        }));
}
async function getPost(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blog$2d$posts$2e$json__$28$json$29$__["default"].find((post)=>post.id === parseInt(id));
}
async function getPostContent(contentPath) {
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', contentPath);
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf8');
        return fileContent;
    } catch (error) {
        console.error("Failed to read HTML file:", error);
        return '<p>Error loading post content.</p>';
    }
}
const Post = async ({ post })=>{
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Post not found"
        }, void 0, false, {
            fileName: "[project]/src/app/post/[id]/page.tsx",
            lineNumber: 48,
            columnNumber: 12
        }, this);
    }
    const postContent = await getPostContent(post.contentPath);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-secondary text-secondary-foreground py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 flex items-center justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-2xl font-bold",
                        children: "Tech Blueprints"
                    }, void 0, false, {
                        fileName: "[project]/src/app/post/[id]/page.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/post/[id]/page.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/post/[id]/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold mb-4",
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/post/[id]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card rounded-md shadow-md p-6 markdown-body",
                                dangerouslySetInnerHTML: {
                                    __html: postContent
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/post/[id]/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/post/[id]/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            children: "Back to Home"
                        }, void 0, false, {
                            fileName: "[project]/src/app/post/[id]/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/post/[id]/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/post/[id]/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/post/[id]/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
};
const Page = async ({ params })=>{
    const { id } = params;
    const post = await getPost(id);
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Post not found"
        }, void 0, false, {
            fileName: "[project]/src/app/post/[id]/page.tsx",
            lineNumber: 79,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Post, {
        post: post
    }, void 0, false, {
        fileName: "[project]/src/app/post/[id]/page.tsx",
        lineNumber: 81,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = Page;
}}),
"[project]/src/app/post/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/post/[id]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3d88c2e1._.js.map