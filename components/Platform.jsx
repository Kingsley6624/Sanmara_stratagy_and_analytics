"use client";
import { motion } from "framer-motion";

const platforms = [
  { name: "Power BI", logo: "/logos/power-bi.svg" },
  { name: "Tableau", logo: "/logos/tableau.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Google Cloud", logo: "/logos/google-cloud.svg" },
  { name: "Snowflake", logo: "/logos/snowflake.svg" },
  { name: "Azure", logo: "/logos/azure.svg" },
  { name: "Databricks", logo: "/logos/databricks.svg" },
  { name: "BigQuery", logo: "/logos/bigquery.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
];

export default function PlatformsScroll() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-8 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Platforms We Work With
        </h2>
      </div>

      {/* Continuous scrolling container */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-12 min-w-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...platforms, ...platforms].map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[150px] md:min-w-[200px]"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-10 md:h-12 object-contain mb-3"
              />
              <p className="text-gray-700 text-sm md:text-base font-medium">
                {platform.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
