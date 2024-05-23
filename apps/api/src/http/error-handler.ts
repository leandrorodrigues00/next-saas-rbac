import type { FastifyInstance } from 'fastify'
import { ZodError } from 'zod'

import { BadRequestError } from './routes/_errors/bad-request-error'
import { UnauthorizedError } from './routes/_errors/unauthorized-error'

type fastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: fastifyErrorHandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    reply.status(400).send({
      message: 'Validation error',
      errors: error.flatten().fieldErrors,
    })
  }

  if (error instanceof BadRequestError) {
    reply.status(400).send({
      message: error.message,
    })
  }

  if (error instanceof UnauthorizedError) {
    reply.status(401).send({
      message: error.message,
    })
  }

  console.error(error)

  // TODO: send error to some observability platform

  return reply.status(500).send({
    message: 'Internal server error.',
  })
}
