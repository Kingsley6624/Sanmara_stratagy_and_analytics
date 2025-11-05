import Link from "next/link";
import Image from "next/image";

export default async function BlogListPage() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 mt-12 md:mt-24">
      <h1 className="text-3xl font-bold mb-8">Our Insights</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((b) => (
          <Link
            key={b.slug}
            href={`/blog/${b.slug}`}
            className="block rounded-xl  hover:shadow-lg transition duration-300 ease-in-out"
          >
            {b.cover_image && (
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg rounded-b-none mb-4 group">
                <Image
                  src={b.cover_image}
                  alt={b.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            )}
            <div className="p-4 mb-4">
              <h2 className="text-xl font-semibold mb-2">{b.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{b.description}</p>
              <p className="text-gray-400 text-xs">{b.reading_time} read</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
