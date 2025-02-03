import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setSubmitted(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-700 via-indigo-500 to-purple-500 text-white dark:bg-gray-900">
      <div className="container mx-auto px-4">

        {/* 🔥 Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-6 text-white dark:text-blue-400 drop-shadow-lg">
          Get in Touch
        </h2>

        {submitted && (
          <p className="text-green-400 text-center mb-4 font-semibold">
            ✅ Thank you, {form.name}! Your message has been received.
          </p>
        )}

        {error && (
          <p className="text-red-500 text-center mb-4 font-semibold">
            ⚠ {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-gray-900 dark:text-gray-200"
          noValidate
        >
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="contact-name" className="block mb-2 font-semibold dark:text-gray-300">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="contact-email" className="block mb-2 font-semibold dark:text-gray-300">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="Your email"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label htmlFor="contact-message" className="block mb-2 font-semibold dark:text-gray-300">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg font-semibold 
              hover:scale-105 transition duration-300 hover:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
