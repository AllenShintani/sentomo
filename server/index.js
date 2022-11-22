"use strict";
/*import Fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyPrismaClient from 'fastify-prisma-client'
import type { FastifyInstance } from 'fastify'
import fastifyJwt from '@fastify/jwt'
*/
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
        const includePosts = false;
        let user;
        // Check if posts should be included in the query
        if (includePosts) {
            console.log('ifの方');
            user = {
                familly: 'aajfi',
                name: 'allen',
                password: 'aaa',
                mail: 'sa@psma.io',
            };
        }
        else {
            console.log('elifの方');
            user = {
                password: 'i',
                familly: 'a',
                mail: 'sa@psma.io',
                name: 'sa isma',
            };
        }
        // Pass 'user' object into query
        const createUser = yield prisma.user.create({ data: user });
        console.log(createUser);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('okだよ');
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('これはエラーだよ');
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
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
