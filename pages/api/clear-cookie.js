export default function ClearCookie(req, res) {
  res.clearPreviewData()
  res.writeHead(307, { Location: '/' })
  res.end('Preview mode disabled')
}
