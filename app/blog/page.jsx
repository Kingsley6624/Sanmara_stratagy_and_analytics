import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { IoPerson } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import PageHeader from "@/components/pageHeader";

export default async function BlogListPage() {
  // Read blogs directly from local JSON files
  const blogsDir = path.join(process.cwd(), "data/blogs");
  const files = fs.readdirSync(blogsDir);

  const blogs = files.map((file) => {
    const content = JSON.parse(
      fs.readFileSync(path.join(blogsDir, file), "utf-8")
    );
    return {
      slug: content.slug,
      title: content.title,
      description: content.meta_description,
      cover_image: content.cover_image,
      reading_time: content.reading_time,
      author: content.author,
      date: content.date,
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Our Insights"
        subtitle="Learn more about our mission and values"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((b) => (
            <Link
              key={b.slug}
              href={`/blog/${b.slug}`}
              className="block rounded-xl bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              {b.cover_image && (
                <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-xl">
                  <Image
                    src={b.cover_image}
                    alt={b.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                </div>
              )}

              <div className="p-4 flex flex-col justify-between">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                  {b.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                  {b.description}
                </p>

                <div className="flex flex-wrap gap-3 text-gray-400 text-xs sm:text-sm">
                  <div className="flex gap-1 items-center">
                    <IoPerson />
                    <span>{b.author}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <SlCalender />
                    <span>{b.date}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <MdOutlineAccessTime />
                    <span>{b.reading_time} read</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
