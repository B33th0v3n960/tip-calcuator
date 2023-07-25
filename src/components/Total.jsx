import '../css/Total.css'

export default function TotalCard({ tipAmount, total, active, action }) {
  return (
    <div className='total__card'>
      <span>
        <DisplayAmount label='Tip Amount' value={'$' + tipAmount} />
        <DisplayAmount label='Total' value={'$' + total} />
      </span>

      <button className={active} onClick={action}>
        Reset
      </button>
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
