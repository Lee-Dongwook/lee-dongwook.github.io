import { useRouter } from "next/router";
import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <strong>DongWook's Develop Study!</strong>,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "" + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta
          property="og:description"
          content={frontMatter.description || "Nextra Docs Based Next Project"}
        />
      </>
    );
  },
  sidebar: {
    titleComponent({ title }) {
      return <div>{title}</div>;
    },
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - Develop Study",
      };
    }
  },
  project: {
    link: "https://github.com/Lee-Dongwook/Frontend_Study",
  },
  toc: {
    float: true,
    backToTop: true,
  },
  docsRepositoryBase: "https://github.com/Lee-Dongwook/Frontend_Study",
  footer: {
    text: "꾸준한 기록과 학습을",
  },
};

export default config;
