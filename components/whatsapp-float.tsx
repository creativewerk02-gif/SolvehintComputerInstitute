import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348060452393";
  const message = encodeURIComponent("Hello SolveHint, I would like to enquire about your programmes.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with SolveHint on WhatsApp"
      className="whatsapp-float"
    >
      <MessageCircle size={24} />
    </a>
  );
}
