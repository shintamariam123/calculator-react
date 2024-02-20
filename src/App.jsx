
import { useState } from 'react'
import './App.css'

function App() {
  const [display,setDisplay] = useState("")

  const displayContent = (value) =>{
  setDisplay(display + value);
  }

  const clearContent = () =>{
    setDisplay('')
  }

  const equalContent = () =>{
    try{
      setDisplay(eval(display))
    }
    catch(error) {
      setDisplay("Error")

    }
  }

  const deleteContent = () =>{
    setDisplay(display.slice(0,-1))
  }

  return (
    <>
    <div style={{width:'100%',height:'100vh'}} className='d-flex align-items-center justify-content-center'> 
      <div style={{width:'450px',height:'600px'}} className='box d-flex align-items-center justify-content-center'>
       <div style={{width:'350px',height:'520px',paddingLeft:'10px',backgroundColor:'#121212'}} className=' border border-dark rounded d-flex flex-column  '>
       
       
        <div style={{marginTop:'18px',marginLeft:'5px'}} >
        <input type="text"  style={{width:'320px',height:'90px',paddingLeft:'8px',backgroundColor:'#242323',fontSize:'28px',color:'white',border:'1px solid #121212'}} className="input  border border-dark rounded " value={display} readOnly />
          </div>


          <div className='small-box'  style={{marginTop:'15px'}}>
            <input id='input1' onClick={clearContent}  type="button" value="AC" />
            <input onClick={deleteContent}  type="button" value="DEL" />
            <input onClick={() => displayContent('/')} type="button" value="/" />
          </div>


          <div className='small-box'  style={{marginTop:'10px'}}>
            <input onClick={() => displayContent('7')}  type="button" value="7" />
            <input onClick={() => displayContent('8')}  type="button" value="8" />
            <input onClick={() => displayContent('9')}  type="button" value="9" />
            <input onClick={() => displayContent('*')} type="button" value="*" />
          </div>


          <div  className='small-box'  style={{marginTop:'10px'}}>
            <input onClick={() => displayContent('4')}  type="button" value="4" />
            <input onClick={() => displayContent('5')} type="button" value="5" />
            <input onClick={() => displayContent('6')} type="button" value="6" />
            <input onClick={() => displayContent('+')} type="button" value="+" />
          </div>


          <div className='small-box'   style={{marginTop:'10px'}}>
            <input onClick={() => displayContent('1')}  type="button" value="1" />
            <input onClick={() => displayContent('2')}  type="button" value="2" />
            <input onClick={() => displayContent('3')}  type="button" value="3" />
            <input onClick={() => displayContent('-')}  type="button" value="-" />
          </div>


          <div className='small-box' style={{marginTop:'10px'}}>
            <input onClick={() => displayContent('0')}  type="button" value="0" />
            <input onClick={() => displayContent('.')}  type="button" value="." />
            <input onClick={equalContent} id='input2'  type="button" value="=" />
          </div>

       </div>
      </div>
      </div>
    </>
  )
}

export default App
