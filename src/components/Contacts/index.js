import List from './List'
import Form from '../Form'
import '../Contacts/style.css'
import { useState, useEffect} from 'react'


function Contacts() {



    const[contacts,setContacts]=useState([
        {
            fullname:"mehmet",
            phone_number:"632532"
        },
        {
            fullname:"alican",
            phone_number:"421521"
        },
        {
            fullname:"atilla",
            phone_number:"51242187"
        }
    ]) // veri tipi bir array olacak çünkü birden çok eleman getireceðim. form.jsden
  
    
    useEffect( ()=>{
        console.log(contacts) }, [contacts]) // contact deðiþtiðinde yeni listeyi logdan haber versin diye.



  return (
    <div id="container"> 
          <h1>Contacts!</h1>

    <List contacts={contacts}/>  <Form addCont={setContacts} contactss={contacts}/> </div>
  )
}

export default Contacts