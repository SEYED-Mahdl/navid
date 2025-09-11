# Overview

This is a full-stack web application for an Iranian fitness academy called "آکادمی دکتر نوید کلانی" (Dr. Navid Kolani Academy). The platform provides educational courses, consultation services, articles, and massage-related services focused on corrective exercises and sports injury rehabilitation. The application is built as a monorepo with a React frontend, Express.js backend, and PostgreSQL database using modern TypeScript tooling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 and TypeScript, using Vite as the build tool. The UI is constructed with Radix UI components and styled using Tailwind CSS with a custom dark theme. The application supports Persian (RTL) layout with Persian fonts (Vazirmatn) and includes Persian number formatting utilities. React Router via Wouter handles client-side routing, while TanStack Query manages server state and API interactions. Form handling is implemented with React Hook Form and Zod for validation.

## Backend Architecture
The server uses Express.js with TypeScript in ESM mode. The architecture follows a layered approach with separate route handlers, storage abstractions, and schema definitions. The backend implements session-based authentication using Passport.js with bcryptjs for password hashing. Currently uses in-memory storage but is designed to migrate to PostgreSQL through the storage interface pattern.

## Data Storage Solutions
The application uses Drizzle ORM with PostgreSQL as the target database, configured to work with Neon Database. Database schemas are defined in TypeScript with Zod validation schemas generated automatically. The current implementation includes a memory-based storage layer that can be swapped for database implementations without changing the API surface.

## Authentication and Authorization
Authentication is handled through Passport.js with local strategy using username/password combinations. Sessions are managed server-side with express-session. The system supports role-based access control with admin privileges for course and content management. Password security is implemented using bcryptjs hashing.

## API Structure
RESTful API endpoints are organized by resource type (courses, articles, consultations, users). The API follows consistent patterns for CRUD operations with proper HTTP status codes and error handling. Request validation uses Zod schemas shared between client and server to ensure type safety.

# External Dependencies

## UI Framework
- **Radix UI**: Headless UI components providing accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography

## State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library used across client and server

## Database and ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle Kit**: Migration and schema management tools

## Authentication
- **Passport.js**: Authentication middleware for Node.js
- **bcryptjs**: Password hashing library
- **express-session**: Session middleware for Express

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Plugins**: Development environment integration for hot reloading and error handling

## Specialized Libraries
- **Helmet**: SEO and meta tag management
- **date-fns**: Date manipulation utilities
- **class-variance-authority**: Utility for handling component variants
- **clsx/tailwind-merge**: Conditional className utilities