"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_2 = require("fastify");
const cors_1 = __importDefault(require("@fastify/cors"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const fastify = (0, fastify_1.default)();
const server = (0, fastify_2.fastify)();
function kusa() {
    return __awaiter(this, void 0, void 0, function* () {
        ;
        (() => __awaiter(this, void 0, void 0, function* () {
            yield fastify.register(cors_1.default, {
            // 送り返す！
            });
            fastify.post('/data', (req, reply) => {
                const data = req.body;
                console.log(data);
                const fmail = data.mail;
                const fpassword = data.password;
                const fname = data.name;
                const ffamilly = data.familly;
                console.log('postで受け取ることはできた');
                return main(fmail, fpassword, fname, ffamilly, data);
            });
            yield fastify.listen({ port: 8080 });
            console.log(`Server listening at ${8080}`);
        }))();
        //return main()
    });
}
function main(fmail, fpassword, fname, ffamilly, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma.user.create({
            data: {
                mail: fmail,
                name: fname,
                password: fpassword,
                familly: ffamilly,
            },
        });
        console.log(result);
        console.log('mainは回った');
        //return response()
    });
}
kusa()
    .catch((e) => console.error(e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('これでもう終わる！');
    yield prisma.$disconnect();
}));
//データベースに登録した情報をユーザーに常に定数として持たせる
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
//------------------------------------------------------------------get やり方
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
