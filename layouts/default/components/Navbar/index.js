export default props => (
  <nav data-navbar className={`${props.className}`}>
    <div className="nav-wrapper container">
      <a href={process.env.BASEURL} className="brand-logo">{process.env.SITENAME}</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
)