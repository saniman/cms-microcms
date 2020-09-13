
async function fetchAPI(query, { variables } = {}) {
  const res = await fetch( process.env.local.SITE_URL + 'api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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

export async function getPreviewPostByID(id,draftKey) {
  const data = await fetchAPI(
    `
    query Query($id: String, $draftKey: String) {
      postByID(id: $id, draftKey: $draftKey){
          id
      }
    }
  `,
    {
      preview: true,
      variables: {
        id,
        draftKey
      }
    }
  )
  return data.postByID
}

export async function getAllPostsWithID() {
  const data = fetchAPI(`
    {
      allPosts {
        contents {
          id
        }
      }
    }
  `)
  return data?.allPosts
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      allPosts {
        contents {
          id
          title
          slug
          excerpt
          date
          coverImage {
            url
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
    }

  `,
    { preview }
  )
  return data?.allPosts
}

export async function getPostAndMorePosts(id, draftKey) {
  const data = await fetchAPI(
    `
      query Query($id: String, $draftKey: String) {
        postByID(id: $id, draftKey: $draftKey){
            id
            title
            slug
            excerpt
            date
            content
            coverImage {
              url
            }
            author {
              name
              picture {
                url
              }
            }
          
        }
        morePosts: allPosts(id: $id) {
          contents {
            title
            slug
            excerpt
            id
            date
            coverImage {
              url
            }
            author {
              name
              picture {
                url
              }
            }
          }
        }
      }
    
  `,
    {
      variables: {
        id,
        draftKey
      }
    }
  )
  return data
}