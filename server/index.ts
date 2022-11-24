/*import Fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyPrismaClient from 'fastify-prisma-client'
import type { FastifyInstance } from 'fastify'
import fastifyJwt from '@fastify/jwt'
*/
/*const prisma = new PrismaClient()
const fastify: FastifyInstance = Fastyfi()
fastify.register(fastyfyPrismaClient)*/
import type { Prisma } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  console.log('server if')

  const result = await prisma.user.create({
    data: {
      mail: 'elsa@prisma.io',
      name: 'Elsa Prisma',
      password: 'jdfksa',
      familly: 'aofoaajf',
    },
  })
  console.log(result)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())

/*
連想配列としてばらばらに取り出すことに成功！！！
----------------------------------------------------------------------------



import type { FastifyInstance } from 'fastify'
import Fastify, { fastify as fa } from 'fastify'
import cors from '@fastify/cors'
import type Prisma from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import fastifyPrismaClient from 'fastify-prisma-client'

const prisma = new PrismaClient()
const fastify: FastifyInstance = Fastify()
fastify.register(fastifyPrismaClient)
;(async () => {
  await fastify.register(cors, {
    // put your options here
  })
  fastify.post('/data', (req, reply) => {
    const data = req.body as { mail: string; password: string }
    console.log(data.mail)
    console.log(data.password)
  })

  await fastify.listen({ port: 8080 })
  console.log(`Server listening at ${8080}`)
  return { hello: 'world' }
})()
*/

//get やり方
/*import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.get('/', async (request, reply) => {
  return { hello: 'world' }
})

server.get('/users', async (request, reply) => {
  return JSON.stringify({ hello: 'users' })
})
server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
*/
