import React from 'react'

function ItemPost({item}) {
  return (
    <tr>

      <td>{item.userId}</td>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.body}</td>


    </tr>
  )
}

export default ItemPost