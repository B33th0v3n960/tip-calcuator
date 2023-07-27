import '../css/Total.css'

export default function TotalCard({ total, action }) {
  return (
    <div className='total__card'>
      <span>
        <DisplayAmount label='Tip Amount' value={'$' + total.tip.toFixed(2)} />
        <DisplayAmount label='Total' value={'$' + total.bill.toFixed(2)} />
      </span>
      <button className={total.buttonActive} onClick={action}>
        Reset
      </button>
    </div>
  )
}

function DisplayAmount({ label, value }) {
  return (
    <div className='total__amount'>
      <span className='total__label'>
        <h2>{label}</h2>
        <p>/ Per Person</p>
      </span>
      <p className='total__value'>{value}</p>
    </div>
  )
}
