import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCard from './flashCard';


function App() {
  const [listWords,setListWords]=React.useState([])
  const [index, setIndex] = React.useState(0);

  React.useEffect(
    ()=>{
      const listWordsFromDb = [
        {
          id: "001",
          field_1: "let learn english 1",
          field_2: "let learn vienamese 1"
        },
        {
          id: "002",
          field_1: "let learn english 2",
          field_2: "let learn vienamese 2"
        },
        {
          id: "003",
          field_1: "let learn english 3",
          field_2: "let learn vienamese 3"
        },
        {
          id: "004",
          field_1: "let learn english 4",
          field_2: "let learn vienamese 4"
        }
      ];
      const a=0
      const b = listWordsFromDb.length;
      const index_random = Math.floor(Math.random() * (b - a) + a);
      
      setIndex(index_random);
      setListWords(listWordsFromDb);
    },
  [])

  return (
    <div className="App">
      {listWords.length &&
      <FlashCard word={listWords[index]} />}
    </div>
  );
}

export default App;
