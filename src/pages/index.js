import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BlockText from "../components/block-text"
import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"
import {FaBars} from 'react-icons/fa'

export default function IndexPage({ data }) {
  console.log(data.specialties.edges)
  console.log(data.posts.edges)
  const specialties = data.specialties.edges
  const posts = data.posts.edges
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <Layout>
         <div className="py-20" style={{background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'}}
>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-2 text-white">
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

        {/* Specialties section */}
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {specialties.map((specialty) => (
             <Link className="" to={`/specialties/${specialty.node.slug.current}`} key={specialty.node.id}>
              <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src={specialty.node.mainImage.asset.fluid.src} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{specialty.node.title}</div>
                <p className="text-gray-700 text-base">
                {specialty.node.excerpt}
                </p>
              </div>
              
            </div>
           </Link>
          ))}
        </div>

        {/* BLOG SECTION */}
        <div className="flex justify-center">Blog/News</div>

        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {/* post 1 */}
            {posts.map(post => (
              <Link className="">
              <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src={post.node.mainImage.asset.fluid.src} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.node.title}</div>
                <p className="text-gray-700 text-base">
                    <BlockText blocks={post.node._rawExcerpt} />
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

    posts: allSanityPost (limit:3, sort:{fields: [publishedAt], order:DESC}) {
    edges {
      node {
        id
        publishedAt
        mainImage {
          asset {
            id
            fluid {
              src
            }
          }
        }
        title
        _rawExcerpt
        slug {
          current
        }
      }
    }
  }
}
`