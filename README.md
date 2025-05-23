# Google OAuth Protected Dashboard with Next.js & NextAuth.js

### Author: Nirban Chakraborty

## 🧾 Overview

This project is a secure dashboard application built using **Next.js App Router**, **NextAuth.js**, and **Tailwind CSS**. It implements Google OAuth authentication, protecting specific routes like `/dashboard` to ensure that only authenticated users can access them.

The app includes:
- Google-based user authentication
- Middleware for route protection
- A loading spinner styled with Tailwind CSS
- Support for mobile responsiveness

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
Create a .env.local file in the root of the project and add the following:

```
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
```
> **Note:** Make sure to never commit your `.env.local` file to version control.

You can generate a secure NEXTAUTH_SECRET using:
```
openssl rand -base64 32
```
> **Note:** On windows use bash terminal or WSL (if present)


### 4. Run the Development Server
```
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 to get started.

## 🔐 Route Protection

Routes under /dashboard are protected using middleware. Unauthorized users will be redirected to the sign-in page.

## 💡 Assumptions & Challenges

- Assumes that users will authenticate only via Google OAuth.
- Challenges:
   - One of the main challenges was protecting certain pages so that only logged-in users could access them. It is done using middleware and checking user sessions through cookies.
   - Setting up authentication with NextAuth using the new App Router in Next.js also required special attention to how routes and settings were organized.
   - Another challenge was adding features to sort and filter data on the dashboard in a clear and useful way.

## 📦 Third-Party Libraries Used

Beyond next, next-auth, and tailwindcss, the following were used:

- Lucide-react (optional): For icons in UI components
- dotenv: For managing environment variables (built-in support with Next.js)
- OpenSSL (CLI): For generating secure secrets (local use only)

## 🧪 Testing
Visit /dashboard without signing in — you will be redirected to /.
Once signed in with Google, you'll have access to the dashboard.

## 📁 Project Structure

```
/app
  /api/auth/[...nextauth] – API route for authentication
  /dashboard – Protected page
/lib/authOptions.ts – Centralized NextAuth config
/middleware.ts – Route protection logic
.env.local – Environment variables (not committed)
```

<p align="center">Thank you for checking out my work. Have a nice day! </p>
