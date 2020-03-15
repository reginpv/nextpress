import Navbar from './components/Navbar';
import Footer from './components/Footer';

/**
 * Materialize css
 */
import 'materialize-css/dist/css/materialize.min.css';

/**
 * Template specific style
 */
import './css/style.scss';

export default props => (
  <section className="layout-default">
    <Navbar />
    {props.children}
    <Footer className="center-align container" />
  </section>
)