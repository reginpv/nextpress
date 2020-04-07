export default props => (
  <nav data-navbar className={`${props.className}`}>
    <div className="nav-wrapper container">
      <a href={process.env.BASEURL} className="brand-logo">{process.env.SITENAME}</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href={process.env.PHONE}>{process.env.PHONE_LABEL}</a></li>
        <li><a href={process.env.TYPEFORM_LINK}>Apply Now</a></li>
      </ul>
    </div>
  </nav>
)