import type { FaqCategory } from "@/types";

export const faqCategories: FaqCategory[] = [
  {
    category: "Quotes & Booking",
    items: [
      {
        question: "How do I get a free quote?",
        answer:
          "You can message us on WhatsApp, call 07502 102 869, send an email, or use the form on our Contact page. We will get back to you as soon as we can.",
      },
      {
        question: "Do you do one-off cleans or regular cleans?",
        answer:
          "Both are welcome. Whether you want a one-off deep clean or a regular window round, we are happy to help.",
      },
      {
        question: "How quickly can you come?",
        answer:
          "We are quick to reply to messages. Tell us your area and what you need, and we will let you know when we can fit you in.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        question: "What do you clean?",
        answer:
          "We clean windows, frames and sills, doors, fascias and soffits, gutters, conservatories and Velux windows.",
      },
      {
        question: "How high can you reach?",
        answer:
          "Up to three storeys using our telescopic pole system, safely from the ground.",
      },
      {
        question: "Do you use ladders?",
        answer:
          "For high and hard-to-reach windows our telescopic pole system lets us clean safely from the ground. No ladders, no hassle.",
      },
      {
        question: "Are you insured?",
        answer:
          "Yes. Bradley's Window Cleaning is fully insured.",
      },
      {
        question: "Do you clean sills and frames?",
        answer:
          "Yes. Sills are properly cleaned and rinsed, not just wiped. Frames are wiped down and old marks and stickers removed so they look bright white.",
      },
      {
        question: "Do you clear gutters?",
        answer:
          "Yes. We clear gutters quickly and tidily, with no mess left behind.",
      },
    ],
  },
  {
    category: "Areas",
    items: [
      {
        question: "Which areas do you cover?",
        answer:
          "We cover Ilkeston, Long Eaton, Draycott, Stapleford, Spondon and surrounding areas across Erewash. Not sure we cover your area? Just message us and we will let you know.",
      },
    ],
  },
];

/** Flat list of all FAQ items */
export const allFaqItems = faqCategories.flatMap((cat) => cat.items);
