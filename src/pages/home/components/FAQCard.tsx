const FAQCard = ({ faq }:any): JSX.Element => {
  return (
    <li className="text-appGray200 faq-list home-hidden">
      <h6 className="font-bold text-base mb-3 b">{faq.question} </h6>

      <p className="text-sm  font-normal">{faq.answer}</p>
    </li>
  );
};

export default FAQCard;
