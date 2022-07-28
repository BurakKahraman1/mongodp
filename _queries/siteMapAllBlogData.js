import { gql } from '@apollo/client'

export default gql`
        query AllPosts {
          posts(where: {status: PUBLISH}) {
            nodes {
              postId
              title
              slug
              date
            }
          }
          categories(last: 1000){
                nodes {
                    databaseId
                    name
                    slug
                }
            }
        }`