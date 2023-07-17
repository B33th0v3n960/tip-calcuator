import '../css/Total.css'

export default function TotalCard({ tipAmount, total }) {
  return (
    <div className='total__card'>
      <span>
        <DisplayAmount label='Tip Amount' value={'$' + tipAmount} />
        <DisplayAmount label='Total' value={'$' + total} />
      </span>

      <ResetBtn />
    </div>
  )
}

function TotalLabel({ label }) {
  return (
    <span>
      <p className='label__main'>{label}</p>
      <p className='label__sub'>/ Per Person</p>
    </span>
  )
}

function DisplayAmount({ label, value }) {
  return (
    <div className='total__label'>
      <TotalLabel label={label} />
      <p className='total__value'>{value}</p>
    </div>
  )
}

function ResetBtn() {
  return <button className='reset__btn'>Reset</button>
}
