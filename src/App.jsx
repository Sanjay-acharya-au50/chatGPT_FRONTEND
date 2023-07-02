
import './App.css'
// import Chat from './component/Chat'
import axios from 'axios'
import ChatGet from './component/ChatGet';

axios.defaults.baseURL = "https://sanjay-chatgpt-backend.onrender.com";
axios.defaults.withCredentials = true;


function App() {


  return (
    <>
      {/* <Chat/> */}
      <ChatGet/>
    </>
  )
}

export default App
