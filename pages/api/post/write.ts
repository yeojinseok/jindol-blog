import { format } from 'date-fns'
import { NextApiRequest, NextApiResponse } from 'next'
import { createPost } from '../../../lib/posts'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, title, content } = req.body

  console.log('?????')

  try {
    await createPost({
      id,
      title,
      date: format(new Date(), 'yyyy-MM-dd'),
      content,
    })
    res.status(200).json({ message: 'create success' })
  } catch (error) {
    res.status(500).json({ error: `create failed ${error}` })
  }
}
