import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const blogsDir = path.join(process.cwd(), "data/blogs");
    const files = fs.readdirSync(blogsDir);

    // Find JSON with matching seo.slug
    const blogFile = files.find((file) => {
      const content = JSON.parse(fs.readFileSync(path.join(blogsDir, file), "utf-8"));
      return content.seo.slug === slug;
    });

    if (!blogFile) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    const content = JSON.parse(fs.readFileSync(path.join(blogsDir, blogFile), "utf-8"));
    return new Response(JSON.stringify(content), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to load blog" }), { status: 500 });
  }
}
