/*
 * @Author: yeyu98
 * @Date: 2025-03-24 22:02:20
 * @LastEditors: yeyu98
 * @LastEditTime: 2025-03-24 22:06:25
 * @Description:
 */
import { int, text, sqliteTable } from 'drizzle-orm/sqlite-core'
export const useCustomersTable = sqliteTable("Customers", {
	CustomerId: int().primaryKey({autoIncrement: true}),
	CompanyName: text().notNull(),
	ContactName: text().notNull()
})