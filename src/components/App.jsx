import '../css/App.css'
import logo from '../assets/logo.svg'
import { InputGroup, TipPercentage } from './Input'

export default function App() {
  return (
    <>
      <img className='logo' src={logo} alt='Splitter Logo' />
      <Main />
    </>
  )
}

function Main() {
  return (
    <div className='main-card'>
      <InputGroup message='Select Tip %' Component={TipPercentage} />
    </div>
  )
}
