import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from "cors"

import { schema } from './Schema'

const app = express();

app.use(cors())
app.use(express.json())

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))

export default app;