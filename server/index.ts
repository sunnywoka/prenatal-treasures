import server from './server.ts'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})
