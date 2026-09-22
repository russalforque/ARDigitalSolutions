import { useState } from "react";
import { Check } from "lucide-react";
import Button from "../common/Button";

const fieldClass =
  "w-full border-b border-white/10 bg-transparent py-3 text-white outline-none placeholder:text-neutral-700 transition-colors focus:border-white focus-visible:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    window.setTimeout(() => setStatus("sent"), 600);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 border-b border-white/10 py-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
          <Check size={18} />
        </div>

        <p className="text-lg text-white">Thanks, your message is in.</p>

        <p className="text-sm text-neutral-500">
          We'll get back to you shortly at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      <div>
        <label htmlFor="name" className="mb-3 block text-xs uppercase tracking-wider text-neutral-600">
          Name
        </label>

        <input
          id="name"
          name="name"
          required
          type="text"
          placeholder="Your name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-3 block text-xs uppercase tracking-wider text-neutral-600">
          Email
        </label>

        <input
          id="email"
          name="email"
          required
          type="email"
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-3 block text-xs uppercase tracking-wider text-neutral-600">
          Company
        </label>

        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-3 block text-xs uppercase tracking-wider text-neutral-600">
          Tell us about your project
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you looking to build?"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <Button className={status === "sending" ? "opacity-60" : ""}>
        {status === "sending" ? "Sending..." : "Send inquiry"}
      </Button>
    </form>
  );
}
