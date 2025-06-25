"use client";
import React, { useState } from "react";
import FAQItem from "../FAQItem/FAQItem";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqs = [
    {
      question: "What is the typical turnaround time for a website project?",
      answer:
        "The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. For simple websites like landing pages or portfolio sites, it can take anywhere from 1 to 2 weeks. For more complex sites involving custom development, integrations, or unique features, it may take 4 to 8 weeks or longer. The timeline also depends on how quickly we receive content and feedback from the client. We typically start with a detailed discovery phase to outline the requirements and set realistic deadlines. We then proceed through planning, design, development, testing, and final delivery. Throughout the process, we maintain constant communication with our clients to ensure transparency and timely updates. Our ultimate goal is to deliver a high-quality product without unnecessary delays while allowing space for collaboration and revisions where needed.",
    },
    {
      question:
        "Can you help with website maintenance and updates after the project is completed?",
      answer:
        "Yes, we provide full support for website maintenance and updates even after your project has been completed and launched. Our maintenance services include regular content updates, plugin and software updates, server uptime monitoring, security patches, performance optimization, and backups. We offer both on-demand and monthly maintenance plans tailored to your needs. Whether it’s updating blog content, fixing bugs, improving SEO, or handling technical issues, we’re here to ensure your site remains secure, fast, and up to date. Many clients choose to continue working with us long-term to keep their websites fresh and functioning properly. Our goal is to build ongoing relationships where clients can rely on us for any support or improvements needed after launch.",
    },
    {
      question:
        "How do you ensure that my website will be optimized for search engines?",
      answer:
        "We follow a comprehensive approach to ensure that your website is fully optimized for search engines from day one. This includes implementing clean, semantic HTML structure, fast-loading pages, mobile responsiveness, image optimization, and schema markup where appropriate. Additionally, we focus on keyword research to strategically include relevant terms in headings, content, meta titles, and descriptions. Our team configures SEO-friendly URLs, integrates tools like Google Analytics and Google Search Console, and ensures your site is indexed correctly. For CMS-powered websites, we configure plugins like Yoast or RankMath to help manage ongoing SEO. We also provide guidance on content strategy, blogging, and backlink building to further improve your organic rankings over time. The goal isn’t just to launch a beautiful site, but one that performs well in search and drives traffic consistently.",
    },
    {
      question: "What is your process for website design and development?",
      answer:
        "Our website design and development process is structured yet flexible to adapt to each client’s unique needs. It begins with a discovery phase where we understand your business goals, target audience, and design preferences. We then move into wireframing and mockups, presenting visual concepts for your feedback and revision. Once the design is approved, we move into development where we bring the designs to life using modern, scalable code practices—typically using frameworks like React, Next.js, or WordPress depending on the project. During development, we ensure your website is mobile-friendly, SEO-ready, and performance optimized. This is followed by a thorough QA and testing phase to catch any bugs across browsers and devices. Finally, we launch the site and provide support for deployment, training, and post-launch tweaks. At every stage, communication is key—our clients are involved and informed from start to finish.",
    },
  ];

  return (
    <div className="font-satoshi grid grid-cols-1 gap-4 pb-10 md:gap-8 md:pb-20 lg:grid-cols-2 lg:gap-12 lg:pb-40">
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
          <FAQItem
            key={key}
            id={key}
            question={item.question}
            answer={item.answer}
            openId={openId}
            onToggle={handleToggle}
          />
        ))}
      </aside>
    </div>
  );
};

export default FAQ;
