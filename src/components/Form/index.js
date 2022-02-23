import {useState} from 'react'


function Form({addCont,contactss}) { // contact.js'de addCont ad�nda props tan�mlad�k ve getirdik. 
    //Bunun type'� dizi olarak tan�mlad�k ona g�re burada kulllanmam�z laz�m.
    // console.log(addCont);
    const [form,setForm]=useState({fullname:"", phone_number:""})

    // �imdi bir fonksiyon yaz�p input de�i�ti�i anda gerekli state'e atamas�n� yapacak 
    
    const onChangeInput=(event)=>{
        setForm({...form, [event.target.name]: event.target.value}) // hat�rlarsan setForm yeni de�er vermek i�indi. 
        // burdaki event.target ifadesi ise o anda �al��t��� bile�en �zerinde ki o ifadeyi al�r.
     }


     const onSubmit=(e)=>{
         e.preventDefault(); // sayfa yenilenmesini durdurmak i�in yapt�k.
         
        

         if(form.fullname==="" || form.phone_number===""){
             return false
         }
    
         addCont([...contactss,form])  // form zaten bi object oldu�u i�in direk dizinin i�ine ald�k.
         console.log(form)

         setForm({fullname:"",phone_number:""}) // form submit olunca kutular� bo�alt.

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

// Bundan sonra yapmam�z gereken burda ki kay�tlar� bir state --> �u yap� yani 
//( const [form,setForm]=useState({fullname:"", phone_number:""}))'e eklemek gerekiyor ki onu List/index.js'te g�sterebilelim.

export default Form