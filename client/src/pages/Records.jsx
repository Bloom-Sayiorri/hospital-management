const Records = () => {
    const record = {
        title: 'Nairobi Hospital',
        patients: 2,

    }
  return (
    <div className=''>
        <ul className=''>
            <li className=''>
                <h3 className=''>{record.title}</h3>
                <p>{record.patients}</p>
            </li>
        </ul>
    </div>
  )
}

export default Records