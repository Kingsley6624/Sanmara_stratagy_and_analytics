"use server";

import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
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
  notFound();
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
      
      <article className="prose mx-auto pt-10 mt-12 md:mt-24 px-4 sm:px-6 lg:px-8 max-w-5xl">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            By {post.author} | {post.date} | Read Time: {post.reading_time}
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
        <section className="mb-8 text-gray-700 text-base leading-relaxed">
          {post.introduction}
        </section>

        {/* Sections */}
        {post.sections.map((section, idx) => (
          <section key={idx} className="mb-12 text-sm lg:text-base">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              {section.title}
            </h2>

            {/* Subheading */}
            {section.content && (
              <h3 className="text-base  font-semibold text-gray-700 mb-4">
                {section.content}
              </h3>
            )}
            {section.points && (
              <ul className="list-disc list-outside space-y-2 text-gray-700 pl-4">
                {section.points.map((item, index) => {
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
            {section.steps && (
              <ul className="list-disc list-outside space-y-2 text-gray-700 pl-4">
                {section.steps.map((item, index) =>  (
                    <li key={index}>
                       {item}
                    </li>
                  )
                )}
              </ul>
            )}

            {/* Case study / example */}
            {section.case_study && (
              <p className="mt-4 italic text-gray-600">
                <strong>Case Study: </strong>
                {section.case_study}
              </p>
            )}
            {section.example && (
              <p className="mt-4 italic text-gray-600">
                <strong>Example: </strong>
                {section.example}
              </p>
            )}
            {section.data_insight && (
              <p className="mt-4 italic text-gray-600">
                <strong>Data Insight: </strong>
                {section.data_insight}
              </p>
            )}
            {section.sanmara_role && (
              <p className="mt-4 italic text-gray-600">
                <strong>Sanmara Role: </strong>
                {section.sanmara_role}
              </p>
            )}
          </section>
        ))}

        {/* Conclusion */}
        {post.conclusion && (
          <section className="mb-8 text-gray-700 text-lg leading-relaxed">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Conclusion
            </h2>
            <p className=" text-sm lg:text-base">{post.conclusion}</p>
          </section>
        )}
        
      </article>
      {post.call_to_action && (
          <div className="mt-12 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-800 text-white  p-6 py-12 text-center">
            <p className="text-base md:text-base mb-4">
              {post.call_to_action}
            </p>
            <Link
              href="/contact"
              className="text-white font-semibold border-2 border-white flex items-center w-fit mx-auto py-2 px-3 rounded gap-2"
            >
              Get Started <FaArrowRight/>
              
            </Link>
          </div>
        )}
    </>
  );
};

export default BlogPage;
