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
    WP: process.env.WP
  }
}));