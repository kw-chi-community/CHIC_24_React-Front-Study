import React from 'react';

function Table({ data, onSort, sortConfig }) {
  const getSortDirection = (key) => {
    if (!sortConfig) return null;
    return sortConfig.key === key ? sortConfig.direction : null;
  };

  const handleSort = (key) => {
    onSort(key);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button onClick={() => handleSort('Name')}>
              Name
              {getSortDirection('Name') === 'asc' ? ' ↑' : getSortDirection('Name') === 'desc' ? ' ↓' : ''}
            </button>
          </th>
          <th>
            <button onClick={() => handleSort('Age')}>
              Age
              {getSortDirection('Age') === 'asc' ? ' ↑' : getSortDirection('Age') === 'desc' ? ' ↓' : ''}
            </button>
          </th>
          <th>
            <button onClick={() => handleSort('City')}>
              City
              {getSortDirection('City') === 'asc' ? ' ↑' : getSortDirection('City') === 'desc' ? ' ↓' : ''}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Name}</td>
            <td>{item.Age}</td>
            <td>{item.City}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
