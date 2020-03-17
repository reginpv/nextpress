import LayoutDefault from '../layouts/default';

import './style.scss';

export default props => (
  <LayoutDefault>
    <div className="page">

      <h1 className="center-align">Welcome to {process.env.SITENAME}</h1>

    </div>
  </LayoutDefault>
)