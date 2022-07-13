import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getAllPosts(size,offset) {
    const { data } = await client.query(
        {
            query: gql`
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
        }
      `},
        {size, offset}
    );
    return data?.posts
}