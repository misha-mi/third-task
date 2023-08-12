import axios from "axios";

export async function POST(req: Request) {
  const body = await req.json();

  const res = await axios.post("https://internship.purrweb.site/api/users/sign-up", body)

  return res;
}