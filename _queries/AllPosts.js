import { gql } from '@apollo/client'

export default gql`
        query AllPosts($size: Int,$offset: Int) {
          posts(where: {offsetPagination: {size: $size, offset: $offset}, status: PUBLISH}) {
            nodes {
              postId
              excerpt
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              title
              slug
              commentCount
              date
            }
            pageInfo {
              offsetPagination {
                total
              }
            }
          }
        }`