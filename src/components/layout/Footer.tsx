import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { company } from "../../data/company";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pb-24 md:pb-0">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Brand */}
          <div>
            <p className="text-sm font-medium text-neutral-400">
              AR DIGITAL SOLUTIONS
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Let's build something that matters.
            </h2>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 border-b border-white pb-2 text-sm"
            >
              Start a conversation
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {/* Explore */}
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-neutral-600">
                Explore
              </p>

              <div className="flex flex-col gap-3 text-sm text-neutral-400">
                <Link
                  to="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="transition hover:text-white"
                >
                  About
                </Link>

                <Link
                  to="/services"
                  className="transition hover:text-white"
                >
                  Services
                </Link>

                <Link
                  to="/projects"
                  className="transition hover:text-white"
                >
                  Projects
                </Link>

                <Link
                  to="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-neutral-600">
                Social
              </p>

              <div className="flex flex-col gap-3 text-sm text-neutral-400">
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 transition-colors duration-300 hover:text-white active:text-white visited:text-neutral-400"
                >
                  Instagram
                </a>

                <a
                  href={company.social.linkedin}
                                    target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 transition-colors duration-300 hover:text-white active:text-white visited:text-neutral-400"
                >
                  LinkedIn
                </a>

                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 transition-colors duration-300 hover:text-white active:text-white visited:text-neutral-400"
                >
                  Facebook
                </a>

                <a
                  href={company.social.github}
                                    target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 transition-colors duration-300 hover:text-white active:text-white visited:text-neutral-400"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-neutral-600">
                Contact
              </p>

              <div className="flex flex-col gap-3 text-sm text-neutral-400">
                <a
                  href={`mailto:${company.email}`}
                  className="text-neutral-400 transition-colors duration-300 hover:text-white active:text-white visited:text-neutral-400"
                >
                  {company.email}
                </a>

                <span>{company.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-600 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {company.name}
          </span>

          <span>
            Designed & built for the future.
          </span>
        </div>
      </Container>
    </footer>
  );
}