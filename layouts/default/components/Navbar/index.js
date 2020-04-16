/**
 * Props from WP
 */
export default props => (
  <nav data-navbar className={`${props.className}`}>
    <div className="nav-wrapper container">
      <a href={process.env.BASEURL} className="brand-logo">{process.env.SITENAME}</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {
          props.menu.map((item, i)=>(
            <li key={i}>
              <a href={item.url}>
                {item.title}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  </nav>
)