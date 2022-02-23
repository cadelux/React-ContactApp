import {useState} from 'react'


function List({contacts}) {
 // filtreleme 
    const [filterText,setFilterText]=useState('');
    const filtered=contacts.filter((item)=>{
        return Object.keys(item).some((key)=> item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
// elimizde ki contacts filtreliyeceðiz. her bir eleman item. daha sonra object.keys() diye bir metot var. bunu öðren.
// tüm objelerin içinde buna bakýyor. bu itemler ya phone_number yada fullname. daha sonra bu phone_number veya fullname'den herhangibiri(some)' nin içinde filtertext'in küçük harfli hali geçiyorsa bunu bana getir.
        )
    })


  return (
    <>

    <input placeholder='Filter' value={filterText} onChange={(e)=>{
        setFilterText(e.target.value)
    }}/>

 {/* listeleme */}
    <ul className='list'>
    {filtered.map((contact,i)=>(

        <li key={i}>

            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>

        </li>

    ))}
    </ul>

        <p>Total contacts : {filtered.length}</p>
    </>
  )
}

export default List
