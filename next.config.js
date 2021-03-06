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
  env: {
    SITENAME: process.env.SITENAME,
    DESCRIPTION: process.env.DESCRIPTION,
    BASEURL: process.env.BASEURL,
    WP_URL: process.env.WP_URL,
    WP_BLOG_SLUG: process.env.WP_BLOG_SLUG
  },
  target: 'serverless'
}));