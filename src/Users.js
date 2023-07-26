import React from 'react'
import { useState,useEffect } from 'react'
import ItemUser from './ItemUser'

function Users() {

    const api_url = "https://jsonplaceholder.typicode.com/users"

    const [list,setList] = useState([])

    const [error,setError] = useState(null)


    useEffect(() => {

        const fetchUsers = async () => {
            try{
                const response = await fetch(api_url)
                if(!response.ok) throw Error("erro on the fetch")
                const newList = await response.json()
                setError(null)
                setList(newList)
            }catch(err){
                setError(err.message)
            }
            
        }

        (async () => await fetchUsers())()


    },[])


  return (
    <div>
        {error && <p>{`Error: ${error}`}</p>}
        {!error && 
            <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>phone</th>
                <th>webSite</th>
                <th>Company informations</th>
            </tr>
            {list.map((item) => (
            <ItemUser
                key = {item.id}
                item = {item}
            />
            ))}

            </table>
            
        }
        
       
    </div>
  )
}

export default Users