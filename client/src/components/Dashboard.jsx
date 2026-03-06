function Dashboard({ balance, income, expenses }){
    return(
        <>
            <div className="dashboard">
                <div className="card">
                    <h3>Total Balance</h3>
                    <p className="amount balance">${balance}</p>
                </div>
                <div className="card">
                    <h3>Total Income</h3>
                    <p className="amount income">${income}</p>
                </div>
                <div className="card">
                    <h3>Total Expenses</h3>
                    <p className="amount expenses">${expenses}</p>
                </div>
            </div>
        </>
    );
}

export default Dashboard