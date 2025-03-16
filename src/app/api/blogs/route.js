import blogs from "@/data/blogs.json";

export async function GET() {
  return Response.json(blogs);
}
