import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"
import {FaBars} from 'react-icons/fa'

export default function IndexPage({ data }) {
  console.log(data.specialties.edges)
  const specialties = data.specialties.edges
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <Layout>
         <div className="py-20" style={{background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'}}
>
          <div className="container mx-auto px-6">
            <h2 class="text-4xl font-bold mb-2 text-white">
             Hello! We are the PNW Counseling Collective
            </h2>
            <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
              Explore More
            </button>
          </div>
        </div>
        <h1 className="grid place-items-center pt-8">
          <Link to='/specialties/'>My Specialties</Link>
        </h1>


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

        <div className="bg-gray-100 h-96">
          hero area
        </div>
      </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    # site: allSanityTitle {
    #   nodes {
    #   title
    # }
    # }

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

    # posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
    #   edges {
    #     node {
    #       id
    #       publishedAt
    #       mainImage {
    #         crop {
    #           _key
    #           _type
    #           top
    #           bottom
    #           left
    #           right
    #         }
    #         hotspot {
    #           _key
    #           _type
    #           x
    #           y
    #           height
    #           width
    #         }
    #         asset {
    #           _id
    #         }
    #         alt
    #       }
    #       title
    #       _rawExcerpt
    #       slug {
    #         current
    #       }
    #     }
    #   }
    # }
  }
`