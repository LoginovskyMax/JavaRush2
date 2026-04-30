import { useState, type ChangeEvent } from "react";


function LogIn() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const showFormData = () => {
        console.log({
            name, email
        });
    }

    const onChangeHandler = (event:ChangeEvent) => {
        setName(event.target.value)
    }

    const reset = () => {
        setName('')
        setEmail('')
    }

    return(
        <div className="test">
           <h2>Log In</h2>
           <form onSubmit={(e) => e.preventDefault}>
              <input 
                 type="text" 
                 placeholder="Name"
                 value={name}
                 onChange={onChangeHandler}
                 ></input>
              <input 
                 type="text" 
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value) }
                 ></input>
                <button type="button" onClick={showFormData}>submit</button>
                 <button type="button" onClick={reset}>reset</button>
           </form>
          
         </div>
    )
}


export default LogIn