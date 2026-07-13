import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if the user has configured EmailJS credentials
    const isConfigured =
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== "your_service_id_here" &&
      templateId !== "your_template_id_here" &&
      publicKey !== "your_public_key_here";

    if (!isConfigured) {
      console.warn(
        "EmailJS is running in Demo Mode. To send actual emails, configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file."
      );
      // Simulate sending in demo mode
      setTimeout(() => {
        setStatus("success");
        formRef.current?.reset();
      }, 1500);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
        },
        (err) => {
          console.error("EmailJS sending failed:", err);
          setStatus("error");
          setErrorMessage(err.text || "Something went wrong while sending the email. Please try again.");
        }
      );
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent text-accent animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="font-mono text-sm uppercase tracking-widest text-ink">
          Message Sent!
        </h4>
        <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted max-w-xs">
          Thank you for reaching out. Danish will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 border border-accent px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-base cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="border border-red-500/20 bg-red-500/10 p-4 font-mono text-xs text-red-400">
          <p className="font-bold uppercase tracking-wider mb-1">Send Failure</p>
          <p>{errorMessage}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-2 text-accent underline hover:text-ink cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      <div>
        <label className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
          Your Name *
        </label>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Enter Your name here..."
          className="w-full border-b border-line bg-transparent py-3 font-mono text-sm text-ink placeholder:text-muted/40 outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
          Your Email *
        </label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Enter your email here..."
          className="w-full border-b border-line bg-transparent py-3 font-mono text-sm text-ink placeholder:text-muted/40 outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Enter subject here..."
          className="w-full border-b border-line bg-transparent py-3 font-mono text-sm text-ink placeholder:text-muted/40 outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
          Your Message *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Describe your project or role enquiry here..."
          className="w-full resize-none border-b border-line bg-transparent py-3 font-mono text-sm text-ink placeholder:text-muted/40 outline-none transition-colors focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full border border-accent bg-transparent py-3 font-mono text-xs uppercase tracking-widest text-accent transition-all duration-300 hover:bg-accent hover:text-base disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-accent cursor-pointer flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
