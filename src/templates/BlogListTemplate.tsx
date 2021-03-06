import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import { pages } from '../utils'

const PostsWrapper = styled.div`
  padding: 0 15px;
  max-width: 800px;
  margin: 0 auto 35px;
`

function Blog(props) {
  const posts = props.data.allMdx.edges || []
  const siteUrl = props.data.site.siteMetadata.siteUrl

  const { currentPage, numPages, hasNextPage, hasPrevPage } = props.pageContext

  return (
    <Layout location={props.location} active={pages.blog}>
      <div className="Blog" style={{ marginTop: 90 }}>
        <SEO title="Blog" url={`${siteUrl}/blog`} />
        <PostsWrapper>
          {posts.map(({ node }, index) => {
            console.log(node.frontmatter)
            if (node.frontmatter.published)
              return (
                <Card
                  data={{
                    title: node.frontmatter.title,
                    thumbnail: node.frontmatter.image.childImageSharp.gatsbyImageData,
                    excerpt: node.frontmatter.description || node.excerpt,
                    date: node.frontmatter.date,
                    path: `/${node.fields.slug}`,
                  }}
                  key={index}
                />
              )
            else return false
          })}
          <Pagination
            pages={numPages}
            selected={currentPage}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
          />
        </PostsWrapper>
      </div>
    </Layout>
  )
}

export const queryBlog = graphql`
  query QueryTagBlogList($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { model: { eq: "post" }, published: { eq: true } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 240)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            slug
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
            published
          }
        }
      }
    }
  }
`

export default Blog