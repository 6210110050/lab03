import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word)) 
    return{
        word,
        chars,
        attempt: 1,
        guess: '',
        hint: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = (c) => {
         console.log(`${c} has been activated.`) 
        
         let guess = state.guess + c
         setState({...state,guess})
         console.log(guess)
         if(guess.length == state.word.length){
             if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
             }else if(state.attempt ==  6){
                console.log('you lose!')
                console.log('correct word is ',state.word)
             }else{
                console.log('reset, next attempt')
                setState({...state, guess: '' , attempt:state.attempt + 1})
                console.log('attempt: ',state.attempt)   
                

                const result = [];
                if (state.attempt == 2 || state.attempt == 4){

                
                for (let i=0; i<state.attempt; i++){
                    
                    result.push(state.word[i])
    
                }
                
                for(let i=state.attempt; i<state.word.length;i++){
                    result.push('_')
                }
                
                console.log('next Char : ',result)
            }
                
                
                    
             }
         }
         

         
    }

 return (
 <div>
        { 
            state.chars.map((c, i) => 
                <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
            )
        }
 </div>
 );
}