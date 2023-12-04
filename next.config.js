// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };

module.exports = withContentlayer(nextConfig);

// /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// //module.exports = nextConfig;

// module.exports = {
//     async headers() {
//         return [
//             {
//                 // matching all API routes
//                 source: "/:path*",
//                 headers: [
//                     { key: "Access-Control-Allow-Credentials", value: "true" },
//                     { key: "Access-Control-Allow-Origin", value: "*" },
//                     {
//                         key: "Access-Control-Allow-Methods",
//                         value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
//                     },
//                     {
//                         key: "Access-Control-Allow-Headers",
//                         value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
//                     },
//                 ],
//             },
//         ];
//     },
// };
