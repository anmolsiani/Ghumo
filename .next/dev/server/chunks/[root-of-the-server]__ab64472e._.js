module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/lib/mongodb.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */ let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = dbConnect;
}),
"[project]/src/models/Package.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const PackageSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["Schema"]({
    title: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number
    },
    duration: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [
            String
        ],
        default: []
    },
    highlights: {
        type: [
            String
        ],
        default: []
    },
    itinerary: [
        {
            day: {
                type: Number
            },
            title: {
                type: String
            },
            activities: {
                type: [
                    String
                ]
            }
        }
    ],
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    reviews: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [
            String
        ],
        default: []
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Package || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model('Package', PackageSchema);
}),
"[project]/src/app/api/seed/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Package$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/Package.ts [app-route] (ecmascript)");
;
;
const REAL_PACKAGES = [
    // Himachal Pradesh (8)
    {
        title: "Kullu Manali Volvo Tour",
        state: "himachal-pradesh",
        price: 5999,
        duration: "3N/4D",
        description: "Delhi → Manali → Sollang Valley → Kullu → Manikaran → Manali → Delhi. Experience the breathtaking beauty of Himachal Pradesh.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Delhi → Manali → Sollang Valley → Kullu → Manikaran",
        isFeatured: true
    },
    {
        title: "Shimla Tour",
        state: "himachal-pradesh",
        price: 6999,
        duration: "3N/4D",
        description: "Delhi → Shimla → Delhi. A classic getaway to the queen of hills.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Delhi → Shimla",
        isFeatured: false
    },
    {
        title: "Golden Temple with Himachal Tour",
        state: "himachal-pradesh",
        price: 11999,
        duration: "5N/6D",
        description: "Delhi → Amritsar → Manali → Delhi. Spiritual and scenic combined.",
        category: "Spiritual Trail",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Delhi → Amritsar → Manali",
        isFeatured: false
    },
    {
        title: "Dalhousie with Dharamshala Tour",
        state: "himachal-pradesh",
        price: 0,
        duration: "On Request",
        description: "Amritsar → Dalhousie → Dharamsala. A serene mountain escape.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Amritsar → Dalhousie → Dharamsala",
        isFeatured: false
    },
    {
        title: "Shimla Kullu Manali Honeymoon Tour",
        state: "himachal-pradesh",
        price: 14999,
        duration: "5N/6D",
        description: "Shimla → Kullu → Manali. Perfect for couples seeking romance and nature.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Shimla → Kullu → Manali",
        isFeatured: true
    },
    {
        title: "Golden Temple with Himachal & Agra Tour",
        state: "himachal-pradesh",
        price: 16999,
        duration: "6N/7D",
        description: "Delhi → Amritsar → Manali → Agra → Delhi. A complete spiritual and heritage journey.",
        category: "Cultural Heritage",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Delhi → Amritsar → Manali → Agra",
        isFeatured: false
    },
    {
        title: "Shimla Kullu Manali with Agra Tour",
        state: "himachal-pradesh",
        price: 0,
        duration: "6N/7D",
        description: "Delhi → Kullu → Manali → Shimla → Agra → Delhi. A grand tour of India.",
        category: "Cultural Heritage",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Delhi → Shimla → Manali → Agra",
        isFeatured: false
    },
    {
        title: "Grand Himachal with Amritsar Tour",
        state: "himachal-pradesh",
        price: 25999,
        duration: "9N/10D",
        description: "Shimla → Manali → Dharamshala → Dalhousie → Amritsar. The ultimate Himachal experience.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Shimla → Manali → Dharamshala → Dalhousie → Amritsar",
        isFeatured: true
    },
    // Goa (5)
    {
        title: "Goa Tour Package",
        state: "goa",
        price: 5999,
        duration: "3N/4D",
        description: "Near Railway Station / Airport → Goa. Classic beach getaway with fun and sun.",
        category: "Beach Paradise",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Delhi → Goa",
        isFeatured: true
    },
    {
        title: "Goa & Dudhsagar Waterfall Tour Package",
        state: "goa",
        price: 7999,
        duration: "3N/4D",
        description: "Goa → Dudhsagar Waterfall → South Goa → North Goa. Adventure and beaches combined.",
        category: "Beach Paradise",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Goa → Dudhsagar → South Goa → North Goa",
        isFeatured: false
    },
    {
        title: "Goa Dinner Cruise Tour Package",
        state: "goa",
        price: 0,
        duration: "3N/4D",
        description: "Goa → Dinner Cruise → South Goa → North Goa. Romantic evening on Arabian Sea.",
        category: "Beach Paradise",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Goa → Dinner Cruise",
        isFeatured: false
    },
    {
        title: "Goa Adventure Party Boat Tour Package",
        state: "goa",
        price: 6500,
        duration: "3N/4D",
        description: "Goa → South Goa → North Goa → Adventure Boat Party. Party and beach life.",
        category: "Beach Paradise",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Goa → South Goa → North Goa",
        isFeatured: false
    },
    {
        title: "Exciting Goa Tour Package",
        state: "goa",
        price: 7999,
        duration: "4N/5D",
        description: "Goa → South Goa → North Goa. A comprehensive Goa experience.",
        category: "Beach Paradise",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Goa → South Goa → North Goa",
        isFeatured: false
    },
    // Leh Ladakh (3)
    {
        title: "Leh Ladakh & Nubra Valley Tour Package",
        state: "leh-ladakh",
        price: 24999,
        duration: "5N/6D",
        description: "Leh → Nubra Valley → Pangong → Lake Leh. Into the heart of the mountain.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Leh → Nubra Valley → Pangong",
        isFeatured: true
    },
    {
        title: "Leh Turtuk – Hunder Tour Package",
        state: "leh-ladakh",
        price: 29999,
        duration: "6N/7D",
        description: "Leh → Gurudwara Pather Sahib → Turtuk → Hunder → Leh. Remote mountain villages.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Leh → Turtuk → Hunder",
        isFeatured: false
    },
    {
        title: "Manali to Leh Tour Package",
        state: "leh-ladakh",
        price: 39999,
        duration: "8N/9D",
        description: "Manali → Serchu → Leh → Nubra → Pangong. One of India's best highways.",
        category: "Adventure",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Manali → Leh → Pangong",
        isFeatured: false
    },
    // Darjeeling & Sikkim (3)
    {
        title: "Gangtok Lachung Tour",
        state: "darjeeling-sikkim",
        price: 22999,
        duration: "4N/5D",
        description: "3N Gangtok + 1N Lachung. The land of Kanchenjunga.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Gangtok → Lachung",
        isFeatured: false
    },
    {
        title: "Darjeeling Pelling Gangtok Tour",
        state: "darjeeling-sikkim",
        price: 32000,
        duration: "6N/7D",
        description: "2N Darjeeling → 1N Pelling → 3N Gangtok. The finest Himalayan towns.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Darjeeling → Pelling → Gangtok",
        isFeatured: false
    },
    {
        title: "Gangtok Lachung Pelling Darjeeling Tour",
        state: "darjeeling-sikkim",
        price: 39999,
        duration: "8N/9D",
        description: "3N Gangtok → 1N Lachung → 2N Pelling → 2N Darjeeling. Grand Sikkim tour.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Gangtok → Lachung → Pelling → Darjeeling",
        isFeatured: true
    },
    // Uttarakhand (9)
    {
        title: "Uttarakhand Mussoorie Tour Package",
        state: "uttarakhand",
        price: 9999,
        duration: "2N/3D",
        description: "2 Nights Mussoorie. The queen of hill stations.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Mussoorie",
        isFeatured: false
    },
    {
        title: "Uttarakhand Haridwar & Rishikesh Tour Package",
        state: "uttarakhand",
        price: 13500,
        duration: "3N/4D",
        description: "2N Haridwar + 1N Rishikesh. Spiritual towns on Ganga.",
        category: "Spiritual Trail",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Haridwar → Rishikesh",
        isFeatured: false
    },
    {
        title: "Uttarakhand Haridwar, Rishikesh & Mussoorie Tour Package",
        state: "uttarakhand",
        price: 16500,
        duration: "4N/5D",
        description: "Haridwar → Rishikesh → Mussoorie. Spiritual and scenic blend.",
        category: "Spiritual Trail",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Haridwar → Rishikesh → Mussoorie",
        isFeatured: false
    },
    {
        title: "Uttarakhand Auli Tour Package",
        state: "uttarakhand",
        price: 16999,
        duration: "4N/5D",
        description: "2N Haridwar + 2N Auli / Joshimath. Ski and adventure.",
        category: "Adventure",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Haridwar → Auli",
        isFeatured: false
    },
    {
        title: "Uttarakhand Haridwar, Rishikesh, Mussoorie – Dhanaulti – Dehradun Tour Package",
        state: "uttarakhand",
        price: 21000,
        duration: "5N/6D",
        description: "A comprehensive tour of Uttarakhand.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Haridwar → Rishikesh → Mussoorie → Dehradun",
        isFeatured: false
    },
    {
        title: "Uttarakhand Mussoorie – Haridwar, Rishikesh – Nainital Tour Package",
        state: "uttarakhand",
        price: 21999,
        duration: "5N/6D",
        description: "Mussoorie → Haridwar → Nainital. Best of Uttarakhand.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Mussoorie → Haridwar → Nainital",
        isFeatured: true
    },
    {
        title: "Uttarakhand Nainital Tour Package",
        state: "uttarakhand",
        price: 10999,
        duration: "2N/3D",
        description: "2 Nights Nainital. Lake and mountains.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Nainital",
        isFeatured: false
    },
    {
        title: "Uttarakhand Nainital, Ranikhet, Almora, Kausani & Jim Corbett Tour Package",
        state: "uttarakhand",
        price: 0,
        duration: "On Request",
        description: "A grand tour of north Uttarakhand.",
        category: "Adventure",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Nainital → Ranikhet → Almora → Jim Corbett",
        isFeatured: false
    },
    {
        title: "Uttarakhand Chardham Tour Package",
        state: "uttarakhand",
        price: 47999,
        duration: "11N/12D",
        description: "Haridwar → Barkot → Uttarkashi → Kedarnath → Badrinath. The holy pilgrimage.",
        category: "Spiritual Trail",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Haridwar → Uttarkashi → Kedarnath → Badrinath",
        isFeatured: true
    },
    // Kerala (6)
    {
        title: "Exciting Kochin & Munnar Tour Package",
        state: "kerala",
        price: 7500,
        duration: "2N/3D",
        description: "Delhi → Munnar → Delhi. Tea gardens and backwaters.",
        category: "Backwaters",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Kochin → Munnar",
        isFeatured: false
    },
    {
        title: "Exciting Kochin – Munnar & Alappuzha Tour Package",
        state: "kerala",
        price: 0,
        duration: "On Request",
        description: "Kochin → Munnar → Alappuzha. The complete Kerala experience.",
        category: "Backwaters",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Kochin → Munnar → Alappuzha",
        isFeatured: false
    },
    {
        title: "Kerala Tour Package",
        state: "kerala",
        price: 21500,
        duration: "On Request",
        description: "Kerala (Custom Itinerary). God's own country.",
        category: "Backwaters",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Kerala custom tour",
        isFeatured: false
    },
    {
        title: "Kerala Kanyakumari Tour Package",
        state: "kerala",
        price: 23500,
        duration: "6N/7D",
        description: "Munnar → Thekkady → Alappuzha → Kovalam. Ultimate Kerala.",
        category: "Backwaters",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Munnar → Thekkady → Alappuzha → Kovalam",
        isFeatured: true
    },
    {
        title: "Grand Kerala & Tamil Nadu Tour Package",
        state: "kerala",
        price: 35500,
        duration: "9N/10D",
        description: "Munnar → Thekkady → Alappuzha → Kovalam → Kanyakumari → Madurai. Grand tour.",
        category: "Backwaters",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Munnar → Thekkady → Kanyakumari → Madurai",
        isFeatured: false
    },
    {
        title: "Tamil Nadu Tour Package",
        state: "kerala",
        price: 0,
        duration: "On Request",
        description: "Tamil Nadu (Custom Itinerary). South Indian heritage.",
        category: "Cultural Heritage",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Tamil Nadu custom tour",
        isFeatured: false
    },
    // Rajasthan (6)
    {
        title: "Jaipur (Chokhi Dhani) Tour Package",
        state: "rajasthan",
        price: 7500,
        duration: "2N/3D",
        description: "2 Nights Jaipur. The pink city.",
        category: "Cultural Heritage",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Jaipur",
        isFeatured: false
    },
    {
        title: "Jaipur (Chokhi Dhani) & Pushkar Ajmer Tour Package",
        state: "rajasthan",
        price: 9999,
        duration: "3N/4D",
        description: "Jaipur → Pushkar → Ajmer. Rajasthani culture.",
        category: "Cultural Heritage",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Jaipur → Pushkar → Ajmer",
        isFeatured: false
    },
    {
        title: "Jodhpur Tour Package",
        state: "rajasthan",
        price: 0,
        duration: "On Request",
        description: "2 Nights Jodhpur. The blue city.",
        category: "Cultural Heritage",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Jodhpur",
        isFeatured: false
    },
    {
        title: "Mount Abu Tour Package",
        state: "rajasthan",
        price: 10999,
        duration: "2N/3D",
        description: "2 Nights Mount Abu. Cool hill station in Rajasthan.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Mount Abu",
        isFeatured: false
    },
    {
        title: "Ranthambore Tour Package",
        state: "rajasthan",
        price: 13999,
        duration: "2N/3D",
        description: "2 Nights Ranthambore. Tiger safari and heritage.",
        category: "Wildlife",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Ranthambore",
        isFeatured: true
    },
    {
        title: "Jaisalmer & Bikaner Tour Package",
        state: "rajasthan",
        price: 16500,
        duration: "4N/5D",
        description: "2N Jaisalmer → 2N Bikaner. Desert and culture.",
        category: "Cultural Heritage",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Jaisalmer → Bikaner",
        isFeatured: false
    },
    // Kashmir (3)
    {
        title: "Kashmir Tour Package",
        state: "kashmir",
        price: 14999,
        duration: "5N/6D",
        description: "Srinagar Hotel → Pahalgam. Paradise on earth.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Srinagar → Pahalgam",
        isFeatured: false
    },
    {
        title: "Kashmir Tour Package (with Houseboat)",
        state: "kashmir",
        price: 16500,
        duration: "5N/6D",
        description: "1N Srinagar Houseboat → 3N Srinagar Hotel → 1N Pahalgam. Luxurious Kashmir.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Srinagar Houseboat → Pahalgam",
        isFeatured: true
    },
    {
        title: "Kashmir Tour Package (Extended)",
        state: "kashmir",
        price: 0,
        duration: "On Request",
        description: "Kashmir (Extended Itinerary). Complete exploration.",
        category: "Mountain Escape",
        highlights: [
            "Hotel",
            "Food",
            "Transport",
            "Sightseeing"
        ],
        route: "Kashmir extended tour",
        isFeatured: false
    }
];
function generatePackages() {
    return REAL_PACKAGES.map((pkg, idx)=>({
            ...pkg,
            images: [
                `https://images.unsplash.com/photo-${Math.floor(Math.random() * 10) + 1}?auto=format&fit=crop&w=800&q=80`
            ],
            rating: 4.5 + Math.random() * 0.5,
            reviews: Math.floor(Math.random() * 500) + 50,
            tags: pkg.isFeatured ? [
                "Featured",
                "Top Rated"
            ] : [
                "Popular"
            ]
        }));
}
async function GET() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // Optional: await Package.deleteMany({}); // Uncomment to re-seed
        const count = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Package$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments();
        if (count > 0) {
            return Response.json({
                message: "Database already seeded",
                count
            });
        }
        const packages = generatePackages();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Package$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].insertMany(packages);
        return Response.json({
            message: "Seeded 43 packages successfully",
            count: packages.length
        });
    } catch (error) {
        return Response.json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ab64472e._.js.map