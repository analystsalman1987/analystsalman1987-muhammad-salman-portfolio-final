import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  ExternalLink, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ARABIC_TRANSLATIONS } from '../data/arabicData';

const EMAILJS_SERVICE_ID = 'service_fqct4gb';
const EMAILJS_TEMPLATE_ID = 'template_ehsko0q';
const EMAILJS_PUBLIC_KEY = '8DizP-tGFpiCAMLX0';

interface ContactProps {
  profile: ProfileInfo;
  onSendMessage?: (msg: { name: string; email: string; message: string; subject?: string }) => void;
}

export function Contact({ profile }: ContactProps) {
  const { isRTL } = useLanguage();
  const t = ARABIC_TRANSLATIONS.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const trimmedSubject = formData.subject.trim() || (isRTL ? 'استفسار مهني - محمد سلمان' : 'Professional Inquiry - Muhammad Salman');

    // Field presence validation
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError(isRTL ? t.fillRequiredError : 'Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    // Email format validation
    if (!isValidEmail(trimmedEmail)) {
      setError(isRTL ? t.invalidEmailError : 'Please provide a valid email address.');
      return;
    }

    setIsSending(true);
    setError(null);

    try {
      const templateParams = {
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      // Successful delivery confirmed by EmailJS
      setSubmitted(true);
      setError(null);
      // Clear entered information on success
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      // In case of error, preserve entered input and show professional message
      setError(isRTL ? t.sendFailedError : 'Sorry, your message could not be sent. Please try again or contact me directly by email.');
    } finally {
      setIsSending(false);
    }
  };

  const handleOpenEmailClient = () => {
    const defaultSubject = isRTL ? 'استفسار مهني - محمد سلمان' : 'Professional Inquiry - Muhammad Salman';
    const subject = encodeURIComponent(formData.subject || defaultSubject);
    const body = encodeURIComponent(
      `Hello Muhammad,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setError(null);
  };

  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
      {/* Subtle Modern Corporate Business Communication Workspace Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img 
          src="/images/contact_business_workspace.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.22] dark:opacity-[0.16] filter contrast-105 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/50 to-white/90 dark:from-slate-900/85 dark:via-slate-900/55 dark:to-slate-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400 uppercase">
            {isRTL ? t.tag : 'Get In Touch'}
          </span>
          <h2 className="company-3d-text mt-1 text-3xl font-extrabold text-[#0F2747] dark:text-white sm:text-4xl tracking-tight">
            {isRTL ? t.title : 'Contact Information'}
          </h2>
          <p className="mt-2 text-sm text-[#64748B] dark:text-slate-400">
            {isRTL ? t.subtitle : 'Available for professional accounting, finance management, and corporate opportunities across Saudi Arabia.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Contact Direct Cards (Left) */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between gap-3.5 sm:gap-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${profile.email}`}
              className="p-5 rounded-2xl bg-[#F4F6F8] dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-[#0F766E]/50 transition-all flex items-start gap-4 group block"
            >
              <div className="w-11 h-11 rounded-xl bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-500 uppercase tracking-wider block">
                  {isRTL ? t.emailLabel : 'Email Address'}
                </span>
                <span className="text-sm font-semibold text-[#0F2747] dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors break-all">
                  {profile.email}
                </span>
                <span className="text-xs text-[#64748B] dark:text-slate-400 block mt-0.5">
                  {isRTL ? t.emailSub : 'Direct primary correspondence'}
                </span>
              </div>
            </a>

            {/* Primary Phone Card */}
            <a
              href={`tel:${profile.primaryPhone.replace(/\s+/g, '')}`}
              className="p-5 rounded-2xl bg-[#F4F6F8] dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-[#0F766E]/50 transition-all flex items-start gap-4 group block"
            >
              <div className="w-11 h-11 rounded-xl bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-500 uppercase tracking-wider block">
                  {isRTL ? t.phoneLabel : 'Primary Mobile / WhatsApp'}
                </span>
                <span className="text-sm font-semibold text-[#0F2747] dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors" dir="ltr">
                  {profile.primaryPhone}
                </span>
                <span className="text-xs text-[#64748B] dark:text-slate-400 block mt-0.5">
                  {isRTL ? t.phoneSub : 'Direct phone & messaging'}
                </span>
              </div>
            </a>

            {/* Alternative Phone Card */}
            <a
              href={`tel:${profile.altPhone.replace(/\s+/g, '')}`}
              className="p-5 rounded-2xl bg-[#F4F6F8] dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-[#0F766E]/50 transition-all flex items-start gap-4 group block"
            >
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 text-[#0F766E] dark:text-teal-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-500 uppercase tracking-wider block">
                  {isRTL ? t.altPhoneLabel : 'Alternative Phone'}
                </span>
                <span className="text-sm font-semibold text-[#0F2747] dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-teal-400 transition-colors" dir="ltr">
                  {profile.altPhone}
                </span>
                <span className="text-xs text-[#64748B] dark:text-slate-400 block mt-0.5">
                  {isRTL ? t.altPhoneSub : 'Secondary contact line'}
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-[#F4F6F8] dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-500 uppercase tracking-wider block">
                  {isRTL ? t.locationLabel : 'Location'}
                </span>
                <span className="text-sm font-semibold text-[#0F2747] dark:text-white">
                  {isRTL ? 'الدمام، المملكة العربية السعودية' : profile.location}
                </span>
                <span className="text-xs text-[#64748B] dark:text-slate-400 block mt-0.5">
                  {isRTL ? t.locationSub : 'Eastern Province, Kingdom of Saudi Arabia'}
                </span>
              </div>
            </div>

            {/* Driving License Card */}
            {profile.drivingLicense && (
              <div className="p-5 rounded-2xl bg-[#F4F6F8] dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E6F4F1] dark:bg-teal-950/70 text-[#0F766E] dark:text-teal-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#64748B] dark:text-slate-500 uppercase tracking-wider block">
                    {isRTL ? t.licenseLabel : 'Driving License'}
                  </span>
                  <span className="text-sm font-semibold text-[#0F2747] dark:text-white">
                    {isRTL ? 'إقامة قابلة للتحويل | رخصة قيادة سعودية سارية' : profile.drivingLicense}
                  </span>
                  <span className="text-xs text-[#64748B] dark:text-slate-400 block mt-0.5">
                    {isRTL ? t.licenseSub : 'Authorized in Kingdom of Saudi Arabia'}
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7 h-full flex flex-col">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F4F6F8] dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex-1 flex flex-col justify-between">
              
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-lg font-bold text-[#0F2747] dark:text-white">
                    {isRTL ? t.formTitle : 'Send a Message'}
                  </h3>
                  <p className="text-xs text-[#64748B] dark:text-slate-400 mt-0.5">
                    {isRTL ? t.formSub : 'Feel free to send a message directly or open your email client.'}
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="p-6 text-center space-y-4 rounded-xl bg-[#E6F4F1] dark:bg-teal-950/40 border border-[#0F766E]/30 dark:border-teal-800">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-teal-900/60 text-[#0F766E] dark:text-teal-400 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0F2747] dark:text-teal-200">
                      {isRTL ? t.successTitle : 'Thank you. Your message has been sent successfully.'}
                    </h4>
                    <p className="text-xs text-[#0F766E] dark:text-teal-300 mt-1 max-w-md mx-auto">
                      {isRTL ? t.successSub : 'Your message has been delivered directly to Muhammad Salman. I will get back to you as soon as possible.'}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center pt-2">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 text-[#1F2937] dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 hover:bg-[#F4F6F8] dark:hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      {isRTL ? t.writeAnotherBtn : 'Send Another Message'}
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenEmailClient}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[#0F766E] dark:text-teal-300 hover:bg-[#E6F4F1]/60 dark:hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{isRTL ? t.directEmailBtn : 'Direct Email Client'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1F2937] dark:text-slate-300 mb-1.5">
                        {isRTL ? t.nameLabel : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSending}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isRTL ? t.namePlaceholder : 'e.g. Abdullah Al-Harbi'}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#1F2937] dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F766E] disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1F2937] dark:text-slate-300 mb-1.5">
                        {isRTL ? t.emailInputLabel : 'Your Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSending}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={isRTL ? t.emailPlaceholder : 'name@company.com'}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#1F2937] dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F766E] disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] dark:text-slate-300 mb-1.5">
                      {isRTL ? t.subjectLabel : 'Subject'}
                    </label>
                    <input
                      type="text"
                      disabled={isSending}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={isRTL ? t.subjectPlaceholder : 'e.g. Professional Accounting Opportunity'}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#1F2937] dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F766E] disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] dark:text-slate-300 mb-1.5">
                      {isRTL ? t.messageLabel : 'Message *'}
                    </label>
                    <textarea
                      required
                      disabled={isSending}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isRTL ? t.messagePlaceholder : 'Write your inquiry or proposal here...'}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[#1F2937] dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F766E] resize-none disabled:opacity-60"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSending}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0F766E] hover:bg-[#0c625c] text-white font-semibold text-xs transition-all shadow-xs cursor-pointer ${
                        isSending ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSending ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{isRTL ? t.sendingBtn : 'Sending...'}</span>
                        </>
                      ) : (
                        <>
                          <Send className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                          <span>{isRTL ? t.submitBtn : 'Send Message'}</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleOpenEmailClient}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-[#0F766E] dark:text-teal-300 hover:bg-[#E6F4F1]/60 dark:hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{isRTL ? t.directEmailBtn : 'Direct Email Client'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
