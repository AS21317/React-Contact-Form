import { useState } from 'react'

import './App.css'
import Navigation from './component/Navigation/Navigation'
import ContactHeader from './component/ContactHeader/ContactHeader'
import ContactForm from './component/ContactForm/ContactForm'
function App() {
  

  return (
   <div >
      <Navigation/>
     <main className='main_container'>
     <ContactHeader/>
      <ContactForm />
     </main>
   </div>
  )
}

export default App
