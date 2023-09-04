import { Router } from 'express'

import * as db from '../db/itemsDB.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const items = await db.getAllItems()

    res.json(items)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
