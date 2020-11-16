const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'ModulesYaml') {
    const slug = createFilePath({ node, getNode, basePath: 'src/data/modules' });
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query CreatePagesQuery {
      allModulesYaml {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  result.data.allModulesYaml.nodes.forEach(({ fields }) => {
    createPage({
      path: fields.slug,
      component: path.resolve('./src/templates/module.tsx'),
      context: {
        slug: fields.slug
      }
    });
  });
};
