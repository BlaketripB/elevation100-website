"use client";

import { useState } from "react";
import { Upload, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const projectTypes = [
  "Custom Home",
  "Remodel",
  "Framing",
  "Steel",
  "Architectural Plans",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const file = data.get("file") as File | null;
    if (file && file.size > 0 && file.size > MAX_FILE_SIZE) {
      setStatus("error");
      setMessage("File is larger than 10MB. Please attach a smaller file.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json.error || "Submission failed");
      }
      setStatus("success");
      setMessage(
        "Your plans have been received. We'll be in touch shortly."
      );
      form.reset();
      setFileName("");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us directly."
      );
    }
  }

  const labelCls =
    "block font-heading uppercase tracking-[0.2em] text-xs text-brand-gold mb-2";
  const inputCls =
    "w-full bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-gold transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputCls}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputCls}
            placeholder="801-555-0123"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelCls}>
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputCls}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="projectType" className={labelCls}>
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue="Custom Home"
            className={`${inputCls} appearance-none`}
          >
            {projectTypes.map((t) => (
              <option key={t} value={t} className="bg-brand-blueprint">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelCls}>
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className={inputCls}
          placeholder="Tell us about your project, timeline, and budget…"
        />
      </div>

      <div>
        <label htmlFor="file" className={labelCls}>
          Upload Your Plans
        </label>
        <label
          htmlFor="file"
          className="flex flex-col items-center justify-center w-full border border-dashed border-white/30 hover:border-brand-gold transition-colors cursor-pointer p-6 text-center bg-white/5"
        >
          <Upload size={22} className="text-brand-gold" />
          <span className="mt-3 text-sm text-white/80">
            {fileName || "Click to upload PDF, DWG, JPG, PNG (max 10MB)"}
          </span>
          <input
            id="file"
            name="file"
            type="file"
            accept=".pdf,.dwg,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          "Send My Plans"
        )}
      </button>

      {status === "success" && (
        <div className="flex items-start gap-3 border border-brand-gold/50 bg-brand-gold/10 p-4 text-sm text-white">
          <CheckCircle2 size={18} className="text-brand-gold shrink-0 mt-0.5" />
          <p>{message}</p>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-start gap-3 border border-red-500/50 bg-red-500/10 p-4 text-sm text-white">
          <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
          <p>{message}</p>
        </div>
      )}
    </form>
  );
}
