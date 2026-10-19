import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How are quotations and prices calculated?',
      a: 'Pricing is 100% transparent and depends on three clear variables: the chosen service (PPT, Report, Handwritten, or Lab Record), the volume (number of slides, pages, or experiments), and your deadline urgency. You see the exact price before confirming—there are zero hidden fees or surprise adjustments.'
    },
    {
      q: 'What is the fastest turnaround time for urgent deadlines?',
      a: 'We support express delivery options starting from 6 hours for urgent handwritten assignments and PPTs. For comprehensive project reports and complete lab record books, standard turnaround is 12 to 24 hours to ensure high analytical quality and proper diagrammatic presentation.'
    },
    {
      q: 'How do I receive my completed work?',
      a: 'Digital tasks (PPTs and Project Reports) are delivered in fully editable formats (.pptx, .docx) as well as publication-ready PDFs. Handwritten assignments and Lab records are scanned in crystal-clear, high-resolution multi-page PDF format. In select campus regions, doorstep courier delivery of the physical notebook is also supported.'
    },
    {
      q: 'What happens if I need revisions or my professor requests edits?',
      a: 'All orders include free revisions within 48 hours of delivery. If your professor requests alterations or if any guideline from your original submission brief was overlooked, simply click "Request Revision" on your dashboard and our team will adjust it promptly.'
    },
    {
      q: 'How do you ensure neat handwriting and accurate lab diagrams?',
      a: 'Our handwritten team includes certified calligraphic and neat-writing specialists. We use standard college-approved A4 ruled/plain sheets and offer choice of blue or black ink. Lab diagrams are drawn with precision drafting tools, labeled neatly, and checked against standard laboratory syllabi.'
    },
    {
      q: 'Is my student identity and task submission confidential?',
      a: 'Yes, absolutely. We strictly adhere to student privacy standards. Your personal identity, university affiliation, uploaded documents, and finished tasks are encrypted and never disclosed, published, or sold to third parties.'
    }
  ];

  return (
    <section id="faq-section" className="py-20 bg-white border-t border-slate-100 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEF0FE] text-[#6546F5] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111936] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#64708A]">
            Everything you need to know about pricing, deadlines, delivery formats, and revisions.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#FCFBFF] border-purple-200/80 shadow-sm'
                    : 'bg-white border-slate-200/70 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#111936] pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'bg-[#6546F5] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-[15px] text-[#64708A] leading-relaxed border-t border-purple-50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
