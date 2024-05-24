import React from 'react'
import "./home.css"
function Home() {
    function handleSubmit(e){
        e.preventDefault()
        document.location='https://www.youtube.com/watch?v=xvFZjo5PgG0'
    }
  return (
    <div className='Home'>
        <div className="data">
            <div className="part1">
            <h1 className='heading'>Try Sora AI</h1>
            <p className='para1'>Explore the frontiers of digital creativity with OpenAI's groundbreaking text-to-video model, Sora. Transform your words into vivid, dynamic videos effortlessly. Sora is your gateway to unparalleled creative possibilities, merging the power of AI with the art of storytelling.</p>
            </div>
            <div className="part2">
                <form className='bom'>
                    <input type="text" className='input-text'  placeholder='Enter Prompt....'/>
                    <a onClick={(e)=>handleSubmit(e)} href='' className='tag'>Submit</a>
                </form>
                <p className='para2'>A young man at his 20s is sitting on a piece of cloud in the sky, reading a book.</p>
            </div>
        </div>

    </div>
  )
}

export default Home