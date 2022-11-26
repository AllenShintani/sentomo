/*import Fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyPrismaClient from 'fastify-prisma-client'
import type { FastifyInstance } from 'fastify'
import fastifyJwt from '@fastify/jwt'
*/
/*const prisma = new PrismaClient()
const fastify: FastifyInstance = Fastyfi()
fastify.register(fastyfyPrismaClient)*/
//import fastifyPrismaClient from 'fastify-prisma-client'
//import type { Prisma } from '@prisma/client'

import type { FastifyInstance } from 'fastify'
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const fastify: FastifyInstance = Fastify()

async function kusa() {
  ;(async () => {
    await fastify.register(cors, {
      // put your options here
    })
    fastify.post('/data', (req, reply) => {
      const data = req.body as {
        mail: string
        password: string
        name: string
        familly: string
      }
      console.log(data.mail)
      const fmail: string = data.mail
      const fpassword: string = data.password
      const fname: string = data.name
      const ffamilly: string = data.familly
      console.log(data.password)
      return main(fmail, fpassword, fname, ffamilly)
    })

    await fastify.listen({ port: 8080 })
    console.log(`Server listening at ${8080}`)
  })()

  //return main()
}

async function main(
  fmail: string,
  fpassword: string,
  fname: string,
  ffamilly: string
) {
  console.log('server if')
  const result = await prisma.user.create({
    data: {
      mail: fmail,
      name: fname,
      password: fpassword,
      familly: ffamilly,
    },
  })
  console.log(result)
}

kusa()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())

/*----------------------------------------------------------------------------この下のコードでnpm run build => npm run start でdb 追加行ける！ commit mはdb追加理解



import type { FastifyInstance } from 'fastify'
import Fastify, { fastify as fa } from 'fastify'
import cors from '@fastify/cors'
import fastifyPrismaClient from 'fastify-prisma-client'
import type { Prisma } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('server if')

  const result = await prisma.user.create({
    data: {
      mail: 'd;lkfj',
      name: ';ajlkfds',
      password: 'ewmmlkvs',
      familly: 'a',
    },
  })
  console.log(result)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())


/*---------------------------------------------------------------------------ここまで！！


/* この下は実験中


import { PrismaClient } from '@prisma/client'
import type { FastifyInstance } from 'fastify'
import Fastify, { fastify as fa } from 'fastify'
import cors from '@fastify/cors'
import fastifyPrismaClient from 'fastify-prisma-client'

const prisma = new PrismaClient()
const fastify: FastifyInstance = Fastify()
fastify.register(fastifyPrismaClient)

async function main() {
  await fastify.register(cors, {
    // put your options here
  })
  fastify.post('/data', (req, reply) => {
    const data = req.body as { mail: string; password: string }
    console.log(data.mail)
    const mail = data.mail
    console.log(data.password)
    const password = data.password
    return resive(mail, password)
  })
  await fastify.listen({ port: 8080 })
  console.log(`Server listening at ${8080}`)
}

async function resive(userMail: string, user: string) {
  ;async () => {
    const result = await prisma.user.create({
      data: {
        mail: userMail,
        name: 'E risma',
        password: user,
        familly: 'oaajf',
      },
    })
    console.log(result)
  }
}

main()
  .catch((e) => {
    console.error(e)
    console.log('既に使われているパスワード、もしくはメールアドレスです')
  })
  .finally(async () => {
    console.log('ここ動いてる？')
    await prisma.$disconnect()
  })

------------------------------------------------------------------ここまで実験中！！
  /*

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
----------------------------------------------------------------------------------------ここまで

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
