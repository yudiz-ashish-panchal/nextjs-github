import React,{useState} from 'react'
import { useRouter } from 'next/router'
import styles from "../styles/Form.module.scss"

function Form() {
    const router = useRouter() 
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
      setSearch(e.target.value);
    };
    function handleSubmit(e) {
      e.preventDefault()
      if (search) {        
        router.push({pathname:`/containdata`,query: {data:search}});
      }
    }
  return (
    <div className={styles.form}>
         <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" value ={search} onChange={(e) => handleChange(e)} />
        <button >
          submit
        </button>
      </form>
    </div>
  )
}

export default Form
