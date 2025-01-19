import React, { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const isAccordionOpen = (index) => {
    return activeIndex === index;
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
    {
      question: "How does billing work?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  return (
    <>
      <div className="sm:gap-[1.94rem] gap-[3.88rem] flex flex-col">
        <div className="sm:px-[1.25rem] px-[2.00rem]">
          <div className="md:px-[1rem] px-[3.50rem] flex justify-center">
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
          className="mx-[16.00rem] gap-[2.00rem] flex flex-col "
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
                          aria-level="3"
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
                              <p className="text-[1.13rem] !text-gray-900-1">
                                {item.question}
                              </p>
                              <IconButton className="px-[0.13rem] w-[1.50rem] h-[1.50rem]">
                                {activeIndex === index ? (
                                  <AddCircleOutlineIcon />
                                ) : (
                                  <RemoveCircleOutlineIcon />
                                )}
                              </IconButton>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`accordion__panel transition-all duration-300 ease-in-out ${
                            activeIndex === index
                              ? "max-h-[1000px] opacity-100"
                              : "max-h-[0px] opacity-0"
                          }`}
                          id={`accordion__panel-${index}`}
                          data-accordion-component="AccordionItemPanel"
                          style={{ overflow: "hidden" }}
                        >
                          <div className="flex justify-center">
                            <p className="leading-[1.50rem] text-[1.00rem] w-[94%] font-normal !text-gray-600">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[16px] sm:p-[1.25rem] mx-[2.00rem] p-[2.00rem] gap-[2.00rem] flex flex-col items-center bg-gray-50 md:mx-0">
        <div className="w-[10%] flex justify-center md:w-full">
          <div className="flex w-full items-center">
            <div className="flex flex-1 items-center">
              <div
                className="rounded-full border-[1.5px] h-[3.00rem] w-[3.00rem] flex items-center justify-center border-solid border-base-white bg-cover bg-no-repeat md:h-auto"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                  borderRadius: "20px",
                }}
              ></div>
              <div
                className="rounded-full border-[1.5px] ml-[-1.00rem] h-[3.50rem] w-[3.50rem] flex items-center justify-center border-solid border-base-white bg-cover bg-no-repeat md:h-auto"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                  borderRadius: "20px",
                }}
              ></div>
            </div>
            <div
              className="rounded-full border-[1.5px] ml-[-1.00rem] h-[3.00rem] w-[3.00rem] flex items-center justify-center border-solid border-base-white bg-cover bg-no-repeat md:h-auto"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600')`,
                borderRadius: "20px",
              }}
            ></div>
          </div>
        </div>
        <div className="md:px-[1.25rem] px-[3.50rem] gap-[0.63rem] flex flex-col items-center justify-center">
          <h3 className="text-[1.25rem] font-semibold !text-gray-900-1">
            Still have questions?
          </h3>
          <p className="text-[1.13rem] font-normal !text-gray-600">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <button className="min-w-[8.38rem] h-[3.00rem] px-[1.25rem] rounded-lg border border-red-600 font-semibold flex items-center justify-center text-center cursor-pointer whitespace-nowrap text-[1.00rem] bg-red-600 shadow-xs text-white">
          Get in touch
        </button>
      </div>
    </>
  );
};

export default Question;
