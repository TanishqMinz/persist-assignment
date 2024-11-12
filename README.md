# Social Media Admin Dashboard

## Made by Tanishq Minz

A modern admin dashboard built with Next.js 13+ (App Router), Chart.js, and Tailwind CSS for managing data of a social media platform.

## 🚀 Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Styling:** Tailwind CSS
- **Charts:** Chart.js with react-chartjs-2
- **Data Fetching:** Native fetch API
- **Type Safety:** TypeScript

## Modified Files

### `app/layout.tsx`

The root layout component that wraps all pages. It includes:

- Common navigation
- Sidebar
- Meta tags and global styles

### `app/page.tsx`

The main dashboard page component that displays:

- User metrics
- Content metrics
- Engagement statistics
- Blockchain data
- Interactive charts

### `app/api/dashboard/route.ts`

API route handler that proxies requests to the backend API, avoiding CORS issues.

##  Getting Started

1. Clone the repository

```
git clone https://github.com/TanishqMinz/persist-assignment
```

3. Install dependencies:


```shellscript
 npm install --legacy-peer-deps
```

3. Create `.env.local` and add your environment variables:
```shellscript
NEXT_PUBLIC_API_URL=https://api.socialverseapp.com/admin
```

4. Run the development server:

```shellscript
 npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser
