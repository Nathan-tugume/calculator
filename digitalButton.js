
import { ACTIONS } from "./ExpenseEntryItem"
export default function digitalButton({ dispatch, digit }) {
return <button onClick={()=> dispatch({ type: ACTIONS.ADD_DIGIT,payload: {digit}})}>
    
    {digit}</button>
}
// import React from 'react';
// import { ACTIONS } from './ExpenseEntryItem'; // Import the action types from the main component

// function DigitalButton({ label, dispatch }) {
//   const handleButtonClick = () => {
//     if (label === 'AC') {
//       dispatch({ type: ACTIONS.CLEAR });
//     } else if (label === 'DEL') {
//       dispatch({ type: ACTIONS.DELETE_DIGIT });
//     } else if (/[0-9]/.test(label)) {
//       dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: label } });
//     } else if (['+', '-', '*', '/'].includes(label)) {
//       dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: label } });
//     } else if (label === '=') {
//       dispatch({ type: ACTIONS.EVALUATE });
//     }
//   };

//   return (
//     <button onClick={handleButtonClick}>
//       {label}
//     </button>
//   );
// }

// export default DigitalButton;
