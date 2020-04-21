/**
 * File: pages/blog/[post].js
 */

import React, { Component } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import LayoutDefault from '../../layouts/default';

export default class Page extends Component {

  static async getInitialProps( { query } ) {

    const { post } = query;

    const menuRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/menu`);
    const menuJson = await menuRes.json();

    const postRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/posts/?slug=${post}`);
    const postJson = await postRes.json();

    return { 
      payload: {
        meta: {
          title: postJson[0] ? postJson[0].title.rendered : null,
          description: postJson[0] ? postJson[0].excerpt.rendered : null
        },
        menu: menuJson,
        post: postJson
      }
    }

  }

  componentDidMount(){
    this.props.payload.post.length == 1 ? `` : Router.push('/error/404');
  }

  render() {
    return (
      <LayoutDefault
        meta={this.props.payload.meta}
        menu={this.props.payload.menu}
      >
        <div className="page">
        {
          this.props.payload.post.map((p,i)=>(
            <div key={i} className="page__content container">
              <h1>{p.title.rendered}</h1>
              <div dangerouslySetInnerHTML={{__html: p.content.rendered}} />
            </div>
          ))
        }
        </div>
      </LayoutDefault>
    )
  }
};