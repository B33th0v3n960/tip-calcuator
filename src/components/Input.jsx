import { useState } from 'react'
import '../css/Input.css'

// Tip percentage input field
export function TipPercentage({ currentPercentage, action }) {
  const [displayAmount, setDiplayAmount] = useState()
  const handleInput = (e) => {
    action(e.target.value)
    setDiplayAmount()
  }
  const customInput = (e) => {
    action(e.target.value.replace(/^0+/, ''))
    setDiplayAmount(e.target.value.replace(/^0+/, ''))
  }

  function PercentageBtn({ value }) {
    const check = currentPercentage === value
    return (
      <>
        <input
          name='percentage'
          type='radio'
          id={value}
          value={value}
          onChange={handleInput}
          checked={check}
        />
        <label htmlFor={value} className='percentage__btn percentage__btn--dark' >
          {value}%
        </label>
      </>
    )
  }

  return (
    <div className='percentage__container'>
      <label htmlFor='input' className='percentage__label'>
        Select Tip %
      </label>
      <form className='percentage__form'>
        <PercentageBtn value='5' />
        <PercentageBtn value='10' />
        <PercentageBtn value='15' />
        <PercentageBtn value='20' />
        <PercentageBtn value='25' />
        <input
          className='percentage__btn percentage__btn--light'
          type='number'
          placeholder='Custom'
          onChange={customInput}
          value={displayAmount ?? ''}
        />
      </form>
    </div>
  )
}

// Input box
export function FormGroup({ label, icon, state, setTouched, error }) {
  const [value, setValue] = state
  const handleInput = (e) => setValue(e.target.value.replace(/^0+/, ''))

  return (
    <>
      <span className='label__container'>
        <label htmlFor='input' className='percentage__label'>
          {label}
        </label>
        {error ? <p>can't be zero</p> : null}
      </span>

      <label className={error ? 'input-box input-box--zero' : 'input-box'}>
        <img src={icon} alt={icon} />
        <input
          className='input-box__input'
          placeholder='0'
          type='number'
          value={value ?? ''}
          onChange={handleInput}
          onBlur={() => setTouched(true)}
        />
      </label>
    </>
  )
}
