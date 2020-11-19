import AnimateInList from 'components/animation/AnimateInList';
import Header from 'components/layout/Header';
import Layout from 'components/layout/Layout';
import Link from 'components/Link';
import { graphql, PageProps } from 'gatsby';
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

const ModuleTemplate: React.FC<PageProps & { data: Data }> = ({ location, data }) => (
  <Layout context={{ location }} title={`${data.modulesYaml.name} - Links`}>
    <Header>{data.modulesYaml.name}</Header>
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
