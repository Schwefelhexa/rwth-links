import AnimateInList from 'components/animation/AnimateInList';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Link from 'components/Link';
import { graphql, PageProps } from 'gatsby';
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

const IndexPage: React.FC<PageProps & { data: Data }> = ({ location, data }) => (
  <Layout context={{ location }}>
    <Header>Erstis Informatik</Header>
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
