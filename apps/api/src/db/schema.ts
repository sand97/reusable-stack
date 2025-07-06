import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";


export const usersTable = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  firstName: text().notNull(),
  lastName: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});
