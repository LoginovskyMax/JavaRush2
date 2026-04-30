import { useRef, useState } from "react";


function UncontrolForm() {
    const formRef = useRef(null)

    const showFormData = (event:FormDataEvent) => {
        event.preventDefault()

       const data = {
         name: formRef.current?.name.value,
         email: formRef.current?.email.value
       }

       console.log(data);

    }

    const reset = () => {
        if(!formRef.current) return
        formRef.current.name.value = ''

        formRef.current.email.value = ''
    }

    return(
        <div className="test">
           <h2>Log In Uncontrol</h2>
           <form 
              onSubmit={(e) => showFormData(e)}
              ref={formRef}
              >
              <input 
                 type="text" 
                 placeholder="Name"
                 name="name"
                 ></input>
              <input 
                 type="text" 
                 name="email"
                 placeholder="Email"
                 ></input>
                <button type="submit" >submit</button>
                <button type="button" onClick={reset}>reset</button>
           </form>
          
         </div>
    )
}


export default UncontrolForm