// Utils.js
import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    console.log("Not logged in! Redirecting...");
    throw redirect("/login"); // ✅ Correct way in a loader
  }

  return null; // ✅ Required if logged in
}
