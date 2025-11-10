"use server";

import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";


const BlogPage = async ({ params }) => {
  // Await params if it's a promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const blogsDir = path.join(process.cwd(), "data/blogs");
  const files = fs.readdirSync(blogsDir);

  const blogFile = files.find((file) => {
    const content = JSON.parse(fs.readFileSync(path.join(blogsDir, file), "utf-8"));
    return content.seo.slug === slug;
  });

  if (!blogFile) {
    return (
      <div className="mt-24 py-20 text-center text-gray-600">
        Blog not found
      </div>
    );
  }

  const post = JSON.parse(fs.readFileSync(path.join(blogsDir, blogFile), "utf-8"));

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.meta_description} />
      </Head>

      <article className="prose mx-auto py-10 mt-12 md:mt-24 px-4 sm:px-6 lg:px-8 max-w-5xl">
        {post.cover_image && (
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 mb-6 rounded-xl overflow-hidden">
            <Image src={post.cover_image} alt={post.title} fill className="object-cover" />
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8">{post.meta_description}</p>

        {post.sections?.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{section.heading}</h2>
            {section.content && <p className="text-gray-700 mb-4">{section.content}</p>}
            {section.image && (
              <div className="relative w-full h-48 sm:h-56 md:h-64 mb-6 rounded-lg overflow-hidden">
                <Image src={section.image} alt={section.heading} fill className="object-cover" />
              </div>
            )}
            {section.points && (
              <ul className="list-disc pl-6 space-y-1">
                {section.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            )}
            {section.steps && (
              <ul className="list-decimal pl-6 space-y-1">
                {section.steps.map((step, s) => (
                  <li key={s}>{step}</li>
                ))}
              </ul>
            )}
            {section.examples && (
              <ul className="list-disc pl-6 space-y-1">
                {section.examples.map((ex, e) => (
                  <li key={e}>{ex}</li>
                ))}
              </ul>
            )}
            {section.note && <p className="italic mt-2">{section.note}</p>}
            {section.closing && <p className="font-medium mt-2">{section.closing}</p>}
          </section>
        ))}

        {post.call_to_action && (
          <div className="mt-12 bg-blue-50 border border-blue-100 p-6 rounded-xl text-center">
            <p className="text-lg sm:text-xl mb-2">{post.call_to_action.text}</p>
            <a href={post.call_to_action.link} className="text-blue-600 font-semibold underline">
              Learn More →
            </a>
          </div>
        )}
      </article>
    </>
  );
};

export default BlogPage;
