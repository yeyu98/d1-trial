/*
 * @Author: yeyu98
 * @Date: 2025-03-24 22:08:34
 * @LastEditors: yeyu98
 * @LastEditTime: 2025-03-24 23:00:07
 * @Description:
 */
import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	out: './drizzle',
	schema: './db/schema.ts',
	dialect: 'sqlite',
	// driver: 'd1-http',
	dbCredentials: {
		url: './db/schema-v2.sql'
		// accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
		// databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
		// token: process.env.CLOUDFLARE_TOKEN!,
	},
})
