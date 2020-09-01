import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Layout, Listing, Wrapper, Title, Header } from '../components'
import htmlSerializer from '../gatsby/htmlSerializer'
import website from '../../config/website'

const Hero = styled.header`
  background-color: ${(props) => props.theme.colors.greyLight};
  display: flex;
  align-items: center;
`

const HeroInner = styled(Wrapper)`
  padding-top: 13rem;
  padding-bottom: 13rem;
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`

const HeroText = styled.div`
  font-size: 1.7rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
  }
`

const Social = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  li {
    display: inline;
    &:not([data-name='social-entry-0']) {
      margin-left: 2.5rem;
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        margin-left: 1.75rem;
      }
    }
    a {
      font-style: normal;
      color: ${(props) => props.theme.colors.greyDark};
      font-size: 1.333rem;
      font-weight: 600;
      &:hover,
      &:focus {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: none;
      }
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        font-size: 1.2rem;
      }
    }
  }
`

const ProjectListing = styled.ul`
  list-style-type: none;
  margin-left: 0;
  margin-top: 4rem;
  li {
    margin-bottom: 1.45rem;
    a {
      font-size: 2.369rem;
      font-style: normal;
      color: ${(props) => props.theme.colors.black};
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        font-size: 1.777rem;
      }
    }
  }
`

const IndexWrapper = Wrapper.withComponent('main')

class Index extends Component {
  render() {
    const {
      data: { scrollableHomepage },
    } = this.props
    const {about_banner, about_banner_list, animated_banner, service_images, services_title, testimonials_title}= scrollableHomepage.nodes[0].data
    return (
      <Layout>
        <Header/>
        <Hero>
          {/* carousel goes here */}
        </Hero>
        <IndexWrapper id={website.skipNavId} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          
        </IndexWrapper>
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        content: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
      }),
    }),
    social: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    projects: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    scrollableHomepage: allPrismicScrollableHomepage {
      nodes {
        data {
          about_banner {
            about_banner_image {
              alt
              url
            }
            about_banner_title {
              html
            }
          }
          about_banner_list {
            about_list_item_image {
              alt
              url
            }
            about_list_item_text {
              html
            }
            about_list_item_title {
              html
            }
          }
          animated_banner {
            banner_image {
              alt
              url
            }
          }
          service_images {
            service_image {
              alt
              url
            }
            service_text {
              html
            }
          }
          services_title {
            html
          }
          testimonials_title {
            html
          }
        }
      }
    }
  }
`
