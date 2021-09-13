import { PageRendererProps } from 'gatsby'
import React from 'react'
import Header from '../components/Home/HeaderHome'
import LatestPosts from '../components/Home/LatestPosts'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import SEO from '../components/SEO'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { pages } from '../utils'

const Index = (props: PageRendererProps) => {
  const {
    siteMetadata: { siteUrl },
    aboutContent,
  } = useSiteMetadata()

  return (
    <Layout location={props.location} active={pages.home}>
      <SEO title="" url={siteUrl} />
      <Header />
      <LatestPosts />
      <Markdown content={aboutContent.body} />
    </Layout>
  )
}

export default Index