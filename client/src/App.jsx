import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className='app'>
      <Header />
      <Dashboard 
        balance={1500}
        income={2500}
        expenses={1000}
      />
    </div>
  ) 

}

export default App
