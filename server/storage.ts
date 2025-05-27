import {
  users, courses, consultations, articles,
  type User, type InsertUser,
  type Course, type InsertCourse,
  type Consultation, type InsertConsultation,
  type Article, type InsertArticle
} from "@shared/schema";
import * as bcrypt from "bcryptjs";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Course methods
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  // Consultation methods
  getConsultations(): Promise<Consultation[]>;
  getConsultation(id: number): Promise<Consultation | undefined>;
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  
  // Articles methods
  getArticles(): Promise<Article[]>;
  getArticle(id: number): Promise<Article | undefined>;
  createArticle(article: InsertArticle): Promise<Article>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private courses: Map<number, Course>;
  private consultations: Map<number, Consultation>;
  private articles: Map<number, Article>;
  
  private userCurrentId: number;
  private courseCurrentId: number;
  private consultationCurrentId: number;
  private articleCurrentId: number;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.consultations = new Map();
    this.articles = new Map();
    
    this.userCurrentId = 1;
    this.courseCurrentId = 1;
    this.consultationCurrentId = 1;
    this.articleCurrentId = 1;
    
    // Add some initial courses
    this.seedCourses();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id, password: hashedPassword };
    this.users.set(id, user);
    return user;
  }

  // Course methods
  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = this.courseCurrentId++;
    const course: Course = { ...insertCourse, id };
    this.courses.set(id, course);
    return course;
  }

  // Consultation methods
  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values());
  }

  async getConsultation(id: number): Promise<Consultation | undefined> {
    return this.consultations.get(id);
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = this.consultationCurrentId++;
    const now = new Date();
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      createdAt: now,
      status: "pending"
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  // Articles methods
  async getArticles(): Promise<Article[]> {
    return Array.from(this.articles.values());
  }

  async getArticle(id: number): Promise<Article | undefined> {
    return this.articles.get(id);
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.articleCurrentId++;
    const now = new Date();
    const article: Article = { ...insertArticle, id, createdAt: now };
    this.articles.set(id, article);
    return article;
  }

  // Seed some initial data
  private seedCourses() {
    const courses: InsertCourse[] = [
      {
        title: "اصول پایه حرکات اصلاحی",
        description: "در این دوره با اصول پایه حرکات اصلاحی آشنا می‌شوید",
        instructor: "دکتر نوید کلانی",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
        duration: 76,
        sessions: 15,
        rating: 45,
        ratingCount: 611
      },
      {
        title: "آسیب شناسی حرکتی پیشرفته",
        description: "تحلیل و بررسی آسیب‌های حرکتی متداول و راهکارهای رفع آن‌ها",
        instructor: "دکتر نوید کلانی",
        imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2",
        duration: 82,
        sessions: 18, 
        rating: 47,
        ratingCount: 523
      },
      {
        title: "اصلاح ناهنجاری‌های اسکلتی",
        description: "روش‌های تشخیص و اصلاح ناهنجاری‌های اسکلتی شایع",
        instructor: "دکتر نوید کلانی",
        imageUrl: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f",
        duration: 64,
        sessions: 12,
        rating: 48,
        ratingCount: 489
      },
      {
        title: "توانبخشی آسیب‌های ورزشی",
        description: "پروتکل‌های توانبخشی برای آسیب‌های متداول ورزشی",
        instructor: "دکتر نوید کلانی",
        imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
        duration: 58,
        sessions: 10,
        rating: 46,
        ratingCount: 367
      }
    ];

    courses.forEach(course => {
      this.createCourse(course);
    });
  }
}

export const storage = new MemStorage();
