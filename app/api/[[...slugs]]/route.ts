// app/api/[[...slugs]]/route.ts
import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia({ prefix: '/api' })
    .use(swagger())
    .get('/', () => 'hello Next')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export const GET = app.handle 
export const POST = app.handle 