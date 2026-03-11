import { useState } from "react";

function AddTransaction({ onAdd }){
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('income')

    const handleSubmit = () => {
        if(!description || !amount || parseFloat(amount) <= 0){
            alert('Please fill in all fields & enter a postive amount')
            return
        }

        const newTransaction = {
            id: Date.now(),
            description: description,
            amount: parseFloat(amount),
            type: type
        }

        onAdd(newTransaction)
        setDescription('')
        setAmount('')
        setType('income')
    }

    return (
        <>
            <div className="add-transaction">
                <h2>Add Transaction</h2>
                <input 
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input 
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
                <select value={type} onChange={e => setType(e.target.value)}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <button onClick={handleSubmit}>Add Transaction</button>
            </div>
        </>
    )
}

export default AddTransaction