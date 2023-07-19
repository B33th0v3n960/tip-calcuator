import '../css/Input.css'

// Tip percentage input field
function PercentageBtn({ value }) {
  return (
    <button className='percentage__btn percentage__btn--dark'>{value}%</button>
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
function InputGroup({ icon }) {
  return (
    <div className='input-box'>
      <img src={icon} alt='dollar' />
      <input type='number' placeholder='0' className='input-box__input' />
    </div>
  )
}

export function FormGroup({ message, icon }) {
  return (
    <>
      <label htmlFor='input' className='percentage__label'>
        {message}
      </label>
      <InputGroup icon={icon} />
    </>
  )
}
