"use server";

import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const BlogPage = async ({ params }) => {
  // Await params if it's a promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const blogsDir = path.join(process.cwd(), "data/blogs");
  const files = fs.readdirSync(blogsDir);

  const blogFile = files.find((file) => {
    const content = JSON.parse(
      fs.readFileSync(path.join(blogsDir, file), "utf-8")
    );
    return content.slug === slug;
  });

  if (!blogFile) {
    return (
      <div className="mt-24 py-20 text-center text-gray-600">
        Blog not found
      </div>
    );
  }

  const post = JSON.parse(
    fs.readFileSync(path.join(blogsDir, blogFile), "utf-8")
  );

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.meta_description} />
      </Head>

      <article className="prose mx-auto py-10 mt-12 md:mt-24 px-4 sm:px-6 lg:px-8 max-w-5xl">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            By {post.author} | {post.date} | Read Time: {post.read_time}
          </p>
        </header>

        {post.cover_image && (
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 mb-6 rounded-xl overflow-hidden">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* <h1 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h1> */}
        <section className="text-gray-900 text-sm md:text-base mb-8">
          {post.introduction}
        </section>

        {/* Sections */}
        {post.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {section.title}
            </h2>

            {/* Subheading */}
            {section.content && (
              <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-4">
                {section.content}
              </h3>
            )}
            {section.points && (
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {(section.points).map((item, index) => {
                const [boldPart, ...rest] = item.split(":");
                const remainingText = rest.join(":").trim();

                return (
                  <li key={index}>
                    <strong>{boldPart}:</strong> {remainingText}
                  </li>
                );
              })}
            </ul>
            )}

            {/* Case study / example */}
            {section.case_study && (
              <p className="mt-2 italic text-gray-600"><strong>Case Study: </strong>{section.case_study}</p>
            )}
            {section.example && (
              <p className="mt-2 italic text-gray-600"><strong>Example: </strong>{section.example}</p>
            )}
            {section.data_insight && (
              <p className="mt-2 italic text-gray-600"><strong>Data Insight: </strong>{section.data_insight}</p>
            )}
            {section.sanmara_role && (
              <p className="mt-2 italic text-gray-600"><strong>Sanmara Role: </strong>{section.sanmara_role}</p>
            )}
          </section>
        ))}

        {/* Conclusion */}
        {post.conclusion && (
          <section className="mb-8 text-gray-700 text-lg leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Conclusion
            </h2>
            {post.conclusion}
          </section>
        )}
        {post.call_to_action && (
          <div className="mt-12 bg-blue-50 border border-blue-100 p-6 rounded-xl text-center">
            <p className="text-base md:text-base mb-2">
              {post.call_to_action.text}
            </p>
            <Link
              href="/contact"
              className="text-blue-600 font-semibold underline"
            >
              Get Started →
            </Link>
          </div>
        )}
      </article>
    </>
  );
};

export default BlogPage;
