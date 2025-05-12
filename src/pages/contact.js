import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("https://formspree.io/f/mnndgbdd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-yellow-100 to-blue-100 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border-4 border-orange-500">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-8">Contact Me</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-blue-700 font-semibold mb-1">Name:</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-blue-400 rounded-lg focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-blue-700 font-semibold mb-1">Email:</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-blue-400 rounded-lg focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-blue-700 font-semibold mb-1">Message:</label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-blue-400 rounded-lg focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-700 transition"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>

          {status === "success" && (
            <p className="text-green-600 font-semibold mt-4">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-semibold mt-4">Oops! Something went wrong.</p>
          )}
          {status === "success" && (
          <div className="ki-ball mx-auto mt-6"></div> 
        )}
        </form>
      </div>
    </div>
  );
}
