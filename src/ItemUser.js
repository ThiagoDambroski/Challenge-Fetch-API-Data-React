import React from 'react'


function ItemUser({item}) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>
            street: {item.address.street} <br/>
            suite: {item.address.suite} <br/>
            city: {item.address.city} <br/>
            zipcode: {item.address.zipcode} <br/>
            Geo: <br/>
            Lat: {item.address.geo.lat} <br/>
            Lng: {item.address.geo.lng} <br/>
      </td>
      <td>{item.phone}</td>
      <td>{item.website}</td>
      <td>
        company name: {item.company.name}<br/>
        company catchPhrase: {item.company.catchPhrase}<br/>
        company bs: {item.company.bs}<br/>
      </td>
            
    </tr>
  )
}

export default ItemUser