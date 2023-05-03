// @ts-check

/** @type {import("next").NextConfig} */
module.exports = {
  env: {
    API_URI: /** @type {string} */ (process.env.API_URI),
  },
  i18n: {
    locales: ["en", "es", "hi", "it", "ru"],
    defaultLocale: "en"
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  pageExtensions: ["jsx", "mjs", "js"],
  reactStrictMode: true,
  compress: true,
};
