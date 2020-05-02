/**
 * File: pages/[page].js
 */

import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import LayoutDefault from '../layouts/default';

export default withRouter(class Page extends Component {

  render() {

    if (this.props.router.isFallback) {
      return <div>Loading...</div>
    }

    return (
      <LayoutDefault
        meta={this.props.payload.meta}
        menu={this.props.payload.menu}
      >
        <div className="page">
        {
          this.props.payload.page.map((p,i)=>(
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
});

export async function getStaticPaths() {

  const pageRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/pages?per_page=20`);
  const pageJson = await pageRes.json(); 

  const paths = pageJson.map(page => ({
    params: { 
      page: page.slug 
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

  const pageRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/pages/?slug=${params.page}`);
  const pageJson = await pageRes.json(); 

  return { 
    props: {
      payload: {
        meta: {
          title: pageJson[0] ? pageJson[0].title.rendered : null,
          description: pageJson[0] ? pageJson[0].excerpt.rendered : null
        },
        menu: menuJson,
        page: pageJson
      }
    }
  }
}