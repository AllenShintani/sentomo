/*import Fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyPrismaClient from 'fastify-prisma-client'
import type { FastifyInstance } from 'fastify'
import fastifyJwt from '@fastify/jwt'
*/
import type { FastifyInstance } from 'fastify'
import Fastyfi, { fastify } from 'fastify'
import cors from '@fastify/cors'
import fastyfyPrismaClient from 'fastify-prisma-client'
import type { Prisma } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const fastify: FastifyInstance = Fastyfi()
fastify.register(fastyfyPrismaClient)
;async () => {
  await fastify.register(cors, {})
  fastify.post('/', (req, reply) => {
    const data = req.body
    console.log(data)
  })
  await fastify.listen({ port: 8080 })
  return { hello: 'world' }
}
async function main() {
  const includePosts = false
  let user: Prisma.UserCreateInput

  // Check if posts should be included in the query
  if (includePosts) {
    console.log('ifの方')
    user = {
      familly: 'aajfi',
      name: 'allen',
      password: 'aaa',
      mail: 'sa@psma.io',
    }
  } else {
    console.log('elifの方')
    user = {
      password: 'i',
      familly: 'a',
      mail: 'sa@psma.io',
      name: 'sa isma',
    }
  }

  // Pass 'user' object into query
  const createUser = await prisma.user.create({ data: user })
  console.log(createUser)
}

main()
  .then(async () => {
    console.log('okだよ')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log('これはエラーだよ')
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

/*安定
const prisma = new PrismaClient()
const fastify: FastifyInstance = Fastify()
fastify.register(fastifyPrismaClient)
;(async () => {
  await fastify.register(cors, {
    // put your options here
  })
  fastify.post('/data', (req, reply) => {
    const data = req.body
    console.log(data)
  })
  await fastify.listen({ port: 8080 })
  return { hello: 'world' }
})()

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
