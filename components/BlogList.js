import Link from 'next/link';

export default props => (
  <section className="blog-list">
    <div className="blog-list__content container">
      {
        props.posts.map((post,i)=>(
          <div key={i} className="blog-list__item">
            <h2>
              <Link href={`${process.env.WP_BLOG_SLUG}/${post.slug}`}>
                <a dangerouslySetInnerHTML={{__html: post.title.rendered}} />
              </Link>
            </h2>
            <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
          </div>
        ))
      }
    </div>
  </section>
);