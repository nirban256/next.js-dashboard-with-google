// This is the main page of the application
// It displays a sign-in button if the user is not authenticated
// If the user is authenticated, it displays a greeting message and a sign-out button

"use client"

import { signIn, useSession } from "next-auth/react"
import DashboardPage from "./dashboard/page"
import Navbar from "@/components/Navbar"
import Loading from "./loading"

const Home = () => {
  const { data: session, status } = useSession()

  if (status === "loading") return <div className="text-center p-8"><Loading /></div> // This loading state is displayed while the session is being fetched

  return (
    <main>
      {session ? (
        <>
          <Navbar />
          <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold text-white">Hello, {session.user?.name}</h1>

            <DashboardPage /> {/* This component is displayed when the user is authenticated */}
          </div>
        </>
      ) : (
        <button
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          onClick={() => signIn("google")}>
          Sign In with Google
        </button>
      )}
    </main>
  )
}

export default Home;