import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../../types/service";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <Link 
      to={`/services/${service.id}`} 
      className="block group opacity-0 translate-y-2 transition-all duration-700 ease-out animate-[fadeInUp_0.7s_ease-out_forwards]"
      style={{
        animationDelay: 'var(--delay, 0ms)'
      }}
    >
      {/* Card Container */}
      <article className="border-t border-white/10 py-6 sm:py-8 md:py-10 cursor-pointer px-4 sm:px-6 -mx-4 sm:-mx-6 rounded transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:bg-white/[0.03] group-hover:shadow-sm active:scale-[0.98]">
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-[50px_1fr] lg:grid-cols-[80px_1fr_1fr_40px]">
          {/* Number/Badge */}
          <span className="text-xs text-neutral-600 transition-colors duration-300 ease-out group-hover:text-neutral-400">
            {service.number}
          </span>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight col-span-1 sm:col-span-1 text-white transition-colors duration-300 ease-out group-hover:text-neutral-50">
            {service.title}
          </h2>

          {/* Description & Features */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 transition-all duration-300 ease-out">
            {/* Description Text */}
            <p className="text-xs sm:text-sm md:text-sm leading-6 sm:leading-7 text-neutral-400 transition-colors duration-300 ease-out group-hover:text-neutral-300">
              {service.description}
            </p>

            {/* Feature Tags */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
              {service.features.map((feature, index) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/10 px-2 sm:px-3 py-1 sm:py-1.5 text-xs text-neutral-500 transition-all duration-300 ease-out group-hover:border-white/30 group-hover:text-neutral-300 group-hover:bg-white/[0.02]"
                  style={{
                    transitionDelay: `${index * 30}ms`
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow Icon */}
          <ArrowUpRight
            size={18}
            className="text-neutral-600 hidden sm:block justify-self-end transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110"
          />
        </div>
      </article>
    </Link>
  );
}