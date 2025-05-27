import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertConsultationSchema } from "@shared/schema";
import * as bcrypt from "bcryptjs";
import session from "express-session";
import MemoryStore from "memorystore";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup session store
  const SessionStore = MemoryStore(session);

  app.use(
    session({
      secret: process.env.SESSION_SECRET || "academy-secret-key",
      resave: false,
      saveUninitialized: false,
      store: new SessionStore({
        checkPeriod: 86400000 // 24 hours
      }),
      cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      }
    })
  );

  // Setup passport for authentication
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await storage.getUserByUsername(username);
        if (!user) {
          return done(null, false, { message: "نام کاربری یا رمز عبور اشتباه است" });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          return done(null, false, { message: "نام کاربری یا رمز عبور اشتباه است" });
        }

        // Don't send password to client
        const { password: _password, ...userWithoutPassword } = user;
        return done(null, userWithoutPassword);
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      if (!user) {
        return done(null, false);
      }
      // Don't send password to client
      const { password: _password, ...userWithoutPassword } = user;
      done(null, userWithoutPassword);
    } catch (error) {
      done(error);
    }
  });

  // API Routes
  // Courses
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await storage.getCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "خطا در دریافت دوره‌ها" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const course = await storage.getCourse(id);
      
      if (!course) {
        return res.status(404).json({ message: "دوره مورد نظر یافت نشد" });
      }
      
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: "خطا در دریافت اطلاعات دوره" });
    }
  });

  // Authentication
  app.post("/api/auth/register", async (req, res) => {
    try {
      const result = insertUserSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "اطلاعات نامعتبر", 
          errors: result.error.format() 
        });
      }
      
      const existingUser = await storage.getUserByUsername(result.data.username);
      
      if (existingUser) {
        return res.status(409).json({ message: "این نام کاربری قبلاً ثبت شده است" });
      }
      
      const newUser = await storage.createUser(result.data);
      
      // Automatically log in the user after registration
      req.login(newUser, (err) => {
        if (err) {
          return res.status(500).json({ message: "خطا در ورود به سیستم" });
        }
        
        // Don't send password to client
        const { password: _password, ...userWithoutPassword } = newUser;
        return res.json(userWithoutPassword);
      });
    } catch (error) {
      res.status(500).json({ message: "خطا در ثبت نام" });
    }
  });

  app.post("/api/auth/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      
      if (!user) {
        return res.status(401).json({ message: info.message || "نام کاربری یا رمز عبور اشتباه است" });
      }
      
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        
        return res.json(user);
      });
    })(req, res, next);
  });

  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "خطا در خروج از سیستم" });
      }
      
      res.json({ message: "با موفقیت خارج شدید" });
    });
  });

  app.get("/api/auth/user", (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "لطفا وارد حساب کاربری خود شوید" });
    }
    
    res.json(req.user);
  });

  // Consultations
  app.post("/api/consultations", async (req, res) => {
    try {
      const result = insertConsultationSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "اطلاعات نامعتبر", 
          errors: result.error.format() 
        });
      }
      
      // Add user ID if authenticated
      let consultationData = result.data;
      if (req.isAuthenticated() && req.user) {
        consultationData = {
          ...consultationData,
          userId: (req.user as any).id
        };
      }
      
      const consultation = await storage.createConsultation(consultationData);
      
      res.status(201).json(consultation);
    } catch (error) {
      res.status(500).json({ message: "خطا در ثبت درخواست مشاوره" });
    }
  });

  // Articles
  app.get("/api/articles", async (req, res) => {
    try {
      const articles = await storage.getArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ message: "خطا در دریافت مقالات" });
    }
  });

  app.get("/api/articles/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const article = await storage.getArticle(id);
      
      if (!article) {
        return res.status(404).json({ message: "مقاله مورد نظر یافت نشد" });
      }
      
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: "خطا در دریافت اطلاعات مقاله" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
