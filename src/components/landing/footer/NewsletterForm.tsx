import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900 mb-4">
        Subscribe to our newsletter
      </h3>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 text-sm rounded-lg border border-brand-light/30 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-1 bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-dark transition-colors disabled:opacity-50"
        >
          {status === "loading" ? (
            "..."
          ) : (
            <>
              Subscribe
              <ArrowRight className="h-3 w-3" />
            </>
          )}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-2 text-xs text-green-600">Thanks for subscribing!</p>
      )}

      {status === "error" && (
        <p className="mt-2 text-xs text-red-600">Please try again.</p>
      )}
    </div>
  );
};
