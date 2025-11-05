import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const blogsDir = path.join(process.cwd(), "data/blogs");
    const files = fs.readdirSync(blogsDir);

    const blogs = files.map((file) => {
      const filePath = path.join(blogsDir, file);
      const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      return {
        title: content.title,
        description: content.meta_description,
        slug: content.seo?.slug,
        reading_time: content.seo?.reading_time,
        cover_image: content.cover_image || content.sections?.[0]?.image || null,
      };
    });

    return Response.json(blogs);
  } catch (error) {
    console.error("Error loading blogs:", error);
    return new Response(JSON.stringify({ error: "Failed to load blogs" }), {
      status: 500,
    });
  }
}
