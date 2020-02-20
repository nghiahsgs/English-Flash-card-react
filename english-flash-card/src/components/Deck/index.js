import React, { lazy } from "react"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import _ from "underscore"
//context api
import WordsContext from "../../context/WordsContext"

import "./style.css"

export default function Deck(props){
    const {listDecks,listWords,chooseDeck,currentDeck,currentListWords}=React.useContext(WordsContext)
    
    return (
      <>
        {listDecks.map((item, i) => (
          <Button
            className={item.id === currentDeck.id ? "text_red" : ""}
            variant="contained"
            key={i}
            onClick={e => chooseDeck(e, item)}
          >
            {item.name}
          </Button>
        ))}

        <Typography variant="h6">Current Deck: {currentDeck.name}</Typography>
        <Typography variant="h6">Total words: {currentListWords.length}</Typography>
      </>
    );
}
