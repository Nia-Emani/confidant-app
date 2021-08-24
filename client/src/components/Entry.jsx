function Entry(props) {

  const { date, thought } = props.entry.fields

  return (
    <>
      <p>{date}</p>
      <p>{thought}</p>
    </>

  )
}

export default Entry