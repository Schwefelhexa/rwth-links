import AnimateInList from 'components/animation/AnimateInList';
import Layout from 'components/Layout';
import Link from 'components/Link';
import { graphql } from 'gatsby';
import React from 'react';

interface Data {
  allModulesYaml: {
    nodes: {
      name: string;
      fields: {
        slug: string;
      };
    }[];
  };
}

const IndexPage: React.FC<{ data: Data }> = ({ data }) => (
  <Layout>
    <h1 className="text-4xl font-bold text-primary leading-none mb-5">Erstis Informatik</h1>
    <AnimateInList>
      {data.allModulesYaml.nodes.map((module) => (
        <Link key={module.fields.slug} to={module.fields.slug}>
          {module.name}
        </Link>
      ))}
    </AnimateInList>
  </Layout>
);
export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    allModulesYaml {
      nodes {
        name
        fields {
          slug
        }
      }
    }
  }
`;
