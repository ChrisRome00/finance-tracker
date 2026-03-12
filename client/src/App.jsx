//  Allows us to use the useState 
import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

function App() {
  // Props — data that comes from outside the component, read only
  // State — data that lives inside the component, can be updated

  //We create our initial state
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Salary', amount: 2500, type: 'income' },
    { id: 2, description: 'Rent', amount: 1000, type: 'expense' },
    { id: 3, description: 'Groceries', amount: 200, type: 'expense' },
    { id: 4, description: 'Netflix', amount: 50, type: 'expense'},
  ])

  //Now we can calculate the variables (works with change)
  //Variables

  // .filter loops through the array and returns onlt the elements that match a condition
  // ,reduce takes an array and reduces it down into a single value, essentially accumulating to a single value
  // .reduce has a (callback function, initial value)

  //   .reduce((accumulator, currentElement) => {
  //      do something with both
  //      whatever you return becomes the next accumulator
  //   }, startingValue)

  const income = transactions
    .filter(t => t.type === 'income') // Grabbing the element
    .reduce((sum, t) => sum + t.amount, 0) // accumulating the total income
  
  const expenses = transactions
    .filter(t => t.type === 'expense') // Grabbing the element
    .reduce((sum, t) => sum + t.amount, 0) // accumulating the total income

    const balance = income - expenses

    const handleAddTransaction = (newTransaction) => {
      setTransactions([...transactions, newTransaction])
    }

    const handleDeleteTransaction = (id) =>{
      setTransactions(transactions.filter(t => t.id !== id))
    }


  return (
    <div className='app'>
      <Header />
      <Dashboard 
        balance={balance}
        income={income}
        expenses={expenses}
      />
      <AddTransaction onAdd={handleAddTransaction} />
      <TransactionList transactions={transactions} onDelete={handleDeleteTransaction}/>
    </div>
  ) 

}

export default App
