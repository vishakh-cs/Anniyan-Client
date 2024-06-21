
import './App.css'
import ChatContainer from './Components/Chats/ChatContainer';
import UserLogin from './Components/UserLogin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <UserLogin />}/>
        <Route path='/chat' element={<ChatContainer />} />
      </Routes>
    </Router>
     

    </>
  )
}

export default App
