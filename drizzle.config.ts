/*
 * @Author: yeyu98
 * @Date: 2025-03-24 22:08:34
 * @LastEditors: yeyu98
 * @LastEditTime: 2025-03-24 23:00:07
 * @Description:
 */
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	out: './drizzle',
	schema: './db/schema.ts',
	dialect: 'sqlite',
})
