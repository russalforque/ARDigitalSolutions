import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function ServiceList() {
  return (
    <div>
      {services.map((service, index) => (
        <div
          key={service.id}
          style={{
            '--delay': `${index * 100}ms`
          } as React.CSSProperties}
        >
          <ServiceCard
            service={service}
          />
        </div>
      ))}
    </div>
  );
}