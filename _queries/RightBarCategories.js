import { gql } from '@apollo/client'

export default gql`
query AllCategories {
    categories(last: 50){
        nodes {
            count
            databaseId
            parentId
            slug
            name
            databaseId
        }
    }
}`