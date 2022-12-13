import Head from "next/head";

export const Meta = ({ title , description , keywords}) => {
  return (
    <Head>
      <title>{`LetsAdd | ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="LetsAdd" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
  );
};

Meta.defaultProps={
    title : 'Home',
    description:'Creative Agency ',
    keywords :'graphic design , Social Media , Marketing'
}
