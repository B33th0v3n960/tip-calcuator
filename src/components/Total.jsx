import '../css/Total.css'

export default function TotalCard() {
  return (
    <div className='total__card'>
      <DisplayAmount label='Tip Amount' value='$30.00' />
      <DisplayAmount label='Tip Amount' value='$12.00' />
      <ResetBtn />
    </div>
  )
}

function TotalLabel() {
  return (
    <span>
      <p className='label__main'>Tip Amount</p>
      <p className='label__sub'>/ Per Person</p>
    </span>
  )
}

function DisplayAmount({ label, value }) {
  return (
    <div className='total__label'>
      <TotalLabel />
      <p className='total__value'>{value}</p>
    </div>
  )
}

function ResetBtn() {
  return <button className='reset__btn'>Reset</button>
}
