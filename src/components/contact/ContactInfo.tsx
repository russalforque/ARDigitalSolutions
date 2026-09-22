import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "../../data/company";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <Mail size={17} className="mt-1 shrink-0 text-neutral-600" />

        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-600">
            Email
          </p>

          <a
            href={`mailto:${company.email}`}
            className="text-lg text-neutral-300 transition-colors hover:text-white"
          >
            {company.email}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Phone size={17} className="mt-1 shrink-0 text-neutral-600" />

        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-600">
            Phone
          </p>

          <a
            href={`tel:${company.phone.replace(/\s+/g, "")}`}
            className="text-lg text-neutral-300 transition-colors hover:text-white"
          >
            {company.phone}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MapPin size={17} className="mt-1 shrink-0 text-neutral-600" />

        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-600">
            Location
          </p>

          <p className="text-lg text-neutral-300">{company.location}</p>
        </div>
      </div>
    </div>
  );
}
