import '../css/Input.css'

function PercentageBtn({ value }) {
  return (
    <button className='input-reset percentage__btn percentage__btn--dark'>
      {value}%
    </button>
  )
}

function CustomPercentage() {
  return (
    <input
      className='input-reset percentage__btn percentage__btn--light'
      type='number'
      placeholder='Custom'
    />
  )
}

export function InputGroup({ icon }) {
  return (
    <div className='input-box'>
      <img src={icon} alt='dollar' />
      <input
        type='number'
        placeholder='0'
        className='input-reset input-box__input'
      />
    </div>
  )
}

export function TipPercentage() {
  return (
    <>
      <label htmlFor='input' className='label'>
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
    </>
  )
}

export function FormGroup({ message, icon }) {
  return (
    <>
      <label htmlFor='input' className='label'>
        {message}
      </label>
      <InputGroup icon={icon} />
    </>
  )
}
