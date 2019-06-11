/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://github.com/todrobbins',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Mapeo Docs', // Title for your website.
  tagline: 'User Docs for the Mapeo Ecosystem',
  url: 'https://digidem.github.io/Mapeo-docs', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'mapeo-docs',
  organizationName: 'digidem',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'mapeo-ecosystem', label: 'Docs'},
    {page: 'help', label: 'Help'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/mapeo_256x256.png',
  footerIcon: 'img/mapeo_256x256.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#3333ff',
    secondaryColor: '#cbdbf3',
  },

  /* Custom fonts for website */
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Rubik:300,400,500,700",
    "static/css/custom.css"
  ],

  fonts: {
    myFont: [
      "Rubik",
      "San Serif"
    ],
    // myOtherFont: [
    //   "-apple-system",
    //   "system-ui"
    // ]
  },


  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Digital Democracy`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/mapeo_256x256.png',
  twitterImage: 'img/mapeo_256x256.png',
  
  // Algolia search integration
  algolia: {
    apiKey: 'b35cd69e0312590dcfdf17d8a8a0e478',
    indexName: 'mapeo'
  }

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
