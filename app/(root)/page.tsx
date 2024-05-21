"use client"
import { useConvexAuth } from "convex/react";

export default function Home() {
  const {isAuthenticated}= useConvexAuth()
  return null
}

