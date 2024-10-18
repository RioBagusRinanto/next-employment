// app/api/[[...slugs]]/route.ts
import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { getData, postData } from '@/app/controller/getDetail'

const app = new Elysia({ prefix: '/api' })
    .use(swagger())
    .get('/', () => {
        return getData()
    })
    .post('/', ({ body }) => {
        return postData(body)
    })

export const GET = app.handle 
export const POST = app.handle 