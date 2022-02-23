import {useState} from 'react'


function Form({addCont,contactss}) { // contact.js'de addCont adýnda props tanýmladýk ve getirdik. 
    //Bunun type'ý dizi olarak tanýmladýk ona göre burada kulllanmamýz lazým.
    // console.log(addCont);
    const [form,setForm]=useState({fullname:"", phone_number:""})

    // þimdi bir fonksiyon yazýp input deðiþtiði anda gerekli state'e atamasýný yapacak 
    
    const onChangeInput=(event)=>{
        setForm({...form, [event.target.name]: event.target.value}) // hatýrlarsan setForm yeni deðer vermek içindi. 
        // burdaki event.target ifadesi ise o anda çalýþtýðý bileþen üzerinde ki o ifadeyi alýr.
     }


     const onSubmit=(e)=>{
         e.preventDefault(); // sayfa yenilenmesini durdurmak için yaptýk.
         
        

         if(form.fullname==="" || form.phone_number===""){
             return false
         }
    
         addCont([...contactss,form])  // form zaten bi object olduðu için direk dizinin içine aldýk.
         console.log(form)

         setForm({fullname:"",phone_number:""}) // form submit olunca kutularý boþalt.

     }


  return (
    <div>
        <form onSubmit={onSubmit}>
          <div>      
             <input name="fullname" placeholder='Full Name' value={form.fullname} onChange={onChangeInput}/>
       
          </div>

        <div>
            <input name="phone_number" placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}/>
         </div>
         
         <div className='btn'>
            <button>Add</button>
         </div>

         </form>

    </div>
  )
}

// Bundan sonra yapmamýz gereken burda ki kayýtlarý bir state --> þu yapý yani 
//( const [form,setForm]=useState({fullname:"", phone_number:""}))'e eklemek gerekiyor ki onu List/index.js'te gösterebilelim.

export default Form