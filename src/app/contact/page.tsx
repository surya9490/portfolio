import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Surya Kiran Palipireddy for Shopify development, custom theme builds, store migrations, and eCommerce consulting. Available for freelance and full-time opportunities.",
  openGraph: {
    title: "Contact Surya Kiran Palipireddy | Shopify Developer",
    description:
      "Have a Shopify project in mind? Let's discuss how I can help build your next eCommerce store.",
    url: "https://www.dev-surya.online/contact",
  },
  alternates: {
    canonical: "https://www.dev-surya.online/contact",
  },
};

export default function Contact() {
  return <ContactClient />;
}
