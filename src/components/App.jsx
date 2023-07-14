import '../css/App.css'
import logo from '../assets/logo.svg'
import dollar from '../assets/icon-dollar.svg'
import person from '../assets/icon-person.svg'
import { FormGroup, TipPercentage, InputGroup } from './Input'

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
      <FormGroup message='Bill' icon={dollar} />
      <TipPercentage />
      <FormGroup message='Number of People' icon={person} />
    </div>
  )
}
