import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'user' })
})

router.get('/:id', (req, res) => {
    res.json({ message: 'get users' })
})

router.put('/:id', (req, res) => {
    res.json({ message: 'update a user' })
})

router.delete('/:id', (req, res) => {
    res.json({ message: 'user deleted' })
})

export default router 
