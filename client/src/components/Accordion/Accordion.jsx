import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './Accordion.css'

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    {
      title: "🛍️ Shopping",
      items: ["Vinterjackor", "Pufferjackor", "Kappa", "Trenchcoats"],
    },
    {
      title: "🙋 Mina Sidor",
      items: ["Mina Ordrar", "Mitt Konto"],
    },
    {
      title: "📞 Kundtjänst",
      items: ["Returnpolicy", "Integritetspolicy"],
    },
  ];

  return (
    <div className="container">
      <div className="emoji-container">
        <div>🌍 Gratis frakt och returer</div>
        <div>✈️ Expressfrakt</div>
        <div>🛡 Säkra betalningar</div>
        <div>😊 Nyheter varje dag</div>
      </div>

      <div className="accordion">
        {categories.map((category, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              {category.title}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <div className="accordion-content">
                {category.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
