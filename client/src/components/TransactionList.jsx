
// .filter() — loops through, removes elements that don't match, returns smaller array
// .reduce() — loops through, accumulates everything into one single value
// .map() — loops through, transforms every element, returns same size array
function TransactionList({ transactions }){
    return (
        <>
            <div className="transaction-list">
                <h2>Transactions</h2>
                {transactions.map(t => (
                    <div key={t.id} className={`transaction ${t.type}` }>
                        <p>{t.description}</p>
                        <p className="amount">${t.amount}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TransactionList