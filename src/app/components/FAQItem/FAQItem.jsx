"use client";
import React, { useRef, useEffect, useState } from "react";
import { PiMinusThin, PiPlusThin } from "react-icons/pi";

const FAQItem = ({ question, answer, id, openId, onToggle }) => {
  const contentRef = useRef(null);
  const isOpen = openId === id;
  const [inlineStyle, setInlineStyle] = useState({
    height: "0px",
    overflow: "hidden",
  });

  useEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    if (isOpen) {
      // Step 1: Set to scrollHeight for animation
      setInlineStyle({
        height: `${content.scrollHeight}px`,
        overflow: "hidden",
      });

      // Step 2: After animation done, set to auto to allow resizing
      const timeout = setTimeout(() => {
        setInlineStyle({
          height: "auto",
          overflow: "visible",
        });
      }, 500); // should match transition duration

      return () => clearTimeout(timeout);
    } else {
      // Collapse animation
      setInlineStyle({
        height: `${content.scrollHeight}px`,
        overflow: "hidden",
      });

      // Trigger reflow
      requestAnimationFrame(() => {
        setInlineStyle({
          height: "0px",
          overflow: "hidden",
        });
      });
    }
  }, [isOpen]);

  return (
    <div
      className="border border-border bg-bg-muted p-2 backdrop-blur transition-all md:p-4 lg:p-8"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay={`${id * 200}`}
    >
      <div
        onClick={() => onToggle(id)}
        className="flex cursor-pointer items-center justify-between"
      >
        <h5 className="w-11/12 text-base text-text md:text-h6 lg:text-h5">
          {question}
        </h5>
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-bg-muted">
          {isOpen ? (
            <PiMinusThin className="font-light text-icon" />
          ) : (
            <PiPlusThin className="font-light text-icon" />
          )}
        </div>
      </div>

      <div
        ref={contentRef}
        className="font-chillax text-sm text-text-muted transition-all duration-500 ease-in-out"
        style={{
          ...inlineStyle,
          paddingTop: isOpen ? "1rem" : "0",
        }}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQItem;
