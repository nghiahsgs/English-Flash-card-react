import React from "react"
//context api
import WordsContext from "../../context/WordsContext"

export default function Words(){
    const { currentListWords } = React.useContext(WordsContext);
    return (
      <>
        {currentListWords.map((word, i) => (
          <p key={i}>{word.field_1}</p>
        ))}
      </>
    );
}