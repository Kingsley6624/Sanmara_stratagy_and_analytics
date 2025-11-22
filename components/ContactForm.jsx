"use client";

import { useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!form.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.error || "Something went wrong");
        return;
      }
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-start shadow-md p-6 md:rounded-2xl"
      >
        <div>
          <h3 className="mb-4 text-lg font-semibold">Send us a message</h3>
          <label className="block text-sm font-medium text-gray-700">
            Name*
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email*
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message*
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
