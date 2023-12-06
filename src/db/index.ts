import * as schema from './schema'
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
	uri: process.env.DATABASE_URL,
})

const db = drizzle(connection, { schema, mode: 'planetscale' })
export { db }