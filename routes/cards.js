const express = require('express');
const router = express.Router();
const {data} = require('../data/flashcardData.json');
const {cards} = data;

//create a route 
router.get('/', (req, res) => {
    const numberOfCards = cards.length;
     //find a random card
    const flashCardId = Math.floor(Math.random() * numberOfCards);
    //redirect user to view random card.
    res.redirect(`/cards/${flashCardId}`);
    })

router.get('/:id', (req, res) =>{
    const {side} = req.query;
    const {id} = req.params;
 //if URL is side question/answer redirect to question side   
    if(side !== 'answer' && side !== 'question'){
      return res.redirect(`/cards/${id}?side=question`);
    }
    const name = req.cookies.username;
    const text = cards[id][side];
    const {hint} = cards[id];
    const templateData = {id, text, name, side};
/*when the question side of the card is displayed the hint and answer link is displayed */
    if(side === 'question') {
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
/** if card side is answer the hint is hidden and the question link is displayed*/
    } else if(side === 'answer') {
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }   
    res.render('card', templateData);
});

//module.exports = router;