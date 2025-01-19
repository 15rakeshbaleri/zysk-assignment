import React, { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  return (
    <div className="sm:gap-[1.94rem] gap-[3.88rem] flex flex-col">
      <div className="sm:px-[1.25rem] px-[2.00rem]">
        <div className="md:px-[1.25rem] px-[3.50rem] flex justify-center">
          <div className="md:px-[1.25rem] px-[3.50rem] gap-[1.38rem] flex flex-col items-center">
            <h2 className="sm:text-[2.00rem] md:text-[2.13rem] text-[2.25rem] tracking-[0.00rem] font-semibold !text-gray-900-1">
              Frequently Asked Questions
            </h2>
            <p className="text-[1.25rem] font-normal !text-gray-600">
              Everything you need to know about the product and billing.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mx-[16.00rem] gap-[2.00rem] flex flex-col md:mx-0"
        data-accordion-component="Accordion"
      >
        <div className="sm:gap-[1.94rem] gap-[3.88rem] flex flex-col">
          <div className="sm:px-[1.25rem] px-[2.00rem]">
            <div className="md:px-[1.25rem] px-[3.50rem] flex justify-center">
              <div className="md:px-[1.25rem] px-[3.50rem] gap-[1.38rem] flex flex-col items-center">
                {data.map((item, index) => (
                  <div
                    className="accordion__item mb-[1.50rem]"
                    key={index}
                    data-accordion-component="AccordionItem"
                  >
                    <div className="gap-[0.50rem] flex flex-1 flex-col">
                      <div
                        className="w-full"
                        role="heading"
                        aria-level="1"
                        data-accordion-component="AccordionItemHeading"
                      >
                        <div
                          className="accordion__button"
                          id={`accordion__heading-${index}`}
                          aria-expanded={activeIndex === index}
                          aria-controls={`accordion__panel-${index}`}
                          role="button"
                          tabIndex="0"
                          onClick={() => toggleAccordion(index)}
                          data-accordion-component="AccordionItemButton"
                        >
                          <div className="gap-[1.25rem] flex justify-between">
                            <p className="text-[1.13rem] font-medium !text-gray-900-1">
                              {item.question}
                            </p>
                            <IconButton className="px-[0.13rem] w-[1.50rem] h-[1.50rem]">
                              <RemoveCircleIcon />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                      {activeIndex === index && (
                        <div
                          className="accordion__panel"
                          id={`accordion__panel-${index}`}
                          data-accordion-component="AccordionItemPanel"
                        >
                          <div className="flex justify-center">
                            <p className="leading-[1.50rem] text-[1.00rem] w-[94%] font-normal !text-gray-600">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
