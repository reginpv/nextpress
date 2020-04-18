/**
 * File: pages/blog/[post].js
 */

import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';

import LayoutDefault from '../../layouts/default';

export default withRouter(class Page extends Component {

  static async getInitialProps(router) {
    const menuRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/menu`);
    const menuJson = await menuRes.json();

    const postRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/posts/?slug=${router.query.post}`);
    const postJson = await postRes.json();

    return { 
      payload: {
        menu: menuJson,
        post: postJson
      }
    }

  }

  componentDidMount(){
    //this.props.payload.page.length == 1 ? `` : Router.push('/error/404');
  }

  render() {
    return (
      <LayoutDefault
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
});