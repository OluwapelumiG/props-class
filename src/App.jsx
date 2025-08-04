import { useState } from 'react'
import Form from './components/Form'
import Profile from './components/Profile'

function App() {

  const [formData, setFormData ] = useState({})

  return (
    <>
      {
        (formData.name
          ? 
          <Profile formData={formData} />
          :
          <Form setFormData={setFormData} />
        )

      }
      
      
    </>
  )
}

export default App
