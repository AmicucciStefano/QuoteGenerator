import "../style-sheets/Quote.css";
import { FaQuoteLeft } from "react-icons/fa"

const Quote = ({ text, author}) => {

  return (
    <>
    <h3><FaQuoteLeft /> {text}</h3>
    <p className="author">- {author}</p>
    </>
  );
}

export default Quote;