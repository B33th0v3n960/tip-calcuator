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
      <label className='label__main'>{label}</label>
      <span className='label__sub'>/ Per Person</span>
    </span>
  )
}

function DisplayAmount({ label, value }) {
  return (
    <div className='total__amount'>
      <TotalLabel label={label} />
      <p className='total__value'>{value}</p>
    </div>
  )
}

// Reset btn
function ResetBtn() {
  return <button className='reset__btn'>Reset</button>
}
