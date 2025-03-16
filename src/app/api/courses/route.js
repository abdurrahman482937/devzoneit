import courses from "@/data/courses.json";

export async function GET() {
  return Response.json(courses);
}
