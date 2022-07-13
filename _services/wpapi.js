const API_URL = 'c'
async function fetchAPI(query = '', { variables } = {}) {
    const headers = {
        'Content-Type': 'application/json'
    }
    const res = await fetch(`${API_URL}/graphql`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}
export async function getAllPosts(size,offset) {
    const data = await fetchAPI(
        `
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
              `,
        {
            variables: {
                size,
                offset,
            },
        }
    )

    return data?.posts
}
export async function getAllCategoryPost(size,offset,slug) {
    const data = await fetchAPI(
        `
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
            }
              `,
        {
            variables: {
                size,
                offset,
                slug
            },
        }
    )

    return data?.posts
}
export async function rightBarCategories() {
    const data = await fetchAPI(`
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
        }
        `
    )

    return data?.categories
}
export async function rightBarLastPosts() {
    const data = await fetchAPI(
        `
            query LastPosts {
                posts(last: 5) {
                  nodes {
                    featuredImage {
                      node {
                        mediaItemUrl
                      }
                    }
                    title
                    slug
                  }
                }
            }
      `
    )

    return data?.posts
}
export async function getOnePost(id) {
    const data = await fetchAPI(
        `
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
              }
            }
              `,
        {
            variables: {
                id
            },
        }
    )

    return data?.post
}
export async function getOneCategory(id) {
    const data = await fetchAPI(
        `
            query getOneCategory($id: ID!) {
              category(id: $id, idType: SLUG) {
                count
                name
                description
              }
            }
              `,
        {
            variables: {
                id
            },
        }
    )

    return data?.category
}
export async function getBlogUrl() {
    const data = await fetchAPI(`
        query getBlogUrl {
            generalSettings{
                url
            }
        }
        `
    )

    return data?.generalSettings
}