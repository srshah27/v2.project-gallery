import {
	mysqlTable,
	mysqlSchema,
	AnyMySqlColumn,
	primaryKey,
	unique,
	varchar,
	int,
	index,
	datetime,
} from 'drizzle-orm/mysql-core'
import { sql } from 'drizzle-orm'

export const test = mysqlTable(
	'test',
	{
		id: int('id').notNull(),
		name: varchar('name', { length: 30 }),
	},
	(table) => {
		return {
			testIdPk: primaryKey({ columns: [table.id], name: 'test_id_pk' }),
		}
	}
)
