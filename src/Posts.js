import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemPost from './ItemPost'

function Posts() {
    
    const Api_url = "https://jsonplaceholder.typicode.com/posts"


    const [list,setList] = useState([])
    const [error,setError] = useState(null)


  useEffect(() => {

    const fetchList = async () => {
      try{
        const response = await fetch(Api_url)
        if(!response.ok) throw Error('Erro on the fetch')
        const newList = await response.json()
        setList(newList)
        setError(null)
      }catch(err){
        setError(err.message)
      }
      
    }

    (async () => await fetchList())()

  },[])



    

  return (
    <>
      {error && <p>{`Error: ${error}`}</p>}
      <table>
        <tr>
          <th>User ID</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {list.map((item) => 
        <ItemPost
          item = {item}
        />
      )}
      </table>
      
    </>
  )
}

export default Posts