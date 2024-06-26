import { Request } from "./utils/request";

const GITHUB_API_URL = process.env.NEXT_PUBLIC_GITHUB_API_URL;
const GITHUB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

if (!GITHUB_API_URL || !GITHUB_ACCESS_TOKEN) {
  throw new Error("Missing GitHub API URL or Access Token");
}

export const fetchGithub = Request.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${GITHUB_ACCESS_TOKEN}`,
  },
});
