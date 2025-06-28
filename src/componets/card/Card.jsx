import  './card.css'

function Card(props) {
  return (
    <div>
        <div className="card">
            <img src={props.rasm} alt="" />
            <button ></button>
            <h3>{props.nomi}</h3>
            <p>{props.narx}</p>
        </div>
    </div>
  )
}

export default Card