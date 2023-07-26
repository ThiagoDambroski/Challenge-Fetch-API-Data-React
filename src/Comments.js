import React from 'react'
import { useEffect,useState } from 'react'
import ItemComments from './ItemComments'

function Comments() {

    const api_url = "https://jsonplaceholder.typicode.com/comments"

    const [list,setList] = useState([])

    const [error,setError] = useState(null)

    useEffect(() => {
        
        const fetchComments = async () => {
            try{
                const response = await fetch(api_url)
                if(!response.ok) throw Error('Error on Fetch Comments')
                const newList = await response.json()
                setList(newList)
                setError(null)
            }catch(err){
                setError(err.message)
            }     
            
        }
        
        (async () => await fetchComments())()



    },[])


  return (
    <div>
   {error && <p>{`Erro: ${error}`}</p>}
   {!error && 
        <table>
            <tr>
                <th>Post Id</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
            {list.map((item) => 
            <ItemComments
                item = {item}
            />
        )}

        </table>
    }
        
        
    
    </div>
  )
}

export default Comments