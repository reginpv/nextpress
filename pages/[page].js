/**
 * File: pages/[page].js
 */

import React, { Component } from 'react';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import LayoutDefault from '../layouts/default';

export default class Page extends Component {

  static async getInitialProps( { query } ) {

    const { page } = query;
    
    const menuRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/menu`);
    const menuJson = await menuRes.json();

    const pageRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/pages/?slug=${page}`);
    const pageJson = await pageRes.json(); 

    return { 
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

  componentDidMount(){
    this.props.payload.page.length == 1 ? `` : Router.push('/error/404');
  }

  render() {
    return (
      <LayoutDefault
        meta={this.props.payload.meta}
        menu={this.props.payload.menu}
      >
        <div className="page">
        {
          this.props.payload.page.map((p,i)=>(
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