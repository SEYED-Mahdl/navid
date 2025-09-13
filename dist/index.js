// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import * as bcrypt from "bcryptjs";
var MemStorage = class {
  users;
  courses;
  consultations;
  articles;
  userCurrentId;
  courseCurrentId;
  consultationCurrentId;
  articleCurrentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.courses = /* @__PURE__ */ new Map();
    this.consultations = /* @__PURE__ */ new Map();
    this.articles = /* @__PURE__ */ new Map();
    this.userCurrentId = 1;
    this.courseCurrentId = 1;
    this.consultationCurrentId = 1;
    this.articleCurrentId = 1;
    this.seedCourses();
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    const id = this.userCurrentId++;
    const user = { ...insertUser, id, password: hashedPassword };
    this.users.set(id, user);
    return user;
  }
  // Course methods
  async getCourses() {
    return Array.from(this.courses.values());
  }
  async getCourse(id) {
    return this.courses.get(id);
  }
  async createCourse(insertCourse) {
    const id = this.courseCurrentId++;
    const course = { ...insertCourse, id };
    this.courses.set(id, course);
    return course;
  }
  // Consultation methods
  async getConsultations() {
    return Array.from(this.consultations.values());
  }
  async getConsultation(id) {
    return this.consultations.get(id);
  }
  async createConsultation(insertConsultation) {
    const id = this.consultationCurrentId++;
    const now = /* @__PURE__ */ new Date();
    const consultation = {
      ...insertConsultation,
      id,
      createdAt: now,
      status: "pending"
    };
    this.consultations.set(id, consultation);
    return consultation;
  }
  // Articles methods
  async getArticles() {
    return Array.from(this.articles.values());
  }
  async getArticle(id) {
    return this.articles.get(id);
  }
  async createArticle(insertArticle) {
    const id = this.articleCurrentId++;
    const now = /* @__PURE__ */ new Date();
    const article = { ...insertArticle, id, createdAt: now };
    this.articles.set(id, article);
    return article;
  }
  // Seed some initial data
  seedCourses() {
    const courses2 = [
      {
        title: "\u0627\u0635\u0648\u0644 \u067E\u0627\u06CC\u0647 \u062D\u0631\u06A9\u0627\u062A \u0627\u0635\u0644\u0627\u062D\u06CC",
        description: "\u062F\u0631 \u0627\u06CC\u0646 \u062F\u0648\u0631\u0647 \u0628\u0627 \u0627\u0635\u0648\u0644 \u067E\u0627\u06CC\u0647 \u062D\u0631\u06A9\u0627\u062A \u0627\u0635\u0644\u0627\u062D\u06CC \u0622\u0634\u0646\u0627 \u0645\u06CC\u200C\u0634\u0648\u06CC\u062F",
        instructor: "\u062F\u06A9\u062A\u0631 \u0646\u0648\u06CC\u062F \u06A9\u0644\u0627\u0646\u06CC",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
        duration: 76,
        sessions: 15,
        rating: 45,
        ratingCount: 611
      },
      {
        title: "\u0622\u0633\u06CC\u0628 \u0634\u0646\u0627\u0633\u06CC \u062D\u0631\u06A9\u062A\u06CC \u067E\u06CC\u0634\u0631\u0641\u062A\u0647",
        description: "\u062A\u062D\u0644\u06CC\u0644 \u0648 \u0628\u0631\u0631\u0633\u06CC \u0622\u0633\u06CC\u0628\u200C\u0647\u0627\u06CC \u062D\u0631\u06A9\u062A\u06CC \u0645\u062A\u062F\u0627\u0648\u0644 \u0648 \u0631\u0627\u0647\u06A9\u0627\u0631\u0647\u0627\u06CC \u0631\u0641\u0639 \u0622\u0646\u200C\u0647\u0627",
        instructor: "\u062F\u06A9\u062A\u0631 \u0646\u0648\u06CC\u062F \u06A9\u0644\u0627\u0646\u06CC",
        imageUrl: "https://images.unsplash.com/photo-1594824891321-e93ff7ac3c87",
        duration: 82,
        sessions: 18,
        rating: 47,
        ratingCount: 523
      },
      {
        title: "\u0627\u0635\u0644\u0627\u062D \u0646\u0627\u0647\u0646\u062C\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u0627\u0633\u06A9\u0644\u062A\u06CC",
        description: "\u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u062A\u0634\u062E\u06CC\u0635 \u0648 \u0627\u0635\u0644\u0627\u062D \u0646\u0627\u0647\u0646\u062C\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u0627\u0633\u06A9\u0644\u062A\u06CC \u0634\u0627\u06CC\u0639",
        instructor: "\u062F\u06A9\u062A\u0631 \u0646\u0648\u06CC\u062F \u06A9\u0644\u0627\u0646\u06CC",
        imageUrl: "https://images.unsplash.com/photo-1549476464-37392f717541",
        duration: 64,
        sessions: 12,
        rating: 48,
        ratingCount: 489
      },
      {
        title: "\u062A\u0648\u0627\u0646\u0628\u062E\u0634\u06CC \u0622\u0633\u06CC\u0628\u200C\u0647\u0627\u06CC \u0648\u0631\u0632\u0634\u06CC",
        description: "\u067E\u0631\u0648\u062A\u06A9\u0644\u200C\u0647\u0627\u06CC \u062A\u0648\u0627\u0646\u0628\u062E\u0634\u06CC \u0628\u0631\u0627\u06CC \u0622\u0633\u06CC\u0628\u200C\u0647\u0627\u06CC \u0645\u062A\u062F\u0627\u0648\u0644 \u0648\u0631\u0632\u0634\u06CC",
        instructor: "\u062F\u06A9\u062A\u0631 \u0646\u0648\u06CC\u062F \u06A9\u0644\u0627\u0646\u06CC",
        imageUrl: "https://images.unsplash.com/photo-1506629905607-acd26ded7eb7",
        duration: 58,
        sessions: 10,
        rating: 46,
        ratingCount: 367
      }
    ];
    courses2.forEach((course) => {
      this.createCourse(course);
    });
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email"),
  phone: text("phone"),
  nationalId: text("national_id"),
  isAdmin: boolean("is_admin").default(false)
});
var insertUserSchema = createInsertSchema(users).omit({
  id: true
});
var courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  instructor: text("instructor").notNull(),
  imageUrl: text("image_url").notNull(),
  duration: integer("duration").notNull(),
  // in minutes
  sessions: integer("sessions").notNull(),
  rating: integer("rating").notNull().default(0),
  ratingCount: integer("rating_count").notNull().default(0)
});
var insertCourseSchema = createInsertSchema(courses).omit({
  id: true
});
var consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  fullName: text("full_name").notNull(),
  age: text("age"),
  phone: text("phone").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  status: text("status").notNull().default("pending")
});
var insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  createdAt: true,
  status: true
});
var articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  author: text("author").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  category: text("category").notNull()
});
var insertArticleSchema = createInsertSchema(articles).omit({
  id: true,
  createdAt: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/courses", async (req, res) => {
    try {
      const courses2 = await storage.getCourses();
      res.json(courses2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });
  app2.get("/api/courses/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const course = await storage.getCourse(id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch course" });
    }
  });
  app2.post("/api/courses", async (req, res) => {
    try {
      const validatedData = insertCourseSchema.parse(req.body);
      const course = await storage.createCourse(validatedData);
      res.status(201).json(course);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create course" });
      }
    }
  });
  app2.get("/api/articles", async (req, res) => {
    try {
      const articles2 = await storage.getArticles();
      res.json(articles2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch articles" });
    }
  });
  app2.get("/api/articles/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const article = await storage.getArticle(id);
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch article" });
    }
  });
  app2.post("/api/articles", async (req, res) => {
    try {
      const validatedData = insertArticleSchema.parse(req.body);
      const article = await storage.createArticle(validatedData);
      res.status(201).json(article);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create article" });
      }
    }
  });
  app2.get("/api/consultations", async (req, res) => {
    try {
      const consultations2 = await storage.getConsultations();
      res.json(consultations2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch consultations" });
    }
  });
  app2.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      res.status(201).json(consultation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create consultation request" });
      }
    }
  });
  app2.post("/api/register", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      const existingUser = await storage.getUserByUsername(validatedData.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }
      const user = await storage.createUser(validatedData);
      res.status(201).json({ message: "User registered successfully", userId: user.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to register user" });
      }
    }
  });
  app2.post("/api/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      res.json({
        message: "Login successful",
        user: {
          id: user.id,
          username: user.username,
          fullName: user.fullName,
          isAdmin: user.isAdmin
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to login" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  app.listen(5e3, () => {
    console.log("Server is running on port 5000");
  });
})();
