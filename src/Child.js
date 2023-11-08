import React from "react"

export default function Child({books}){
return(
  <div>
    <table>
      <thead>
        <tr>
        <th>Serial No</th>
        <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map((book,index)=>(
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{book}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)
}