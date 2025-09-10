const FAQCard = ({ faq }:any): JSX.Element => {
  return (
    <li className="text-white faq-list home-hidden">
      <h6 className="font-bold text-lg text-base mb-3 b">{faq.question} </h6>

      <p className="text-sm text-lightash font-normal">{faq.answer}</p>
    </li>
  );
};

export default FAQCard;
