import { Router } from 'express'

import * as db from '../db/kanji.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const kanji = await db.getAllKanji

    res.json(kanji)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
