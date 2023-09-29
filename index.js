import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseEntryItem from'./components/ExpenseEntryItem';
import Login from './components/Login';
import SignUp from './components/SignUp';
import digitalButton from './components/digitalButton'

ReactDOM.render(
 <React.StrictMode>
 {/* //<Login />
 <SignUp /> */}
 <ExpenseEntryItem />
 <digitalButton />
 </React.StrictMode>,
 document.getElementById('root')
);


