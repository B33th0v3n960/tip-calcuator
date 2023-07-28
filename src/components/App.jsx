import { useState } from 'react'
import '../css/App.css'
import logo from '../assets/logo.svg'
import dollar from '../assets/icon-dollar.svg'
import person from '../assets/icon-person.svg'
import { FormGroup, TipPercentage } from './Input'
import TotalCard from './Total'

export default function App() {
  const [bill, setBill] = useState()
  const [people, setPeople] = useState()
  const [percentage, setPercentage] = useState()
  const [touched1, setTouched1] = useState(false)
  const [touched2, setTouched2] = useState(false)
  const errorBillInput = touched1 ? (!bill ? 'invalid value' : false) : null
  const errorPeopleInput = touched2 ? (!people ? 'invalid value' : false) : null

  class Total {
    constructor() {
      const totalPeople = Number(people ?? 0)
      const totalBill = Number(bill ?? 0)
      const totalPercentage = Number(percentage ?? 0)
      this.tip = (totalPeople * totalBill * totalPercentage) / 100
      this.bill = Number(bill ?? 0) + this.tip
      this.buttonActive =
        'reset__btn reset__btn--' +
        (this.tip || this.bill ? 'active' : 'unactive')
    }
  }
  const total = new Total()

  function reset() {
    setBill()
    setPeople()
    setPercentage()
    setTouched1()
    setTouched2()
  }
  return (
    <>
      <img className='logo' src={logo} alt='Splitter Logo' />
      <div className='main'>
        <div className='main__input'>
          <FormGroup
            label='Bill'
            icon={dollar}
            state={[bill, setBill]}
            error={errorBillInput}
            setTouched={setTouched1}
          />
          <TipPercentage
            currentPercentage={percentage}
            action={setPercentage}
          />
          <FormGroup
            label='Number of People'
            icon={person}
            state={[people, setPeople]}
            error={errorPeopleInput}
            setTouched={setTouched2}
          />
        </div>

        <TotalCard total={total} action={reset} />
      </div>
    </>
  )
}
