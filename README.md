# The Wild Oasis 🏕️

A comprehensive hotel management system built with modern React and real-time backend services. The Wild Oasis allows staff to manage cabins, bookings, guest check-ins/check-outs, and provides an admin dashboard with analytics and statistics.

## 🌐 Live Demo

**Visit the live application**: [https://the-wild-oasis-sk.vercel.app/](https://the-wild-oasis-sk.vercel.app/)

> Login with your credentials or create a new account to explore all features.

## 📋 Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Key Features Explained](#key-features-explained)
- [Troubleshooting](#troubleshooting)
- [Security Notes](#security-notes)

## ✨ Features

### Authentication & User Management

- **User Authentication**: Secure login and signup with email verification
- **Password Management**: Update password and personal user information
- **User Roles**: Admin and staff roles with different permissions
- **Account Management**: View and manage personal account settings

### Cabin Management

- **Cabin CRUD Operations**: Create, read, update, and delete cabin listings
- **Cabin Details**: Manage cabin capacity, price, discount, and descriptions
- **Image Upload**: Upload and manage cabin images
- **Filtering & Sorting**: Filter cabins by price range and other criteria

### Booking Management

- **Booking Dashboard**: View all bookings with status tracking
- **Booking Details**: View complete booking information and guest details
- **Check-in/Check-out**: Process guest check-ins and check-outs
- **Booking Confirmation**: Automatic confirmation workflow
- **Status Tracking**: Track booking status (unconfirmed, checked-in, checked-out)

### Dashboard & Analytics

- **Overview Statistics**: Key metrics at a glance
- **Revenue Chart**: Visual representation of revenue trends
- **Occupancy Rate**: Track cabin occupancy
- **Guest Statistics**: Monitor guest arrivals and departures
- **Date Range Filtering**: Filter data by custom date ranges

### Additional Features

- **Dark Mode**: Toggle between light and dark themes
- **Error Boundary**: Graceful error handling
- **Real-time Updates**: Live data synchronization via Supabase
- **Responsive Design**: Mobile-friendly interface
- **Toast Notifications**: User feedback for actions

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router v7** - Navigation and routing
- **React Hook Form** - Form state management
- **React Hot Toast** - Toast notifications
- **TanStack React Query (v5)** - Data fetching and caching
- **Styled Components** - CSS-in-JS styling
- **React Icons** - Icon library
- **Recharts** - Data visualization

### Backend & Database

- **Supabase** - Backend as a Service (PostgreSQL, Auth, Real-time)
- **Supabase JS Client** - Supabase SDK for JavaScript

### Development Tools

- **ESLint** - Code linting
- **React Error Boundary** - Error handling
- **React Query DevTools** - Query debugging

## 📁 Project Structure

```
the-wild-oasis/
├── src/
│   ├── features/              # Feature modules
│   │   ├── authentication/    # Login, signup, user management
│   │   ├── bookings/          # Booking management
│   │   ├── cabins/            # Cabin management
│   │   ├── check-in-out/      # Check-in/check-out logic
│   │   ├── dashboard/         # Dashboard & analytics
│   │   └── settings/          # Application settings
│   ├── ui/                    # Reusable UI components
│   ├── pages/                 # Page components (routes)
│   ├── services/              # API calls (Supabase)
│   ├── hooks/                 # Custom React hooks
│   ├── context/               # Context API (Dark mode)
│   ├── utils/                 # Utility functions
│   ├── styles/                # Global styles
│   ├── data/                  # Sample data & uploader
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
├── public/                    # Static assets
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🚀 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Clone the Repository

```bash
git clone https://github.com/yourusername/the-wild-oasis.git
cd the-wild-oasis
```

### Install Dependencies

```bash
npm install
```

## 🔧 Setup

### 1. Create Supabase Project

1. Go to [Supabase](https://supabase.com)
2. Create a new project
3. Get your Supabase URL and Anon Key from project settings

### 2. Environment Variables

Create a `.env.local` file in the project root (this file is git-ignored for security):

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Important**: Never commit `.env.local` to version control. Environment variables should not be exposed.

### 3. Update Supabase Configuration

The supabase.js file is pre-configured to use environment variables:

```javascript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
```

### 4. Database Setup

Use the Supabase SQL editor to create the required tables and set up authentication:

- **users table** - User profiles with full names and avatars
- **cabins table** - Cabin listings with pricing and details
- **bookings table** - Booking records with status
- **guests table** - Guest information
- **settings table** - Application settings

Refer to the Supabase documentation or contact your backend team for the exact schema.

## 📖 Running the Application

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

```bash
npm run build
```

Generates optimized build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

Checks code for linting errors using ESLint.

## 🔐 Environment Variables

The application uses the following environment variables (create a `.env.local` file):

| Variable                 | Description                 | Example                       |
| ------------------------ | --------------------------- | ----------------------------- |
| `VITE_SUPABASE_URL`      | Your Supabase project URL   | `https://xxxx.supabase.co`    |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key | `eyJhbGciOiJIUzI1NiIsInR5...` |

**Security Best Practices:**

- Never commit `.env.local` to version control
- Add `.env.local` to `.gitignore`
- Keep your Supabase keys private
- Use different projects for development and production

## 📚 Key Features Explained

### Authentication Flow

1. User signs up with email and password
2. Supabase sends verification email
3. User logs in after email verification
4. JWT token stored in browser
5. Token used for authenticated API calls

### Booking Workflow

1. Admin creates or imports bookings
2. System tracks booking status (unconfirmed, checked-in, checked-out)
3. On check-in date, booking appears in "Today's Activity"
4. Staff marks guests as checked-in/checked-out
5. System updates booking status in real-time

### Dashboard Analytics

- Displays key metrics for the selected date range
- Shows revenue trends with interactive charts
- Tracks occupancy rate and upcoming bookings
- Real-time data updates via Supabase subscriptions

### Dark Mode

- Context API manages dark/light theme
- Preferences can be saved to localStorage
- Styled components theme support

## 🐛 Troubleshooting

### Issue: Duplicate Toast Messages on Account Creation

**Solution**: The application uses unique toast IDs to prevent duplicates during React's StrictMode double-renders in development.

### Issue: "Cannot find Supabase URL"

**Solution**: Ensure `.env.local` file exists with correct environment variables:

```
VITE_SUPABASE_URL=your_actual_url
VITE_SUPABASE_ANON_KEY=your_actual_key
```

### Issue: Authentication Not Working

**Possible Causes**:

- Supabase credentials are incorrect
- User not verified in Supabase
- JWT token expired (refresh token needed)

**Solution**: Check browser console for error messages and verify Supabase project credentials.

### Issue: Bookings Not Loading

**Possible Causes**:

- Network connection issue
- Supabase permissions misconfigured
- Query cache stale

**Solution**: Check network tab in DevTools, verify Supabase RLS policies, or clear React Query cache.

## 🔒 Security Notes

### ⚠️ Important: Exposed Credentials

If your Supabase URL or API keys were ever committed to version control or visible in public repositories:

1. **Immediately Rotate Your Keys**:
   - Go to your Supabase project dashboard
   - Navigate to Settings → API
   - Click the rotation icon next to your Anon Key and Service Role Key
   - Confirm the rotation

2. **Update Your Application**:
   - Regenerate new keys from Supabase
   - Update your `.env.local` file with the new keys
   - Redeploy your application

3. **Check Git History**:

   ```bash
   git log --all --source --full-history -- src/services/supabase.js
   git show <commit-hash>:src/services/supabase.js
   ```

4. **Remove from Git History** (if keys were committed):
   ```bash
   # Using BFG Repo-Cleaner (recommended)
   bfg --delete-files supabase.js
   bfg --replace-text passwords.txt
   git reflog expire --expire=now --all && git gc --prune=now --aggressive
   ```

### Best Practices Going Forward

- ✅ Always use `.env.local` for sensitive credentials
- ✅ Ensure `.env.local` is in `.gitignore`
- ✅ Review `.gitignore` before committing
- ✅ Use environment variable validation (already implemented in `supabase.js`)
- ✅ Enable Supabase RLS (Row Level Security) policies
- ✅ Rotate keys periodically
- ✅ Use different projects for dev/staging/production

### Current Status ✅

- `.env.local` is properly git-ignored (`*.local` in `.gitignore`)
- Supabase configuration uses environment variables
- No hardcoded credentials in source files
- `.env.example` provided as template

## 🤝 Contributing

When contributing to this project:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For issues and questions:

- Check existing GitHub issues
- Review the troubleshooting section above
- Contact the development team

---

**Last Updated**: April 2026  
**Status**: Active Development ✅
