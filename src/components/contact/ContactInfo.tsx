import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "../../data/company";

export default function ContactInfo() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-600">
          Email
        </p>

        <a
          href={`mailto:${company.email}`}
          className="text-lg text-neutral-300 hover:text-white"
        >
          {company.email}
        </a>

        <Mail
          size={17}
          className="mt-4 text-neutral-600"
        />
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-600">
          Phone
        </p>

        <p className="text-lg text-neutral-300">
          {company.phone}
        </p>

        <Phone
          size={17}
          className="mt-4 text-neutral-600"
        />
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-600">
          Location
        </p>

        <p className="text-lg text-neutral-300">
          {company.location}
        </p>

        <MapPin
          size={17}
          className="mt-4 text-neutral-600"
        />
      </div>
    </div>
  );
}