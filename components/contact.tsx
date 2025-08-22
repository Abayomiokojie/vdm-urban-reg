"use client";
import React, { useMemo, useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const EMAIL = "info@VDMurbanregcompliance.com";

// Display format for site
const PHONE_DISPLAY = "+234 [Your Number]";

// Raw digits without + or spaces for WhatsApp/tel links. Replace with your number.
const PHONE_RAW = "234XXXXXXXXXX";

const SOCIAL_HANDLE = "@VDMurbanregcompliance";
const INSTAGRAM_URL = ""; // e.g. https://instagram.com/VDMurbanregcompliance
const LINKEDIN_URL = ""; // e.g. https://linkedin.com/company/VDMurbanregcompliance

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  const waLink = useMemo(() => {
    const text = encodeURIComponent(
      "Hello VDM Urban Regulatory Compliance, I would like to get in touch."
    );
    return `https://wa.me/${PHONE_RAW}?text=${text}`;
  }, []);

  const handleChange =
    (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (!form.email.trim()) return "Please enter your email.";
    // Simple email pattern
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email.";
    if (!form.message.trim()) return "Please enter a message.";
    return "";
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    try {
      setStatus("sending");
      // TODO: Replace with your API endpoint
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) });
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="[background:radial-gradient(1200px_600px_at_20%_0%,rgba(96,165,250,0.18),transparent_60%),_radial-gradient(1000px_500px_at_80%_10%,rgba(110,231,183,0.16),transparent_60%),_linear-gradient(180deg,#0b1020,#0b1020)] text-slate-100 py-18 px-5"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-9">
          <p className="text-slate-400">CONTACT US</p>
          <h2 className="text-[2.2rem] tracking-tight mb-2 font-semibold">
            Get in touch
          </h2>
          {/* <p className="text-slate-400">
            Questions, partnerships, or consultations—reach out and the team
            will respond shortly.
          </p> */}
        </div>

        <div className="grid gap-8 md:gap-6 md:[grid-template-columns:1fr_1.2fr]">
          <aside className="bg-white/5 border border-white/20 rounded-2xl backdrop-blur-md p-6 shadow-lg">
            <div className="mb-6">
              <p className="mb-4 text-[1.7rem] tracking-normal ">
                {/* Planning new projects or you've got ongoing projects? */}
                {/* or got ongoing projects */}
                Want to Learn More?
              </p>
              <p className="text-slate-200 ">
                Reach out for questions, partnerships, or consultations and let
                us help you navigate the complexities and regulations involved
                in your diverse projects.
              </p>
            </div>

            <h3 className="text-lg mb-3.5">Contact details</h3>
            <ul className="grid gap-3.5 list-none p-0 m-0">
              <li className="grid [grid-template-columns:28px_1fr] items-center gap-3">
                <IconMail />
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Send email"
                  className="text-slate-100 hover:underline underline-offset-4 hover:text-white"
                >
                  {" "}
                  {EMAIL}
                </a>
              </li>
              <li className="grid [grid-template-columns:28px_1fr] items-center gap-3">
                <IconPhone />
                <a
                  href={`tel:${PHONE_RAW}`}
                  aria-label="Call phone"
                  className="text-slate-100 hover:underline underline-offset-4 hover:text-white"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="grid [grid-template-columns:28px_1fr] items-center gap-3">
                <IconWhatsApp />
                <a
                  className="inline-flex items-center gap-2 text-emerald-50 w-fit bg-gradient-to-br from-emerald-600 to-green-900 px-5 py-2 rounded-full font-semibold shadow-[0_6px_20px_rgba(34,197,94,0.25)]"
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </li>
              {/* ...socials omitted... */}
            </ul>
          </aside>

          <form
            className="bg-white/5 border border-white/20 rounded-2xl backdrop-blur-md p-6 shadow-lg"
            onSubmit={onSubmit}
            noValidate
          >
            <h3 className="text-lg mb-3.5">Send a message</h3>

            <div className="grid gap-3.5 md:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange("name")}
                  autoComplete="name"
                  required
                  className="w-full text-slate-100 bg-white/5 border border-white/20 rounded-xl px-3.5 py-3 outline-none transition focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#7aa2ff]/20 focus:bg-white/10 placeholder:text-white/35"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm text-slate-400">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="+234 80 1234 5678"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  autoComplete="tel"
                  required
                  className="w-full text-slate-100 bg-white/5 border border-white/20 rounded-xl px-3.5 py-3 outline-none transition focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#7aa2ff]/20 focus:bg-white/10 placeholder:text-white/35"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  autoComplete="email"
                  required
                  className="w-full text-slate-100 bg-white/5 border border-white/20 rounded-xl px-3.5 py-3 outline-none transition focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#7aa2ff]/20 focus:bg-white/10 placeholder:text-white/35"
                />
              </div>

              <div className="grid gap-2 md:col-span-2">
                <label htmlFor="message" className="text-sm text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={handleChange("message")}
                  rows={6}
                  required
                  className="w-full text-slate-100 bg-white/5 border border-white/20 rounded-xl px-3.5 py-3 outline-none transition focus:border-[#7aa2ff] focus:ring-4 focus:ring-[#7aa2ff]/20 focus:bg-white/10 placeholder:text-white/35"
                />
              </div>
            </div>

            {error && (
              <div
                className="mt-1.5 px-3 py-2.5 rounded-xl text-sm bg-red-500/10 border border-red-500/30 text-red-200"
                role="alert"
                aria-live="polite"
              >
                {error}
              </div>
            )}

            {status === "success" && (
              <div
                className="mt-1.5 px-3 py-2.5 rounded-xl text-sm bg-emerald-500/10 border border-emerald-500/30 text-emerald-200"
                role="status"
                aria-live="polite"
              >
                Message sent. We will get back to you shortly.
              </div>
            )}

            <button
              className="mt-3 w-full rounded-xl px-4 py-3 font-bold text-[#061224] bg-gradient-to-br from-emerald-300 to-blue-400 shadow-[0_10px_24px_rgba(96,165,250,0.25)] transition hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      aria-hidden="true"
      className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
      <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
    </svg>
  );
}

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      className="icon icon-tabler icons-tabler-filled icon-tabler-phone"
      aria-hidden="true"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
    </svg>
  );
}

function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      aria-hidden="true"
      className="icon icon-tabler icons-tabler-filled icon-tabler-brand-whatsapp"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18.497 4.409a10 10 0 0 1 -10.36 16.828l-.223 -.098l-4.759 .849l-.11 .011a1 1 0 0 1 -.11 0l-.102 -.013l-.108 -.024l-.105 -.037l-.099 -.047l-.093 -.058l-.014 -.011l-.012 -.007l-.086 -.073l-.077 -.08l-.067 -.088l-.056 -.094l-.034 -.07l-.04 -.108l-.028 -.128l-.012 -.102a1 1 0 0 1 0 -.125l.012 -.1l.024 -.11l.045 -.122l1.433 -3.304l-.009 -.014a10 10 0 0 1 1.549 -12.454l.215 -.203a10 10 0 0 1 13.226 -.217m-8.997 3.09a1.5 1.5 0 0 0 -1.5 1.5v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0 -3h-1l-.144 .007a1.5 1.5 0 0 0 -1.128 .697l-.042 .074l-.022 -.007a4.01 4.01 0 0 1 -2.435 -2.435l-.008 -.023l.075 -.041a1.5 1.5 0 0 0 .704 -1.272v-1a1.5 1.5 0 0 0 -1.5 -1.5" />
    </svg>
  );
}

// (unused icons removed)
