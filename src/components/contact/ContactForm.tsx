import { useState } from "react";
import Button from "../common/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7"
    >
      <div>
        <label className="mb-3 block text-xs uppercase tracking-wider text-neutral-600">
          Name
        </label>

        <input
          required
          type="text"
          placeholder="Your name"
          className="w-full border-b border-white/10 bg-transparent py-3 text-white outline-none placeholder:text-neutral-700 focus:border-white/40"
        />
      </div>

      <div>
        <label className="mb-3 block text-xs uppercase tracking-wider text-neutral-600">
          Email
        </label>

        <input
          required
          type="email"
          placeholder="you@example.com"
          className="w-full border-b border-white/10 bg-transparent py-3 text-white outline-none placeholder:text-neutral-700 focus:border-white/40"
        />
      </div>

      <div>
        <label className="mb-3 block text-xs uppercase tracking-wider text-neutral-600">
          Company
        </label>

        <input
          type="text"
          placeholder="Company name"
          className="w-full border-b border-white/10 bg-transparent py-3 text-white outline-none placeholder:text-neutral-700 focus:border-white/40"
        />
      </div>

      <div>
        <label className="mb-3 block text-xs uppercase tracking-wider text-neutral-600">
          Tell us about your project
        </label>

        <textarea
          required
          rows={5}
          placeholder="What are you looking to build?"
          className="w-full resize-none border-b border-white/10 bg-transparent py-3 text-white outline-none placeholder:text-neutral-700 focus:border-white/40"
        />
      </div>

      {submitted && (
        <p className="text-sm text-neutral-400">
          Thanks! Your message has been received.
        </p>
      )}

      <Button>
        Send inquiry
      </Button>
    </form>
  );
}