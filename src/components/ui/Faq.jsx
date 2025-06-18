"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is from 11 PM and check-out is until 11 PM.",
  },
  {
    question: "Is the resort near the beach?",
    answer: "Yes, Sunset Beach Resort is just a minute's walk from the sea.",
  },
  {
    question: "Do you offer free Wi-Fi?",
    answer: "Absolutely! We offer high-speed Wi-Fi throughout the resort.",
  },
  {
    question: "Is there any restaurant or food service?",
    answer:
      "Yes, we have a restaurant serving fresh local and international cuisine.",
  },
  {
    question: "Are pets allowed?",
    answer: "Yes, we allow pets with love.",
  },
  {
    question: "Do you offer airport pick-up?",
    answer:
      "Yes, we can arrange airport transfers upon request. Additional charges may apply.",
  },
  {
    question: "Do you offer Self-cooking fecilities?",
    answer: "Yes, we are allow self-cooking fecilities also.",
  },
];

export default function FaqAccordion() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion
        type="single"
        collapsible
        className="space-y-4 border border-gray-300 border-dashed p-4 rounded-md"
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base font-medium hover:text-primary transition">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
