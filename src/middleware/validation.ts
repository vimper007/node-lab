import { ZodError, ZodType, } from 'zod'
import { type Request, type Response, type NextFunction, query } from 'express'

export const validateBody = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = schema.parse(req.body)
      req.body = validatedData
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          error: 'Validation failed',
          details: error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        })
      }
      next(error)
    }
  }
}

export const validateParams = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.params)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          error: "Validation params failed",
          details: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message
          }))
        })
      }
      next(error)
    }
  }
}

export const ValdiateQuery = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.query)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          error: "Validation query failed",
          details: error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        })
      }
      next(error) 
    }
  }
}