import './App.css'
import  WelcomeComponent from './WelcomeComponent'

function App() {
  

  return (
    <>
      <h1 >Hello, React Application</h1>
      <Greet/>
      <Greet/>
      <Greet/>
      <Greet/>
      <WelcomeComponent/>
      </>
   
    
  )
}
export default App
function Greet(){
  return(
    <>
      <h3>Guvi is a Fraud company</h3>
    </>
    
  )
}