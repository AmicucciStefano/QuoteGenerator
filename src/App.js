import './App.css';
import Quote from "./componentes/Quote"
import { FaTwitterSquare, FaTumblrSquare } from "react-icons/fa";
import { useState } from "react";

const Quotes = [{
  id: 1,
  text:"Dreaming, after all, is a form of planning.",
  author:"Gloria Steinem"
},{
  id: 2,
  text:"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
  author:"Helen Keller"
},{
  id: 3,
  text:"Remember that not getting what you want is sometimes a wonderful stroke of luck.",
  author:"Dalai Lama"
},{
  id: 4,
  text:"You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
  author:"Erica Jong"
},{
  id: 5,
  text:"If you want your children to turn out well, spend twice as much time with them, and half as much money.",
  author:"Abigail Van Buren"
},{
  id: 6,
  text:"Our lives begin to end the day we become silent about things that matter.",
  author:"Martin Luther King Jr."
},{
  id: 7,
  text:"Too many of us are not living our dreams because we are living our fears.",
  author:"Les Brown"
},{
  id: 8,
  text:"What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
  author:"Bob Dylan"
},{
  id: 9,
  text:"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
  author:"Booker T. Washington"
}];

function App() {
  const [text, setText] = useState("")
  const [author, setAuthor] = useState("")

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }
  
  const getQuote = (id) => {
    let randomId = generateRandomNumber(1, 10)
    let Quote = Quotes.filter((quote) => { return quote.id === randomId});
    setText(Quote[0].text)
    setAuthor(Quote[0].author)
  }

  window.addEventListener("load",getQuote)

  return (
    <div className="App">
      <div className="container--div">
        <div>
          <Quote 
          text={text}
          author={author} />
        </div>
        <div className='buttons--div'>
          <div className='icons'>
            <a href="twitter.com/intent/tweet" target="_blank"><FaTwitterSquare /></a>
            <a href="#"><FaTumblrSquare /></a>
          </div>
          <button onClick={getQuote} className='button'>New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
