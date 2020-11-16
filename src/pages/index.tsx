import AnimateInList from 'components/animation/AnimateInList';
import Layout from 'components/Layout';
import Link from 'components/Link';
import { graphql } from 'gatsby';
import React from 'react';

interface Data {
  allModulesYaml: {
    nodes: {
      name: string;
      parent: {
        name: string;
      };
    }[];
  };
}

const IndexPage: React.FC<{ data: Data }> = ({ data }) => (
  <Layout>
    <h1 className="text-4xl font-bold text-primary leading-none mb-5">Erstis Informatik</h1>
    <AnimateInList>
      {data.allModulesYaml.nodes.map((module) => (
        <Link key={module.parent.name} to={`module/${module.parent.name}`}>
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
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`;
