import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle2, UploadCloud, Clock, ShieldCheck, 
  Sparkles, FileCheck, HelpCircle, ArrowRight, Check 
} from 'lucide-react';
import { serviceData } from '../components/ServiceCards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServiceDetailPage({ onOpenAuth }) {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = serviceData.find((s) => s.id === serviceId) || serviceData[0];
  const Icon = service.icon;

  // Form State
  const [topic, setTopic] = useState('');
  const [urgency, setUrgency] = useState('24h');
  const [quantity, setQuantity] = useState(12);
  const [instructions, setInstructions] = useState('');
  const [fileName, setFileName] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const getSpecificHighlights = () => {
    switch (service.id) {
      case 'ppt-design':
        return [
          'Custom 16:9 widescreen presentation deck with cohesive color scheme',
          'Academic infographics, comparison charts, and clean visual diagrams',
          'Bullet-point speaker notes provided for each slide for your oral defense',
          'Delivered in editable Microsoft PowerPoint (.pptx) and PDF formats',
          'Free revision if professor asks for slide adjustments'
        ];
      case 'project-reports':
        return [
          'Full academic structure: Abstract, Introduction, Literature Review, Methodology, Results, Conclusion',
          'Strict adherence to IEEE, APA 7, Harvard, or your college department formatting',
          'Properly cited references, bibliography, and table of figures',
          'Grammar and technical terminology verified by engineering & science specialists',
          'Delivered in editable Word (.docx) and submission-ready PDF'
        ];
      case 'handwritten-assignments':
        return [
          'Choice of ultra-clean, legible handwriting styles (regular cursive or print)',
          'Choice of ink: Royal Blue, Dark Navy, or Classic Black gel/ballpoint',
          'Standard A4 ruled single-line or plain unruled university paper',
          'Clean margins, underlined section headings, and hand-drawn neat sketches',
          'Delivered via 300 DPI high-definition PDF scan + optional physical notebook courier'
        ];
      case 'lab-records':
        return [
          'Complete experiment sequence with Title, Aim, Apparatus, Theory, and Formulae',
          'Accurate circuit diagrams, mechanical assembly sketches, or biology drawings',
          'Calculation tables with sample calculations, units, and percentage error',
          'Neat observations, graphs, precautions, and inference summaries',
          'Formatted strictly according to your laboratory manual instructions'
        ];
      default:
        return [
          'Strict adherence to provided college rubric and guidelines',
          'Delivered strictly before deadline to allow ample review time',
          'Free revisions within 48 hours of initial delivery'
        ];
    }
  };

  const handleFakeSubmit = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FCFBFF] flex flex-col">
      <Navbar onOpenAuth={onOpenAuth} />

      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Back Link */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              to="/#services-section"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#6546F5] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Services</span>
            </Link>

            <span className="text-xs font-bold text-[#6546F5] bg-[#EEF0FE] px-3 py-1 rounded-full">
              Category: Academic Delivery
            </span>
          </div>

          {/* Hero Banner for this Service */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-50/70 rounded-bl-full pointer-events-none -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      TaskMint Service Specification
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111936]">
                      {service.title}
                    </h1>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#64708A] leading-relaxed max-w-2xl mt-2">
                  {service.details}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-[#6546F5]" />
                    Fastest Delivery: {service.turnaround}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    Free Revisions Included
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-full">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Starting from {service.priceStarting}
                  </span>
                </div>
              </div>

              {/* Quick Jump Action */}
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="#order-form"
                  className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-[#6546F5] hover:bg-[#5335E2] text-white font-bold text-sm shadow-md shadow-[#6546F5]/30 transform hover:-translate-y-0.5 transition-all"
                >
                  Configure & Request Task
                </a>
              </div>
            </div>
          </div>

          {/* Two Columns: Specifications & Interactive Request Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: What's Included */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-xl font-bold text-[#111936] mb-5 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#6546F5]" />
                  What You Receive With {service.title}
                </h2>
                <ul className="space-y-4">
                  {getSpecificHighlights().map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm text-slate-700 leading-relaxed font-medium">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step By Step Preparation Guarantee */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-[#111936] mb-4">
                  How We Prepare Your {service.title}
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-[#64708A]">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#111936] block mb-1">1. Requirement Alignment</span>
                    Our specialist reviews your submitted assignment guidelines, teacher's expectations, and deadlines.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#111936] block mb-1">2. Drafting & Verification</span>
                    The content, figures, and calculations are crafted from scratch without boilerplate shortcuts.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-[#111936] block mb-1">3. Final Polish & Delivery</span>
                    Clean formatting, spellcheck, layout check, and file preparation delivered directly to your portal.
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Interactive Order Configuration Form */}
            <div id="order-form" className="lg:col-span-5 scroll-mt-28">
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-purple-200/80 shadow-card sticky top-28">
                
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#6546F5] uppercase tracking-wider">
                    Instant Task Request
                  </span>
                  <h3 className="text-xl font-black text-[#111936] mt-1">
                    Order {service.title}
                  </h3>
                  <p className="text-xs text-[#64708A] mt-1">
                    Fill in your initial requirements to receive an instant estimate.
                  </p>
                </div>

                {orderSubmitted ? (
                  <div className="py-8 text-center space-y-4 bg-emerald-50/50 rounded-2xl border border-emerald-200/60 p-6 animate-in zoom-in-95 duration-200">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-[#111936]">
                      Task Request Received!
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thank you! In this prototype, our academic coordinator would now review your "{topic || service.title}" topic and send a WhatsApp confirmation with the exact quote.
                    </p>
                    <button
                      onClick={() => setOrderSubmitted(false)}
                      className="px-5 py-2 text-xs font-bold text-[#6546F5] bg-white border border-purple-200 rounded-full hover:bg-purple-50 transition-colors cursor-pointer"
                    >
                      Configure Another Task
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFakeSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Topic or Subject Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g. Distributed Database Systems / Lab 4"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6546F5] focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Estimated Size
                        </label>
                        <select
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#6546F5] focus:bg-white"
                        >
                          <option value={5}>5 Units / Pages</option>
                          <option value={10}>10 Units / Pages</option>
                          <option value={15}>15 Units / Pages</option>
                          <option value={20}>20+ Units / Pages</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Deadline Need
                        </label>
                        <select
                          value={urgency}
                          onChange={(e) => setUrgency(e.target.value)}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#6546F5] focus:bg-white"
                        >
                          <option value="6h">Within 6 Hours (Express)</option>
                          <option value="12h">Within 12 Hours</option>
                          <option value="24h">24 Hours (Standard)</option>
                          <option value="48h">2-3 Days</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Specific Guidelines / Instructions
                      </label>
                      <textarea
                        rows={3}
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="Mention reference styles, ink color, slide count, or professor preferences..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#6546F5] focus:bg-white resize-none"
                      />
                    </div>

                    {/* Simulated File Upload Dropzone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Attach Syllabus, Rubric, or Notes (Optional)
                      </label>
                      <label className="border-2 border-dashed border-slate-200 hover:border-[#6546F5] rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer bg-slate-50 hover:bg-purple-50/30 transition-colors">
                        <UploadCloud className="w-5 h-5 text-slate-400 mb-1" />
                        <span className="text-xs text-slate-600 font-medium">
                          {fileName ? fileName : 'Click to select PDF or image files'}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                        />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl bg-[#6546F5] hover:bg-[#5335E2] text-white font-bold text-sm shadow-md shadow-[#6546F5]/30 flex items-center justify-center gap-2 transition-all mt-4 cursor-pointer"
                    >
                      <span>Submit Task Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] text-center text-slate-400 mt-2">
                      Zero payment required until you review the final quote.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
