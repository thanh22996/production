const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
  env: {
    NEXT_PUBLIC_API_M_PAYME: "https://sbx-fe.payme.vn",
    NEXT_PUBLIC_API_M_PAYME_SECURITY: "FALSE",
    NEXT_PUBLIC_SITE_KEY: "6LdtoLsaAAAAAO21osVSi_S38vujBlT5nOO0Y4Zb",
    NEXT_PUBLIC_PATH_URL: "/graphql",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
