import './places.scss'

interface PlaceProps {
  title: string
  desc: string
  icon: string
  place: string
}

export function Places(props: PlaceProps) {
  return (
    <div>
      <img src={props.icon} alt={props.place} />
      <strong>{props.title}</strong>
      <p>{props.desc}</p>
      <button></button>
    </div>
  )
}
