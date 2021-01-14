/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
async function createSpecialtyPages(graphql, actions, reporter) {
    const {createPage} = actions;
    const result = await graphql(`
    {
    allSanitySpecialty {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
    `)

    if (result.errors) throw result.errors

    const specialtyEdges = (result.data.allSanitySpecialty || {}).edges || []

    specialtyEdges.forEach(edge => {
        const id = edge.node.id
        const slug = edge.node.slug.current
        const path = `/specialties/${slug}/`

        reporter.info(`Create specialty page: ${path}`)

        createPage({
            path, 
            component: require.resolve('./src/templates/specialty.js'),
            context: {id}
        })
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
    await createSpecialtyPages(graphql, actions, reporter)
}