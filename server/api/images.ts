// server/api/images.ts
import fs from 'fs'
import path from 'path'

export default defineEventHandler(() => {
  const publicPath = path.join(process.cwd(), 'public', 'images', 'cb_academy')
  const files = fs.readdirSync(publicPath)
  return files.filter(file =>
    ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(
      path.extname(file).toLowerCase()
    )
  )
})
