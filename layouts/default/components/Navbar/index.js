/**
 * File: layouts/default/components/navbar/index.js
 */

import Link from 'next/link';

export default props => (
  <nav data-navbar className={`${props.className}`}>
    <div className="nav-wrapper container">
      <a href={process.env.BASEURL} className="brand-logo">{process.env.SITENAME}</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {console.log(props.menu)}
        {
          props.menu.length > 0 ?
            props.menu.map((item, i)=>(
              <li key={i}>
                {console.log(item.url.replace(process.env.WP_URL,''))}
                {
                  item.type == "post_type" ?
                    <Link href="/[page]" as={item.url.replace(process.env.WP_URL,'').replace(/\/$/, "")}><a target={item.target}>{item.title}</a></Link> : 
                    <a href={item.url} target={item.target}>{item.title}</a> 
                }
              </li>
            )) : ``
        }
      </ul>
    </div>
  </nav>
)