import { gql } from '@apollo/client'

export default gql`
query postCount {
  posts(where: {status: PUBLISH}) {
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
}`