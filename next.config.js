/**
 * Use .env file
 */
require('dotenv').config();

/**
 * Enable use of SASS and CSS
 */
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
  /* config options here */
  //cssModules: true
  env: {
    SITENAME: process.env.SITENAME,
    BASEURL: process.env.BASEURL,
    WP: process.env.WP,
    PHONE: '+12133701880',
    PHONE_LABEL: '213-370-1880',
    TYPEFORM_LINK: 'https://bbsr.typeform.com/to/dWMpL8'
  }
}));