export default async function handler(req, res) {
  if (req.headers['authorization'] === process.env.AUTHORIZATION) {
    await res.unstable_revalidate('/')
    return res.json({ revalidate: true })
  }

  return res.status(401).end()
}
