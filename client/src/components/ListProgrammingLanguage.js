import React from 'react';

const ListPL = ({ PLs }) => {

  return (
    <div>
      {
            (
              PLs.map(PL => {
                return (
                  <li key={PL._id}>{PL.action}</li>
                )
              })
            )
      }
    </div>
  )
}

export default ListPL