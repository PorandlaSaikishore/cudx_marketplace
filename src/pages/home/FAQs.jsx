import { useState } from "react";

function FAQs() {
    const faqs = [
  {
    question: "What is this Credit Union Data Web Application?",
    answer:
      "Our web application allows credit unions to securely buy and sell anonymized member data for analytics, benchmarking, and business insights. It streamlines data transactions while ensuring compliance with privacy regulations, helping credit unions make data-driven decisions efficiently.",
  },
  {
    question: "How is member data protected?",
    answer:
      "Security and privacy are our top priorities. All data is anonymized and encrypted before it leaves a credit union’s system. Personally identifiable information (PII) is never shared, and the platform complies with regulatory standards, including GLBA and GDPR where applicable.",
  },
  {
    question: "How does the buying and selling process work",
    answer:
      "Selling Data: Credit unions upload anonymized datasets through our secure portal. They set pricing or allow market-based offers.",
  },
  {
    question: "What types of data can I access?",
    answer:
      "Loan metrics, member demographics, transaction trends, and product usage.",
  },
  {
    question: "Are there any fees?",
    answer:
      "Small transaction fees apply; optional subscriptions unlock advanced features.",
  },
];

 const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (<>
        <div className="bg-white">
            <div className="mx-[5%] pt-[4%] pb-[4%]">
                <div className="flex items-center justify-center gap-[50%]">
                    <div className="text-3xl text-blue-900">Frequently Asked Questions</div>
                    <div className="text-gray-500 font-semibold">Most common questions regarding CUDX</div>
                </div>
                <div className="pt-7 mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-blue-900 rounded-lg p-4 cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{faq.question}</h3>
            <span className="text-xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </div>

          {openIndex === index && (
            <p className="mt-2 text-sm text-gray-600">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
            </div>
        </div>
    </>)
}

export default FAQs;