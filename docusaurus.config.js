// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cool",
  tagline: "An open-source C++ framework",
  url: "https://coollibs.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "CoolLibs",
  projectName: "CoolLibs.github.io",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  plugins: [[require.resolve("docusaurus-lunr-search"), { excludeRoutes: [] }]],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Cool's Logo",
          src: "img/favicon-32x32.png",
        },
        items: [
          { to: "/cool", label: "Cool", position: "left" },
          { to: "/lab-dev", label: "Lab", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/contribute", label: "Contribute", position: "left" },
          { to: "/learn", label: "Learn", position: "left" },
          { to: "/internships", label: "Internships", position: "left" },
          { to: "/about", label: "About", position: "left" },
          {
            href: "https://github.com/CoolLibs",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Our projects",
            items: [
              {
                label: "CoolLab",
                to: "https://github.com/CoolLibs/Lab",
              },
              {
                label: "CoolDemo",
                to: "https://github.com/CoolLibs/Demo",
              },
            ],
          },
          {
            title: "Raise an issue!",
            items: [
              {
                label: "Ask a question",
                to: "https://github.com/CoolLibs/Cool/issues",
              },
              {
                label: "Give us feedback",
                to: "https://github.com/CoolLibs/Cool/issues",
              },
              {
                label: "Report a mistake",
                to: "https://github.com/CoolLibs/home/issues",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                to: "https://github.com/CoolLibs",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with <a href="https://docusaurus.io/">Docusaurus</a>.
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["glsl"],
      },
    }),
}

module.exports = config
