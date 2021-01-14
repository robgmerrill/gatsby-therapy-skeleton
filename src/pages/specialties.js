import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const Specialties = ({data}) => {
    const specialties = data.specialties.edges
    console.log("data from specialties page", specialties)
    return (
       <Layout>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {specialties.map((specialty) => (
             <Link className="" to={`/specialties/${specialty.node.slug.current}`}>
              <div class="rounded overflow-hidden shadow-lg">
              <img class="w-full" src={specialty.node.mainImage.asset.fluid.src} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{specialty.node.title}</div>
                <p class="text-gray-700 text-base">
                {specialty.node.excerpt}
                </p>
              </div>
              
            </div>
           </Link>
          ))}
          </div>
        </Layout>
    )
}

export const query = graphql`
  query SpecialtiesPageQuery {
    specialties: allSanitySpecialty {
        edges {
            node {
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
                title
                slug {
                current
                }
            }
        }
    }
  }
`

export default Specialties;