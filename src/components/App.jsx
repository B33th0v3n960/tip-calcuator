import { useState } from 'react'
import '../css/App.css'
import logo from '../assets/logo.svg'
import dollar from '../assets/icon-dollar.svg'
import person from '../assets/icon-person.svg'
import { FormGroup, TipPercentage } from './Input'
import TotalCard from './Total'

export default function App() {
  return (
    <>
      <img className='logo' src={logo} alt='Splitter Logo' />
      <Main />
    </>
  )
}

function Main() {
  const [bill, setBill] = useState()
  const [people, setPeople] = useState()
  const [percentage, setPercentage] = useState()
  const [touched1, setTouched1] = useState(false)
  const [touched2, setTouched2] = useState(false)
  const errorBillInput = touched1 ? (!bill ? true : false) : null
  const errorPeopleInput = touched2 ? (!people ? true : false) : null

  let tipAmount =
    (Number(people ?? 0) * Number(bill ?? 0) * Number(percentage ?? 0)) / 100
  let total = Number(bill ?? 0) + tipAmount
  let active =
    tipAmount || total
      ? 'reset__btn reset__btn--active'
      : 'reset__btn reset__btn--unactive'

  function reset() {
    setBill()
    setPeople()
    setPercentage()
    setTouched1()
    setTouched2()
  }

  return (
    <div className='main-card'>
      <div className='main__input'>
        <FormGroup
          message='Bill'
          icon={dollar}
          action={setBill}
          value={bill}
          error={errorBillInput}
          setTouched={setTouched1}
        />
        <TipPercentage value={percentage} action={setPercentage} />
        <FormGroup
          message='Number of People'
          icon={person}
          action={setPeople}
          value={people}
          error={errorPeopleInput}
          setTouched={setTouched2}
        />
      </div>

      <TotalCard
        tipAmount={tipAmount.toFixed(2)}
        total={total.toFixed(2)}
        active={active}
        action={reset}
      />
    </div>
  )
}
