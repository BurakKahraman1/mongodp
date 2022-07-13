import { gql } from '@apollo/client'

export default gql`
query LastPosts {
    posts(last: 5) {
      nodes {
        postId
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        title
        slug
      }
    }
}`