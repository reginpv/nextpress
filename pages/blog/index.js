/**
 * File: pages/blog/index.js
 */

import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import BlogList from '../../components/BlogList';
import LayoutDefault from '../../layouts/default';

//import './style.scss';

export default class Index extends Component {

  static async getInitialProps() {

    const postsRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/posts`);
    const postsJson = await postsRes.json();
    return { 
      payload: {
        meta: {
          title: `Blog - ${process.env.SITENAME}`,
          description: `Welcome to our blog - ${process.env.SITENAME}`
        },
        posts: postsJson
      }
    }
  }

  render() {
    return (
      <LayoutDefault
        meta={this.props.payload.meta}
      >
        <div className="blog">

          <BlogList
            posts={this.props.payload.posts}
          />

        </div>
      </LayoutDefault>
    )
  }
}