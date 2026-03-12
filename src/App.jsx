import BemVindo from './components/BemVindo'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App(){
  return(
    <div>
      <Header
        titulo={"My Daily Habits"}
        descricao={"Gerêncie seus hábitos de forma simples e visual"}

      />
      <BemVindo nomeUsuario={"Ryan Kayky"} totalHabitos={0}> </ BemVindo>     
      <Footer/>
      
    </div>


  )
}
export default App
