import React, { useReducer, useState } from 'react';
import './ExpenseEntryItem.css';
import digitalButton from './digitalButton';

//class ExpenseEntryItem extends React.Component {

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION:'choose_operation',
    CLEAR:'clear',
    DELETE_DIGIT:'delete_digit',
    EVALUATE:'evaluate'

}
function reducer( state, {type,payload}) {  
    switch(type){
        case ACTIONS.ADD_DIGIT:
            return {
                ...state ,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`
            }
    }    
    }
    function ExpenseEntryItem() {
    //render(){

    const[{ currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer,{})
    //dispatch({ type: ACTIONS.ADD_DIGIT,payload: {digit: 1 }})
        return(
            <div className="calculator-grid">
                <div className="output">
                        <div className="previous-operand">{previousOperand} {operation}</div>
                    <div className="current-operand">{currentOperand}</div>
                </div>
                <button className="span-two">AC</button>
                <button>DEL</button>
                <button>÷</button>

                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>*</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>+</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>-</button>
                <button>.</button>
                <button>0</button>
                <button className="span-two">=</button>
            </div>

            // <div  className="itemStyle">
            // <div><b>Item:</b> <em>Mango Juice</em></div>
            // <div><b>Amount:</b> <em>30.00</em></div>
            // <div><b>Spend Date:</b> <em>2020-10-10</em></div>
            // <div><b>Category:</b> <em>Food</em></div>
            // </div> 
        );
    }
//}
export default ExpenseEntryItem;