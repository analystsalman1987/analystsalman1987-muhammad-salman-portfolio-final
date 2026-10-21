import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Linkedin, 
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
    <section id="contact" className="misty-portfolio relative py-20 bg-[#305879] border-b border-[#C5D5E2] transition-colors overflow-hidden" style={{ backgroundColor: '#305879' }}>

      <style>{`
        #contact { background-color: #305879 !important; }
        #contact .contact-intro { color:#F3F7FA !important; -webkit-text-fill-color:#F3F7FA !important; opacity:1 !important; }
        #contact .contact-info-card, #contact .contact-form-card {
          background-color:#254866 !important;
          border-color:#52718A !important;
          color:#F3F7FA !important;
        }
        #contact .contact-info-card:hover { border-color:#BE9852 !important; background-color:#2A5070 !important; }
        #contact .contact-info-card span, #contact .contact-form-card h3,
        #contact .contact-form-card p, #contact .contact-form-card label {
          color:#F3F7FA !important; -webkit-text-fill-color:#F3F7FA !important;
        }
        #contact .contact-info-card .contact-info-label,
        #contact .contact-form-card h3 {
          color:#E5C78E !important; -webkit-text-fill-color:#E5C78E !important;
        }
        #contact .contact-info-card a:hover, #contact .contact-info-card a:hover span { color:#E5C78E !important; }
        #contact .contact-field {
          background-color:#1E3A56 !important; color:#F3F7FA !important;
          -webkit-text-fill-color:#F3F7FA !important; border-color:#7895AA !important;
        }
        #contact .contact-field::placeholder {
          color:#C5D5E2 !important; -webkit-text-fill-color:#C5D5E2 !important; opacity:1;
        }
        #contact .contact-field:focus { border-color:#BE9852 !important; }
        #contact .contact-form-card button[type="button"] { color:#E5C78E !important; }
        #contact .contact-form-card button[type="submit"] { color:white !important; }
        #contact .contact-form-card .bg-rose-50 { background-color:#7F1D1D !important; }
        #contact .contact-form-card .bg-rose-50 span { color:#FFF1F2 !important; -webkit-text-fill-color:#FFF1F2 !important; }
      `}</style>
      {/* Subtle Modern Corporate Business Communication Workspace Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <img 
          src="/images/contact_business_workspace.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.14] filter contrast-105 select-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#305879]/95 via-[#305879]/90 to-[#305879]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Vertical Stack (Label above Heading) */}
        <div className="flex flex-col items-start gap-1.5 max-w-3xl mb-12">
          <span className="block text-xs font-bold tracking-widest text-[#BE9852] uppercase">
            {isRTL ? t.tag : 'Get In Touch'}
          </span>
          <div>
            <h2 className="main-heading-3d text-3xl font-extrabold sm:text-4xl tracking-tight text-[#17324A]">
              {isRTL ? t.title : 'Contact Information'}
            </h2>
          </div>
          <p className="contact-intro mt-1 text-sm text-[#F3F7FA]">
            {isRTL ? t.subtitle : 'Available for professional accounting, finance management, and corporate opportunities across Saudi Arabia.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Contact Direct Cards (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${profile.email}`}
              className="contact-info-card p-5 rounded-2xl bg-[#254866] border border-[#52718A] hover:border-[#BE9852]/50 shadow-xs transition-all flex items-start gap-4 group block"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F3F7FA] text-[#BE9852] border border-[#C5D5E2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="contact-info-label text-[11px] font-bold text-[#E5C78E] uppercase tracking-wider block">
                  {isRTL ? t.emailLabel : 'Email Address'}
                </span>
                <span className="text-sm font-semibold text-[#17324A] group-hover:text-[#BE9852] transition-colors break-all">
                  {profile.email}
                </span>
                <span className="text-xs text-[#52677A] block mt-0.5">
                  {isRTL ? t.emailSub : 'Direct primary correspondence'}
                </span>
              </div>
            </a>

            {/* LinkedIn profile — added without changing existing contact cards. */}
            <a
              href="https://www.linkedin.com/in/muhammad-salman-mba-finance-cpa-finalist-66908767/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card p-5 rounded-2xl bg-[#254866] border border-[#52718A] hover:border-[#BE9852]/50 shadow-xs transition-all flex items-start gap-4 group block"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F3F7FA] text-[#0A66C2] border border-[#C5D5E2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="contact-info-label text-[11px] font-bold text-[#E5C78E] uppercase tracking-wider block">LinkedIn</span>
                <span className="text-sm font-semibold text-[#F3F7FA] break-words">{isRTL ? 'الملف الشخصي المهني' : 'View Professional Profile'}</span>
                <span className="text-xs text-[#C5D5E2] block mt-0.5">{isRTL ? 'فتح في علامة تبويب جديدة' : 'Opens in a new tab'}</span>
              </div>
            </a>

            {/* Primary Phone Card */}
            <a
              href={`tel:${profile.primaryPhone.replace(/\s+/g, '')}`}
              className="contact-info-card p-5 rounded-2xl bg-[#254866] border border-[#52718A] hover:border-[#BE9852]/50 shadow-xs transition-all flex items-start gap-4 group block"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F3F7FA] text-[#BE9852] border border-[#C5D5E2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="contact-info-label text-[11px] font-bold text-[#E5C78E] uppercase tracking-wider block">
                  {isRTL ? t.phoneLabel : 'Primary Mobile / WhatsApp'}
                </span>
                <span className="text-sm font-semibold text-[#17324A] group-hover:text-[#BE9852] transition-colors" dir="ltr">
                  {profile.primaryPhone}
                </span>
                <span className="text-xs text-[#52677A] block mt-0.5">
                  {isRTL ? t.phoneSub : 'Direct phone & messaging'}
                </span>
              </div>
            </a>

            {/* Alternative Phone Card */}
            <a
              href={`tel:${profile.altPhone.replace(/\s+/g, '')}`}
              className="contact-info-card p-5 rounded-2xl bg-[#254866] border border-[#52718A] hover:border-[#BE9852]/50 shadow-xs transition-all flex items-start gap-4 group block"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F3F7FA] text-[#BE9852] border border-[#C5D5E2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="contact-info-label text-[11px] font-bold text-[#E5C78E] uppercase tracking-wider block">
                  {isRTL ? t.altPhoneLabel : 'Alternative Phone'}
                </span>
                <span className="text-sm font-semibold text-[#17324A] group-hover:text-[#BE9852] transition-colors" dir="ltr">
                  {profile.altPhone}
                </span>
                <span className="text-xs text-[#52677A] block mt-0.5">
                  {isRTL ? t.altPhoneSub : 'Secondary contact line'}
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="contact-info-card p-5 rounded-2xl bg-[#254866] border border-[#52718A] shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#F3F7FA] text-[#BE9852] border border-[#C5D5E2] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="contact-info-label text-[11px] font-bold text-[#E5C78E] uppercase tracking-wider block">
                  {isRTL ? t.locationLabel : 'Location'}
                </span>
                <span className="text-sm font-semibold text-[#17324A]">
                  {isRTL ? 'الدمام، المملكة العربية السعودية' : profile.location}
                </span>
                <span className="text-xs text-[#52677A] block mt-0.5">
                  {isRTL ? t.locationSub : 'Eastern Province, Kingdom of Saudi Arabia'}
                </span>
              </div>
            </div>

            {/* Driving License Card */}
            {profile.drivingLicense && (
              <div className="contact-info-card p-5 rounded-2xl bg-[#254866] border border-[#52718A] shadow-xs flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#F3F7FA] text-[#BE9852] border border-[#C5D5E2] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="contact-info-label text-[11px] font-bold text-[#E5C78E] uppercase tracking-wider block">
                    {isRTL ? t.licenseLabel : 'Driving License'}
                  </span>
                  <span className="text-sm font-semibold text-[#17324A]">
                    {isRTL ? 'إقامة قابلة للتحويل | رخصة قيادة سعودية سارية' : profile.drivingLicense}
                  </span>
                  <span className="text-xs text-[#52677A] block mt-0.5">
                    {isRTL ? t.licenseSub : 'Authorized in Kingdom of Saudi Arabia'}
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7 self-start">
            <div className="contact-form-card p-5 sm:p-6 rounded-2xl bg-[#254866] border border-[#52718A] shadow-sm">
              
              <div className="mb-4">
                <h3 className="text-lg font-bold text-[#17324A]">
                  {isRTL ? t.formTitle : 'Send a Message'}
                </h3>
                <p className="text-xs text-[#52677A] mt-0.5">
                  {isRTL ? t.formSub : 'Feel free to send a message directly or open your email client.'}
                </p>
              </div>

              {submitted ? (
                <div className="p-5 text-center space-y-3.5 rounded-xl bg-[#F3F7FA] border border-[#BE9852]/40">
                  <div className="w-11 h-11 rounded-full bg-white text-[#BE9852] border border-[#C5D5E2] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#17324A]">
                      {isRTL ? t.successTitle : 'Thank you. Your message has been sent successfully.'}
                    </h4>
                    <p className="text-xs text-[#52677A] mt-1 max-w-md mx-auto">
                      {isRTL ? t.successSub : 'Your message has been delivered directly to Muhammad Salman. I will get back to you as soon as possible.'}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 justify-center pt-1.5">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2 rounded-lg bg-white text-[#17324A] text-xs font-semibold border border-[#C5D5E2] hover:bg-[#F3F7FA] hover:border-[#BE9852]/50 transition-colors cursor-pointer"
                    >
                      {isRTL ? t.writeAnotherBtn : 'Send Another Message'}
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenEmailClient}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[#BE9852] hover:bg-[#BE9852]/10 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{isRTL ? t.directEmailBtn : 'Direct Email Client'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {error && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-[#17324A] mb-1">
                        {isRTL ? t.nameLabel : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSending}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isRTL ? t.namePlaceholder : 'e.g. Abdullah Al-Harbi'}
                        className="contact-field w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#1E3A56] border border-[#7895AA] text-[#F3F7FA] placeholder-[#B7C9D9] focus:outline-none focus:ring-2 focus:ring-[#BE9852] disabled:opacity-60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17324A] mb-1">
                        {isRTL ? t.emailInputLabel : 'Your Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSending}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={isRTL ? t.emailPlaceholder : 'name@company.com'}
                        className="contact-field w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#1E3A56] border border-[#7895AA] text-[#F3F7FA] placeholder-[#B7C9D9] focus:outline-none focus:ring-2 focus:ring-[#BE9852] disabled:opacity-60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#17324A] mb-1">
                      {isRTL ? t.subjectLabel : 'Subject'}
                    </label>
                    <input
                      type="text"
                      disabled={isSending}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={isRTL ? t.subjectPlaceholder : 'e.g. Professional Accounting Opportunity'}
                      className="contact-field w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#1E3A56] border border-[#7895AA] text-[#F3F7FA] placeholder-[#B7C9D9] focus:outline-none focus:ring-2 focus:ring-[#BE9852] disabled:opacity-60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#17324A] mb-1">
                      {isRTL ? t.messageLabel : 'Message *'}
                    </label>
                    <textarea
                      required
                      disabled={isSending}
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isRTL ? t.messagePlaceholder : 'Write your inquiry or proposal here...'}
                      className="contact-field w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#1E3A56] border border-[#7895AA] text-[#F3F7FA] placeholder-[#B7C9D9] focus:outline-none focus:ring-2 focus:ring-[#BE9852] resize-none disabled:opacity-60 transition-colors"
                    />
                  </div>

                  <div className="pt-1.5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSending}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#BE9852] hover:bg-[#A8823C] text-white font-semibold text-xs transition-all shadow-xs cursor-pointer ${
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
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg text-[#BE9852] hover:bg-[#BE9852]/10 text-xs font-semibold transition-colors cursor-pointer"
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
