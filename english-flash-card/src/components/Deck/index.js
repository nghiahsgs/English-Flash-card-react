import React, { lazy } from "react"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import _ from "underscore"
//context api
import WordsContext from "../../context/WordsContext"

import "./style.css"

export default function Deck(props){
    const {listDecks,listWords,chooseDeck,currentDeckId,currentListWords}=React.useContext(WordsContext)
    const currentDeck=_.filter(listDecks, function(deck){ return deck.id=== currentDeckId})
    
    
    
    return (
        <>
            {listDecks.map((item,i)=>(

                <Button className={item.id===currentDeckId?'text_red':''} variant="contained" key={i} onClick={e=>chooseDeck(e,item.id)}>
                    {item.name}
                </Button>
            ))}

            <Typography variant="h6">Current Deck: {currentDeck.name}</Typography>

            
        </>
    )
}
