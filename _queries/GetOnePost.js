import { gql } from '@apollo/client'

export default gql`
        query getOnePost($id: ID!) {
          post(id: $id, idType: SLUG) {        
            title
            content
            excerpt
            slug
            link
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            seo {
              metaDesc
              metaKeywords
              title
              canonical
              metaRobotsNofollow
              metaRobotsNoindex
              twitterTitle
              twitterDescription
              twitterImage {
                mediaItemUrl
              }
              opengraphTitle
              opengraphDescription
              opengraphType
              opengraphUrl
              opengraphImage {
                mediaItemUrl
              }
            }
          }
        }`