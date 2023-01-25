import { getSortedPostsData } from '../../lib/posts'

export async function getData(req, res) {
  const allPostsData = await getSortedPostsData()
  return res.status(200).json({ allPostsData })
}
