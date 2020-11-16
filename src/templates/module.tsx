import AnimateInList from 'components/animation/AnimateInList';
import Layout from 'components/Layout';
import Link from 'components/Link';
import { graphql } from 'gatsby';
import React from 'react';

interface Data {
  modulesYaml: {
    name: string;
    links: {
      name: string;
      url: string;
    }[];
  };
}

const ModuleTemplate: React.FC<{ data: Data }> = ({ data }) => (
  <Layout>
    <h1 className="text-4xl font-bold text-primary leading-none mb-5">{data.modulesYaml.name}</h1>
    <AnimateInList>
      {data.modulesYaml.links.map((link) => (
        <Link key={link.url} to={link.url}>
          {link.name}
        </Link>
      ))}
    </AnimateInList>
  </Layout>
);
export default ModuleTemplate;

export const query = graphql`
  query ModuleTemplateQuery($slug: String!) {
    modulesYaml(fields: { slug: { eq: $slug } }) {
      links {
        name
        url
      }
      name
    }
  }
`;
