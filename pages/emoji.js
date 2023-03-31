import React, { useEffect, useState } from 'react'
import CommonImage from '../components/commonImage'

function Emoji({Emoji}) {
    const [emojis,setEmojis] = useState([])
    useEffect(()=>{
        if (Emoji) {
            const imageUrl = Object.values(Emoji);
            setEmojis([imageUrl])
        }
    },[Emoji])
  return (
    <>
    {emojis?.map((emoji)=>{
        console.log('emoji', emoji)
        return (
            <>
            <CommonImage url={emoji}/>  
            </>
        )
    })}
    </>
  )
}


export async function getStaticProps() {
    const response = await fetch('https://api.github.com/emojis')
    const Emoji = await response.json()
  
    return {
      props: {
        Emoji,
      },
    }
  }
export default Emoji
