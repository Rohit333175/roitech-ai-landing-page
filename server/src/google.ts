// src/google.ts
import fs from "fs"
import path from "path"
import { google } from "googleapis"
import dotenv from "dotenv"
dotenv.config()

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI,
} = process.env

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI) {
  throw new Error("Missing Google OAuth env vars.")
}

const TOKEN_PATH = path.join(process.cwd(), "tokens.json")

export function getOAuth2Client() {
  const oauth2 = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI
  )

  // Load saved tokens (dev-friendly)
  if (fs.existsSync(TOKEN_PATH)) {
    const tokens = JSON.parse(fs.readFileSync(TOKEN_PATH, "utf8"))
    oauth2.setCredentials(tokens)
  }
  return oauth2
}

export function getAuthUrl() {
  const oauth2 = getOAuth2Client()
  return oauth2.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: ["https://www.googleapis.com/auth/calendar.readonly"],
  })
}

export async function exchangeCodeForTokens(code: string) {
  const oauth2 = getOAuth2Client()
  const { tokens } = await oauth2.getToken(code)
  // Save for reuse
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2))
  oauth2.setCredentials(tokens)
  return oauth2
}
