import React from 'react'
import Layout from '../components/layout'

const SpecialtyTemplate = (props) => {
    const {data, errors} = props;
    const specialty = data.specialty;
    console.log("data from specialty template", specialty)
    return (
        <Layout>
            <h1>{specialty.title}</h1>
            <h1>{specialty.body}</h1>
            <h1>{specialty.excerpt}</h1>
            <img src={specialty.mainImage.asset.fluid.src} />

        </Layout>
    )
}

export const query = graphql`
  query SpecialtyTemplateQuery($id: String!) {
  specialty: sanitySpecialty(id: {eq: $id}) {
    id
    body
    excerpt
    mainImage {
      asset {
        fluid {
          src
        }
      }
    }
    slug {
      current
    }
    title
  }
}

`

export default SpecialtyTemplate