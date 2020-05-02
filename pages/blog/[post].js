/**
 * File: pages/blog/[post].js
 */

import React, { Component } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import LayoutDefault from '../../layouts/default';

export default class Page extends Component {

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
              <h1 dangerouslySetInnerHTML={{__html: p.title.rendered}} />
              <div dangerouslySetInnerHTML={{__html: p.content.rendered}} />
            </div>
          ))
        }
        </div>
      </LayoutDefault>
    )
  }
};

export async function getStaticPaths() {

  const postRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/posts?per_page=50`);
  const postJson = await postRes.json(); 

  const paths = postJson.map(post => ({
    params: { 
      post: post.slug 
    },
  }))

  return { 
    paths, 
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    
  const menuRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/menu`);
  const menuJson = await menuRes.json();

  const postRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/posts/?slug=${params.post}`);
  const postJson = await postRes.json(); 

  return { 
    props: {
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
}