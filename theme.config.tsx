import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <strong>DongWook's Develop Study!</strong>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Dongwook_Develop_Study" />
      <meta
        property="og:description"
        content="Nextra Docs Template Based Next Project"
      />
    </>
  ),
  project: {
    link: "https://github.com/Lee-Dongwook/Frontend_Study",
  },
  toc: {
    backToTop: true,
  },
  docsRepositoryBase: "https://github.com/Lee-Dongwook/Frontend_Study",
  footer: {
    text: "꾸준한 기록과 학습을",
  },
};

export default config;
