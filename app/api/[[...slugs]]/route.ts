// app/api/[[...slugs]]/route.ts
import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { getData } from '@/app/controller/getDetail'

const app = new Elysia({ prefix: '/api' })
    .use(swagger())
    .get('/', () => {
        return getData()
    })
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export const GET = app.handle 
export const POST = app.handle 