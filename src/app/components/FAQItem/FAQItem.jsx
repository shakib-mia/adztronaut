"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PiMinusThin, PiPlusThin } from "react-icons/pi";

const FAQItem = ({ question, answer, id }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  //   console.log(id);
  return (
    <div
      className="border border-border bg-bg-muted p-2 backdrop-blur transition-[height] duration-1000 md:p-4 lg:p-8"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay={`${id * 200}`}
    >
      <label className="flex cursor-pointer items-center justify-between">
        <input
          type="checkbox"
          className="hidden"
          onChange={(e) => setShowAnswer(e.target.checked)}
        />
        <h5 className="w-11/12 text-base text-text md:text-h6 lg:text-h5">
          {question}
        </h5>
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-bg-muted">
          {showAnswer ? (
            <PiMinusThin className="font-light text-icon" />
          ) : (
            <PiPlusThin className="font-light text-icon" />
          )}
        </div>
      </label>

      {showAnswer && (
        <p className="font-chillax mt-2 text-sm text-text-muted md:text">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
