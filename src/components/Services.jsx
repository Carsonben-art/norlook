import '../styles/services.css'
import { FaUserMd, FaBed, FaSyringe, FaBrain, FaVials, FaHeartbeat } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { RiMedicineBottleLine } from "react-icons/ri";

const Services = () => {
  const services = [
    {
      icon: <FaUserMd />,
      title: "OutPatient Services",
      description: "Personalized consultations and care without hospital stays.",
    },
    {
      icon: <FaBed />,
      title: "Inpatient Services",
      description: "Comprehensive medical treatment in a comfortable environment.",
    },
    {
      icon: <FaSyringe />,
      title: "Immunization",
      description: "Protect your family with essential vaccinations for all ages.",
    },
    {
      icon: <FaBrain />,
      title: "Maternal and Child Health",
      description: "Comprehensive care for mothers and children.",
    },
    {
      icon: <FaVials />,
      title: "Screening",
      description: "Early detection and prevention with advanced diagnostics.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Laboratory Services",
      description: "Accurate and reliable diagnostic tests for your health needs.",
    },
    {
      icon: <GiMedicines />,
      title: "Pharmacy",
      description: "Quick access to prescribed medicines and expert guidance.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Counselling",
      description: "Professional support for mental well-being and personal growth.",
    },
    {
      icon: <RiMedicineBottleLine />,
      title: "Curative treatment",
      description: "Targeted solutions to restore your health and vitality.",
    },
  ];

  return (
    <section className="services-section" id='services'>
      <div className="services-container">
        <h3>Services</h3>
        <h2 className="services-title">Different types of department we have for your healthcare</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;