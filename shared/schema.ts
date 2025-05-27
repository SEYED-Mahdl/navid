import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email"),
  phone: text("phone"),
  nationalId: text("national_id"),
  isAdmin: boolean("is_admin").default(false),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

// Courses table
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  instructor: text("instructor").notNull(),
  imageUrl: text("image_url").notNull(),
  duration: integer("duration").notNull(), // in minutes
  sessions: integer("sessions").notNull(),
  rating: integer("rating").notNull().default(0),
  ratingCount: integer("rating_count").notNull().default(0),
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
});

// Consultations table
export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  fullName: text("full_name").notNull(),
  age: text("age"),
  phone: text("phone").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  status: text("status").notNull().default("pending"),
});

export const insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  createdAt: true,
  status: true,
});

// Articles table
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  author: text("author").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  category: text("category").notNull(),
});

export const insertArticleSchema = createInsertSchema(articles).omit({
  id: true,
  createdAt: true,
});

// Type definitions
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Course = typeof courses.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;

export type Consultation = typeof consultations.$inferSelect;
export type InsertConsultation = z.infer<typeof insertConsultationSchema>;

export type Article = typeof articles.$inferSelect;
export type InsertArticle = z.infer<typeof insertArticleSchema>;
