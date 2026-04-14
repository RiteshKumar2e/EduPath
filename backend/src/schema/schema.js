import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// Users table
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").default("student"),
  createdAt: integer("created_at").default(Date.now()),
});

// Student Profiles
export const studentProfiles = sqliteTable("student_profiles", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => users.id),
  targetCountry: text("target_country"),
  targetCourse: text("target_course"),
  budget: real("budget"),
  cgpa: real("cgpa"),
  workExp: integer("work_exp"),
  profileCompletion: integer("profile_completion").default(0),
});

// Academic Records
export const academicRecords = sqliteTable("academic_records", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => users.id),
  degree: text("degree"),
  institution: text("institution"),
  percentage: real("percentage"),
  passingYear: integer("passing_year"),
});

// Loan Eligibility Checks
export const loanEligibility = sqliteTable("loan_eligibility", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => users.id),
  score: real("score"),
  eligibleAmount: real("eligible_amount"),
  confidenceScore: real("confidence_score"),
  explanation: text("explanation"),
  createdAt: integer("created_at").default(Date.now()),
});

// Loan Offers
export const loanOffers = sqliteTable("loan_offers", {
  id: text("id").primaryKey(),
  bankName: text("bank_name"),
  interestRate: real("interest_rate"),
  tenure: integer("tenure"),
  processingFee: real("processing_fee"),
  coverage: text("coverage"),
});

// Uploaded Documents
export const documents = sqliteTable("documents", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => users.id),
  fileName: text("file_name"),
  fileType: text("file_type"),
  status: text("status").default("pending"), // pending, uploaded, under_review, verified
  fileUrl: text("file_url"),
  createdAt: integer("created_at").default(Date.now()),
});

// Activity Logs
export const activityLogs = sqliteTable("activity_logs", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => users.id),
  action: text("action"),
  details: text("details"),
  createdAt: integer("created_at").default(Date.now()),
});
