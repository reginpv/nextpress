/**
 * File: pages/index.js
 */

import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import BlogList from '../components/BlogList';
import LayoutDefault from '../layouts/default';

import './style.scss';

export default class Index extends Component {

  render() {
    return (
      <LayoutDefault
        menu={this.props.payload.menu}
      >
        <div className="home">
          <BlogList
            posts={this.props.payload.posts}
          />
        </div>
      </LayoutDefault>
    )
  }
}

export async function getServerSideProps () {

  const menuRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/menu`);
  const menuJson = await menuRes.json();

  const postsRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/posts`);
  const postsJson = await postsRes.json();

  return { 
    props: {
      payload: {
        menu: menuJson,
        posts: postsJson,
      }
    }
  }
}