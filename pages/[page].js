import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';

import LayoutDefault from '../layouts/default';

/**
 * File: pages/[page].js
 */
export default withRouter(class Page extends Component {

  static async getInitialProps(router) {
    const menuRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/menu`);
    const menuJson = await menuRes.json();

    const pageRes = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/pages/?slug=${router.query.page}`);
    const pageJson = await pageRes.json();

    return { 
      payload: {
        menu: menuJson,
        page: pageJson
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
});