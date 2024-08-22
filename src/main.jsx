import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Messages from "./Components/Messages/Messages.jsx"
import Blog from "./Components/Blog/Blog.jsx"


createRoot(document.getElementById('root')).render(


  <StrictMode>


    <BrowserRouter>
      {/* <App /> */}

      <Routes>

        <Route path="/" element={<App />} >

          <Route path="messages" element={<Messages />} />

        <Route path="Blog" element={<Blog />} />
        </Route>


      </Routes>
      <Routes>

      </Routes>

    </BrowserRouter>

  </StrictMode>,
)
