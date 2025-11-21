import React from "react";
import ContactForm from "../../components/ContactForm";
import PageHeader from "@/components/pageHeader";
import Link from "next/link";
import { ContactLinks } from "@/data/ContactLinks";
import { li } from "framer-motion/client";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      <PageHeader
        title="Contact Us"
        subtitle="Have questions or ready to start your data journey? Get in touch with our team."
      />
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left inter mt-6">
        {/* <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          We'd love to hear from you. Fill out the form and we'll get back to
          you shortly.
        </p> */}

        <div className="mt-12 pb-12 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-start ">
          <ContactForm />
          <div className="bg-linear-to-br from-slate-900 via-blue-900 to-indigo-800 text-gray-50 shadow-md p-6 md:rounded-2xl flex flex-col gap-4">
            <h3 className="mb-3 text-lg font-semibold">
              Other Contact Channels
            </h3>
            <ul>
              {ContactLinks.contact.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li
                    key={index}
                    className="mb-2 text-white text-sm flex items-center"
                  >
                    {Icon && <Icon className="mr-2" />}
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="hover:text-[#f6c23e]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.title || link.address}
                      </Link>
                    ) : (
                      <span>{link.title || link.address}</span>
                    )}
                  </li>
                );
              })}
            </ul>

            <hr className="border-gray-400 w-full mx-auto" />

            <div className="flex  space-x-5 text-xl 2xl:text-4xl ">
              {ContactLinks.socials.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    href={link.href}
                    key={index}
                    aria-label={link.name || "Social Media Link"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="hover:text-[#f6c23e] hover:scale-110 transition-transform duration-200" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
