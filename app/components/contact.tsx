"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    from: "",
    subject: "",
    body: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Build mailto link as a simple no-backend approach
    const mailto = `mailto:purabsahare@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(`From: ${form.from}\n\n${form.body}`)}`;
    window.location.href = mailto;
    setTimeout(() => setSending(false), 1500);
  };

  return (
    <section className="flex flex-col gap-3 pb-8" id="contact">
      <h2 className="text-sm font-semibold text-zinc-50">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-zinc-800 bg-zinc-900/40 overflow-hidden"
      >
        {/* Field rows */}
        {[
          {
            id: "to",
            label: "to:",
            value: "purabsahare@gmail.com",
            readOnly: true,
            placeholder: "",
          },
          {
            id: "from",
            label: "from:",
            value: form.from,
            readOnly: false,
            placeholder: "your@email.com",
          },
          {
            id: "subject",
            label: "subject:",
            value: form.subject,
            readOnly: false,
            placeholder: "What's this about?",
          },
        ].map((field) => (
          <div
            key={field.id}
            className="flex items-center border-b border-zinc-800 px-4 py-2.5"
          >
            <label
              htmlFor={field.id}
              className="w-16 text-xs font-mono text-zinc-500 flex-shrink-0"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.id === "from" ? "email" : "text"}
              value={field.value}
              readOnly={field.readOnly}
              placeholder={field.placeholder}
              onChange={
                field.readOnly
                  ? undefined
                  : (e) =>
                      setForm((f) => ({
                        ...f,
                        [field.id]: e.target.value,
                      }))
              }
              className={`flex-1 bg-transparent text-xs outline-none placeholder:text-zinc-700 ${
                field.readOnly ? "text-zinc-500 cursor-default" : "text-zinc-200"
              }`}
            />
          </div>
        ))}

        {/* Body textarea */}
        <div className="px-4 py-3">
          <textarea
            id="body"
            rows={4}
            value={form.body}
            onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
            placeholder="We found your profile and have an opportunity that matches your stack..."
            className="w-full resize-none bg-transparent text-xs text-zinc-300 outline-none placeholder:text-zinc-700 leading-relaxed"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-zinc-800 px-4 py-2.5">
          <button
            type="submit"
            disabled={sending}
            className="flex items-center gap-1.5 rounded-md bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-zinc-100 disabled:opacity-50"
          >
            {sending ? (
              "sending..."
            ) : (
              <>
                <Send className="h-3 w-3" />
                send
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
