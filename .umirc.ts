// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

const name = 'octokit-rest';

export default defineConfig({
  title: 'Octokit Rest API',
  mode: 'site',
  favicon: 'https://avatars.githubusercontent.com/u/3430433?s=200&v=4',
  logo: 'https://avatars.githubusercontent.com/u/3430433?s=200&v=4',
  exportStatic: {},
  ssr: {},
  outputPath: 'docs-dist',
  hash: true,
  base: `/${name}/`,
  publicPath: `/${name}/`,
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  theme: {
    '@c-primary': '#1890ff',
  },
  navs: {
    'zh-CN': [
      { title: '介 绍', path: '/guide' },
      { title: 'API', path: '/api' },
      { title: 'GitHub', path: 'https://github.com/actions-cool/octokit-rest' },
    ],
    'en-US': [
      { title: 'Guide', path: '/en-US/guide' },
      { title: 'API', path: '/en-US/api' },
      { title: 'GitHub', path: 'https://github.com/actions-cool/octokit-rest' },
    ],
  },
  styles: [
    `
      .__dumi-default-layout-hero {
        padding: 40px 0 !important;
        background-color: #ffffff !important;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='58' height='29' viewBox='0 0 58 29'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.11' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='2' height='2' patternUnits='userSpaceOnUse'%3E%3Cg stroke='%23ffffff' stroke-width='0.11'%3E%3Crect fill='%23fafafa' width='1' height='1'/%3E%3Crect fill='%23ffffff' width='1' height='1' x='1' y='1'/%3E%3Crect fill='%23f5f5f5' width='1' height='1' y='1'/%3E%3Crect fill='%23f0f0f0' width='1' height='1' x='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='b' width='5' height='11' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23ebebeb'%3E%3Cuse xlink:href='%23s' x='2' y='0'/%3E%3Cuse xlink:href='%23s' x='4' y='1'/%3E%3Cuse xlink:href='%23s' x='1' y='2'/%3E%3Cuse xlink:href='%23s' x='2' y='4'/%3E%3Cuse xlink:href='%23s' x='4' y='6'/%3E%3Cuse xlink:href='%23s' x='0' y='8'/%3E%3Cuse xlink:href='%23s' x='3' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='7' height='7' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse xlink:href='%23s' x='1' y='1'/%3E%3Cuse xlink:href='%23s' x='3' y='4'/%3E%3Cuse xlink:href='%23s' x='5' y='6'/%3E%3Cuse xlink:href='%23s' x='0' y='3'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='11' height='5' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23ffffff'%3E%3Cuse xlink:href='%23s' x='1' y='1'/%3E%3Cuse xlink:href='%23s' x='6' y='3'/%3E%3Cuse xlink:href='%23s' x='8' y='2'/%3E%3Cuse xlink:href='%23s' x='3' y='0'/%3E%3Cuse xlink:href='%23s' x='0' y='3'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse xlink:href='%23s' x='8' y='3'/%3E%3Cuse xlink:href='%23s' x='4' y='2'/%3E%3Cuse xlink:href='%23s' x='5' y='4'/%3E%3Cuse xlink:href='%23s' x='10' y='0'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='23' patternUnits='userSpaceOnUse'%3E%3Cg fill='%231890ff'%3E%3Cuse xlink:href='%23s' x='2' y='5'/%3E%3Cuse xlink:href='%23s' x='23' y='13'/%3E%3Cuse xlink:href='%23s' x='4' y='18'/%3E%3Cuse xlink:href='%23s' x='35' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='61' height='31' patternUnits='userSpaceOnUse'%3E%3Cg fill='%231890ff'%3E%3Cuse xlink:href='%23s' x='16' y='0'/%3E%3Cuse xlink:href='%23s' x='13' y='22'/%3E%3Cuse xlink:href='%23s' x='44' y='15'/%3E%3Cuse xlink:href='%23s' x='12' y='11'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='58' height='29'/%3E%3Crect fill='url(%23b)' width='58' height='29'/%3E%3Crect fill='url(%23c)' width='58' height='29'/%3E%3Crect fill='url(%23d)' width='58' height='29'/%3E%3Crect fill='url(%23e)' width='58' height='29'/%3E%3Crect fill='url(%23f)' width='58' height='29'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
      }
      .__dumi-default-layout-toc {
        width: 236px !important;
      }
      @media only screen and (min-width: 961px) {
        .__dumi-default-layout[data-site-mode=true][data-show-slugs=true] {
          padding-right: 308px !important;
        }
      }
      .__dumi-default-menu-inner .__dumi-default-menu-list>li>a {
        text-transform: capitalize;
      }
      .__dumi-default-layout-footer svg {
        display: none !important;
      }
      .markdown table {
        width: auto !important;
      }
    `,
  ]
});
