import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { MdSend } from 'react-icons/md';
import './chatGet.css'




const ChatGet = () => {

    const [prompt, setPrompt] = useState("")
    const [outPut, setOutput] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("chat:",prompt);
        axios.post('/getChat', {
                prompt,
          })
          .then(function (response) {
            // console.log(response);
            let arr = response.data;
            // console.log(arr)
            setOutput([...outPut, arr])
            setPrompt("")
            // console.log("otutput:", outPut)
          })
          .catch(function (error) {
            console.log(error);
          });


    }


  return (
    <div className='fo text-bold w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#ced6e0] ' >
            <p className='shadow-xl w-[360px] md:w-[600px]  text-center bg-[#57606f] text-white p-3' >SAN GPT</p>

        <div className='h-[500px] w-[360px] md:w-[600px] shadow-xl bg-[#f1f2f6] flex flex-col justify-end items-center  overflow-hidden'>
            <div className='w-full'>


            {/* {outPut ? outPut : "Hi, I'm Sanjay. How can I assist you?"} */}
            
            <div className='border  mx-6 py-2 '>
            {
                outPut && outPut.length > 0 ? outPut.map((itemes, i)=>{
                    return(
                        <div key={i} >
                        
                            <div className=' mt-2 p-2  border bg-yellow-50'>{itemes}</div>

                        </div>
                    )
                }) : "Hi, I'm Sanjay. How can I assist you?"
            }
            </div> 



            </div>

            <form onSubmit={handleSubmit}>
                <div className='flex m-5 '>

                <input type='text' value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder='enter' className='p-3 border border-[#57606f] w-[300px] md:w-[500px] '/>
                <button className='text-2xl  pl-4 pr-4 py-3 bg-[#57606f]'><MdSend/></button>
                </div>
            </form>

    </div>
    </div>

  )
}

export default ChatGet