import React from 'react'

function ItemComments({item}) {
  return (
    <tr>
        <td>{item.postId}</td>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.body}</td>
    </tr>
  )
}

export default ItemComments