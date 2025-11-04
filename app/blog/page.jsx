import posts from "@/data/blog.json";
import Head from "next/head";
import Image from "next/image";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>{posts.title}</title>
        <meta name="description" content={posts.meta_description} />
      </Head>

      <article className="prose mx-auto py-10 mt-20 md:mt-24 px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Cover Image */}
        {posts.cover_image && (
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 mb-6 rounded-xl overflow-hidden">
            <Image
              src={posts.cover_image}
              alt={posts.title}
              fill
              className="object-fill"
              priority
            />
          </div>
        )}

        {/* Title & Meta Description */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {posts.title}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          {posts.meta_description}
        </p>

        {/* Sections */}
        {posts.sections.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              {section.heading}
            </h2>

            {/* Section Image */}
            {section.image && (
              <div className="relative w-full h-48 sm:h-56 md:h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.heading}
                  fill
                  className="object-cover object-none"
                />
              </div>
            )}

            {/* Section Content */}
            {section.content && (
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                {section.content}
              </p>
            )}

            {/* Subsections */}
            {section.subsections &&
              section.subsections.map((sub, i) => (
                <div key={i} className="mb-4">
                  <h3 className="text-lg sm:text-xl font-medium mb-2">
                    {sub.title}
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                    {sub.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}

            {/* Steps */}
            {section.steps && (
              <ul className="list-decimal pl-6 space-y-1 text-sm sm:text-base">
                {section.steps.map((step, s) => (
                  <li key={s}>{step}</li>
                ))}
              </ul>
            )}

            {/* Advantages */}
            {section.advantages && (
              <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                {section.advantages.map((adv, a) => (
                  <li key={a}>{adv}</li>
                ))}
              </ul>
            )}

            {/* Example */}
            {section.example && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm sm:text-base">
                <p className="font-medium mb-2">Example:</p>
                {typeof section.example === "string" ? (
                  <p>{section.example}</p>
                ) : (
                  <ul className="list-disc pl-6">
                    {section.example.kpis.map((kpi, k) => (
                      <li key={k}>{kpi}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </section>
        ))}

        {/* Call to Action */}
        <div className="mt-12 bg-blue-50 border border-blue-100 p-6 rounded-xl text-center">
          <p className="text-lg sm:text-xl mb-2">{posts.call_to_action.text}</p>
          <a
            href={posts.call_to_action.link}
            className="text-blue-600 font-semibold underline"
          >
            Learn More →
          </a>
        </div>
      </article>
    </>
  );
};

export default BlogPage;
