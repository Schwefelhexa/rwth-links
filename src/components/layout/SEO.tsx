import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
interface QueryType {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
}

interface Props {
  title: string;
}
const SEO: React.FC<Props> = ({ title }) => {
  const data = useStaticQuery<QueryType>(query);

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: `description`,
          content: data.site.siteMetadata.description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: data.site.siteMetadata.description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: data.site.siteMetadata.description
        }
      ]}
    />
  );
};
export default SEO;
