import React from "react";
import FAQItem from "../FAQItem/FAQItem";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the typical turnaround time for a website project?",
      answer:
        "The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.",
    },

    {
      question:
        "Can you help with website maintenance and updates after the project is completed?",
      answer:
        "The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.",
    },

    {
      question:
        "How do you ensure that my website will be optimized for search engines?",
      answer:
        "The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.",
    },

    {
      question: "What is your process for website design and development?",
      answer:
        "The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 pb-10 font-satoshi md:gap-8 md:pb-20 lg:grid-cols-2 lg:gap-12 lg:pb-40">
      <aside>
        <p
          className="mb-2 text-meta text-text-muted"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          FAQ
        </p>
        <h1
          className="text-h3 md:text-heading-sm lg:text-heading-md"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Common <i className="font-gambetta">Questions</i>
        </h1>
      </aside>

      <aside className="flex flex-col gap-4">
        {faqs.map((item, key) => (
          <FAQItem key={key} {...item} id={key} />
        ))}
      </aside>
    </div>
  );
};

export default FAQ;
