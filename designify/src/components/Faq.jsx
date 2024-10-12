import React, { useState } from "react";

const Faq = () => {
  const faqItems = [
    { question: "Can Designify be used for free?", answer: "Yes, Designify offers a free version with limited features." },
    { question: "Which image formats are supported?", answer: "Supported formats are JPEG, PNG, and SVG." },
    { question: "Are my images safe and secure?", answer: "Yes, your images are securely stored and processed." },
    { question: "Is Designify GDPR compliant?", answer: "Yes, we are fully GDPR compliant." },
    { question: "How can I use the API?", answer: "You can use the API by registering for an API key and following our documentation." },
    { question: "How many designs can I process through the API?", answer: "There is no limit on the number of designs you can process with a paid plan." },
    { question: "How do I get notified about new features?", answer: "You can subscribe to our newsletter to receive updates on new features." },
    { question: "How can I contact you for any feedback, ideas, suggestions?", answer: "You can reach us via the contact form on our website." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-4">
      {faqItems.map((item, index) => (
        <div key={index} className="border-l border-r border-b border-t border-gray-300">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full p-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200"
          >
            {item.question}
            <span className="text-blue-500">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-600 text-sm bg-gray-50">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
