import { Router } from 'express'

const router = Router()

// Routes
router.post('/auth', (req, res) => {
  res.json({ message: 'auth' })
})

router.post('/login', (req, res) => {
    res.status(201).json({ message: 'user logged in' })
})

export default router 
