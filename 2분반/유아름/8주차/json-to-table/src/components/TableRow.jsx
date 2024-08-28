import React from 'react';

function TableRow({ item }) {
  return (
    <tr>
      <td>{item.Name}</td>
      <td>{item.Age}</td>
      <td>{item.City}</td>
    </tr>
  );
}

export default TableRow;
