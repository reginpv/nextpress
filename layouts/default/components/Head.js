import Head from 'next/head';
export default props => (
  <Head>

    {/* Required meta tags */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    {/* Optimal Internet Explorer compatibility */}
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    {/* Meta data */}
    <title>{ props.meta.title || process.env.SITENAME }</title>
    <meta name="description" content={ (props.meta.description || process.env.DESCRIPTION).replace(/(<([^>]+)>)/ig,"") } />

    {/* Favicon */}
    <link rel="icon" type="image/jpeg" href={process.env.FAVICON} />

    {/* OGPs */}
    
  </Head>
);
