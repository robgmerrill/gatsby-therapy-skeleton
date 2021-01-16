import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
        id
    publishedAt
    mainImage {
      asset {
        fluid {
          src
        }
      }
    }
    title
    slug {
      current
    }
    }
  }
`

const BlogPostTemplate = ({data}) => {
//     const { data, errors } = props
  const post = data.post
  return (
    <Layout>
      <h1>{post.title}</h1>
            <h1>{post.body}</h1>
            <h1>{post.excerpt}</h1>
            <img src={post.mainImage.asset.fluid.src} />
    </Layout>
  )
}

export default BlogPostTemplate