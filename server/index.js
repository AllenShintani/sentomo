"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('server if');
        const result = yield prisma.user.create({
            data: {
                mail: 'elsa@prisma.io',
                name: 'Elsa Prisma',
                password: 'jdfksa',
                familly: 'aofoaajf',
            },
        });
        console.log(result);
    });
}
main()
    .catch((e) => console.error(e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () { return yield prisma.$disconnect(); }));
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
