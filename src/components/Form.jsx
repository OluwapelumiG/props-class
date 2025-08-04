import { useState } from 'react'

export default function Form({setFormData}){
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  function submitForm(){
    event.preventDefault();

    const formData = {
        name: name,
        username: username,
        email: email
    }

    setFormData(formData)
  }


  

    return (
        <>

        <div>
            <form onSubmit={submitForm}>
                <div className="flex flex-col p-4 space-y-2">
                    <label className="text-2xl">Name</label>
                    <input 
                        className="border-2 border-gray-400 px-4 py-2 rounded-lg" placeholder="Enter your name" type="text" name="name" 
                        value={name}
                        onChange={(event)=>{setName(event.target.value)}}
                    />
                </div>
                <div className="flex flex-col p-4 space-y-2">
                    <label className="text-2xl">Username</label>
                    <input 
                        className="border-2 border-gray-400 px-4 py-2 rounded-lg" placeholder="Enter your username" type="text" name="username"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div className="flex flex-col p-4 space-y-2">
                    <label className="text-2xl">Email</label>
                    <input 
                        className="border-2 border-gray-400 px-4 py-2 rounded-lg" placeholder="Enter your email" type="email" name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <button className="px-4 py-2 bg-green-400 hover:bg-green-700 rounded-xl mx-4 my-2">Submit</button>
            </form>
        </div>

        </>
    )
}