/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'React-Leaflet (legacy v2.x )',
  tagline: '⚛️  React components for 🍃 Leaflet maps',
  url: 'https://react-leaflet-v2-docs.netlify.app/',
  baseUrl: '/',
  useEnglishUrl: true,
  headerLinks: [
    { doc: 'intro', label: 'Getting started' },
    { doc: 'components', label: 'API' },
  ],
  users: [],
  favicon: 'img/favicon.png',
  colors: {
    logoPrimary: '#60BA9D',
    logoSecondary: '#2A473E',
    primaryColor: '#41957a',
    secondaryColor: '#2C5145',
  },
  copyright: 'Copyright © 2020 Paul Le Cam and contributors',
  organizationName: 'PaulLeCam',
  projectName: 'react-leaflet',
  cleanUrl: true,
  scrollToTop: true,
  highlight: {
    theme: 'default',
  },
  onPageNav: 'separate',
  scripts: ['https://buttons.github.io/buttons.js'],
  repoUrl: 'https://github.com/stebogit/react-leaflet',
}

module.exports = siteConfig
