import '../css/Input.css'

export function PercentageBtn({ value }) {
  return <button className='value'>{value}%</button>
}

export function CustomPercentage() {
  return (
    <input
      className='custom-percentage-input'
      type='number'
      placeholder='Custom'
    />
  )
}

export function TipPercentage() {
  return (
    <div className='tip-percentage'>
      <PercentageBtn value='5' />
      <PercentageBtn value='10' />
      <PercentageBtn value='15' />
      <PercentageBtn value='20' />
      <PercentageBtn value='25' />
      <CustomPercentage />
    </div>
  )
}

export function InputGroup({ message, Component }) {
  return (
    <div>
      <label htmlFor="input" className='label'>{message}</label>
      <Component />
    </div>
  )
}

