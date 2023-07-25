import '../css/Input.css'
import { useState } from 'react'

// Tip percentage input field
function PercentageBtn({ value }) {
  return (
    <label className='percentage__btn percentage__btn--dark'>
      <input type='radio' value={value} />
      {value}%
    </label>
  )
}

function CustomPercentage() {
  return (
    <input
      className='percentage__btn percentage__btn--light'
      type='number'
      placeholder='Custom'
    />
  )
}

export function TipPercentage() {
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
        <CustomPercentage />
      </form>
    </div>
  )
}

// Input box
export function FormGroup({ message, icon, action, value }) {
  const [touched, setTouched] = useState(false)
  const error = touched ? (!value ? true : false) : null

  function handleInput(e) {
    action(e.target.value.replace(/^0+/, ''))
  }

  return (
    <>
      <span className='label__container'>
        <label htmlFor='input' className='percentage__label'>
          {message}
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
