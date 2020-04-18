/**
 * File: layouts/default/index.js
 */

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Head from './components/Head';
import 'materialize-css/dist/css/materialize.min.css';
import './css/style.scss';

export default props => (
  <section className="layout-default">
    <Head
      meta={props.meta || {}}
    />
    <Navbar
      menu={props.menu || []}
    />
    {props.children}
    <Footer 
      className="center-align container"
    />
  </section>
)