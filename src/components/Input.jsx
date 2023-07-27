import '../css/Input.css'
import { useRef, useState } from 'react'

// Tip percentage input field
function PercentageBtn({ value, currentPercentage, action }) {
  return (
    <>
      <input
        name='percentage'
        type='radio'
        id={value}
        value={value}
        onChange={action}
        checked={currentPercentage === value}
      />
      <label htmlFor={value} className='percentage__btn percentage__btn--dark'>
        {value}%
      </label>
    </>
  )
}

function CustomPercentage({ action, value }) {
  return (
    <input
      className='percentage__btn percentage__btn--light'
      type='number'
      placeholder='Custom'
      onChange={action}
      value={value ?? ''}
    />
  )
}

export function TipPercentage({ value, action }) {
  function handleInput(e) {
    action(e.target.value)
  }

  const inputDisplayAmount = ['5', '10', '15', '20', '25'].includes(value)
    ? ''
    : value

  return (
    <div className='percentage__container'>
      <label htmlFor='input' className='percentage__label'>
        Select Tip %
      </label>
      <form className='percentage__form'>
        <PercentageBtn
          action={handleInput}
          currentPercentage={value}
          value='5'
        />
        <PercentageBtn
          action={handleInput}
          currentPercentage={value}
          value='10'
        />
        <PercentageBtn
          action={handleInput}
          currentPercentage={value}
          value='15'
        />
        <PercentageBtn
          action={handleInput}
          currentPercentage={value}
          value='20'
        />
        <PercentageBtn
          action={handleInput}
          currentPercentage={value}
          value='25'
        />
        <CustomPercentage value={inputDisplayAmount} action={handleInput} />
      </form>
    </div>
  )
}

// Input box
export function FormGroup({ message, icon, action, value, setTouched, error }) {
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
