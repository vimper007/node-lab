import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.json({ message: 'habits' })
})

router.get('/:id', (req, res) => {
    res.json({ message: 'get a habit' })
})

router.post('/', (req, res) => {
    res.status(201).json({ message: 'habits created' })
})

router.delete('/:id', (req, res) => {
    res.status(204).json({ message: 'delete habit' })
})

export default router