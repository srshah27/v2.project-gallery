import type { Config } from 'drizzle-kit'
import { loadEnvConfig } from '@next/env'
import { cwd } from 'node:process'

loadEnvConfig(cwd())

export default {
	schema: './src/db/schema.ts',
	out: './drizzle',
	driver: 'mysql2',
	dbCredentials: {
		uri: process.env.DATABASE_URL as string,
	},
} satisfies Config
