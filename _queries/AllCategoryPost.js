import { gql } from '@apollo/client'

export default gql`
        query getAllCategoryPost($size: Int,$offset: Int,$slug: String) {
              posts( where: {offsetPagination: {size: $size, offset: $offset}, categoryName: $slug}) {
                pageInfo {
                  offsetPagination {
                    total
                  }
                }
                nodes {
                  postId
                  title
                  slug
                  commentCount
                  date
                  status
                  excerpt
                  featuredImage {
                    node {
                      mediaItemUrl
                    }
                  }
                }
              }
            }`