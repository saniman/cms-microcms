import { getPreviewPostByID } from '@/lib/api'

export default async function preview(req, res) {
  
  // Fetch the headless CMS to check if the provided `id` exists
  const post = await getPreviewPostByID(req.query.id,req.query.draftKey)
  console.log(post)
  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: 'Invalid '+ req.query.id})
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    draftKey: req.query.draftKey
  })

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/posts/${post.id}` })
  res.end()
}
