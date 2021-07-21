const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "react-material-cli",
  tagline:
    "Generate custom react components and hooks that follow best practices and the highest standards of implementation.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "EricPuskas",
  projectName: "react-material-cli-docs",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ro", "hu"]
  },
  themeConfig: {
    navbar: {
      items: [
        {
          type: "localeDropdown"
        }
      ],
      title: "react-material-cli",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "doc",
          docId: "getting-started",
          position: "right",
          label: "Docs"
        },
        {
          type: "localeDropdown",
          position: "right"
        },
        {
          href: "https://github.com/EricPuskas/react-material-cli",
          label: "GitHub",
          position: "right"
        },
        {
          type: "search",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get Started",
              to: "/docs/getting-started"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "#"
            },
            {
              label: "GitHub Discussions",
              href: "https://github.com/EricPuskas/react-material-cli/discussions/"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/EricPuskas/react-material-cli"
            }
          ]
        }
      ],
      copyright: `MIT License. Copyright © ${new Date().getFullYear()} Eric Puskas`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          sidebarPath: require.resolve("./sidebars.json"),
          editUrl: "https://github.com/cyps1000/react-material-cli-docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
