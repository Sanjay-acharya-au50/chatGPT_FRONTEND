
import './App.css'
// import Chat from './component/Chat'
import axios from 'axios'
import ChatGet from './component/ChatGet';

axios.defaults.baseURL = "http://localhost:5000";
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
