import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import FilterButtons from './components/FilterButtons';
import Pagination from './components/Pagination';

   // JSON 데이터

      var jsonData = [
        {
          Name: "박지영",
          Age: 33,
          City: "제주",
        },
        {
          Name: "김태희",
          Age: 43,
          City: "세종",
        },
        {
          Name: "정수빈",
          Age: 55,
          City: "강릉",
        },
        {
          Name: "박지영",
          Age: 46,
          City: "부산",
        },
        {
          Name: "김태희",
          Age: 27,
          City: "서울",
        },
        {
          Name: "정수빈",
          Age: 31,
          City: "대전",
        },
        {
          Name: "정수빈",
          Age: 36,
          City: "제주",
        },
        {
          Name: "이민호",
          Age: 48,
          City: "부산",
        },
        {
          Name: "정수빈",
          Age: 61,
          City: "부산",
        },
        {
          Name: "박지영",
          Age: 54,
          City: "서울",
        },
        {
          Name: "이민호",
          Age: 40,
          City: "인천",
        },
        {
          Name: "이민호",
          Age: 28,
          City: "제주",
        },
        {
          Name: "김철수",
          Age: 58,
          City: "부산",
        },
        {
          Name: "서영희",
          Age: 30,
          City: "인천",
        },
        {
          Name: "이민호",
          Age: 68,
          City: "제주",
        },
        {
          Name: "서영희",
          Age: 67,
          City: "제주",
        },
        {
          Name: "김태희",
          Age: 48,
          City: "울산",
        },
        {
          Name: "이민호",
          Age: 46,
          City: "서울",
        },
        {
          Name: "서영희",
          Age: 56,
          City: "대구",
        },
        {
          Name: "박지영",
          Age: 24,
          City: "서울",
        },
        {
          Name: "김태희",
          Age: 39,
          City: "제주",
        },
        {
          Name: "김철수",
          Age: 30,
          City: "제주",
        },
        {
          Name: "김태희",
          Age: 62,
          City: "대전",
        },
        {
          Name: "김철수",
          Age: 39,
          City: "부산",
        },
        {
          Name: "정수빈",
          Age: 41,
          City: "부산",
        },
        {
          Name: "송혜교",
          Age: 29,
          City: "인천",
        },
        {
          Name: "최영희",
          Age: 34,
          City: "세종",
        },
        {
          Name: "박지영",
          Age: 61,
          City: "대구",
        },
        {
          Name: "김철수",
          Age: 66,
          City: "인천",
        },
        {
          Name: "박지영",
          Age: 50,
          City: "세종",
        },
        {
          Name: "김태희",
          Age: 49,
          City: "대구",
        },
        {
          Name: "홍길동",
          Age: 69,
          City: "부산",
        },
        {
          Name: "송혜교",
          Age: 60,
          City: "강릉",
        },
        {
          Name: "송혜교",
          Age: 48,
          City: "울산",
        },
        {
          Name: "김철수",
          Age: 59,
          City: "대구",
        },
        {
          Name: "김철수",
          Age: 61,
          City: "대전",
        },
        {
          Name: "최영희",
          Age: 58,
          City: "대구",
        },
        {
          Name: "정수빈",
          Age: 30,
          City: "인천",
        },
        {
          Name: "김철수",
          Age: 36,
          City: "강릉",
        },
        {
          Name: "최영희",
          Age: 63,
          City: "강릉",
        },
        {
          Name: "박지영",
          Age: 29,
          City: "부산",
        },
        {
          Name: "홍길동",
          Age: 23,
          City: "광주",
        },
        {
          Name: "정수빈",
          Age: 46,
          City: "대구",
        },
        {
          Name: "정수빈",
          Age: 28,
          City: "세종",
        },
        {
          Name: "박지영",
          Age: 49,
          City: "울산",
        },
        {
          Name: "이민호",
          Age: 33,
          City: "제주",
        },
        {
          Name: "홍길동",
          Age: 44,
          City: "대전",
        },
        {
          Name: "장미경",
          Age: 27,
          City: "강릉",
        },
        {
          Name: "박지영",
          Age: 51,
          City: "광주",
        },
        {
          Name: "김태희",
          Age: 46,
          City: "대전",
        },
        {
          Name: "최영희",
          Age: 24,
          City: "광주",
        },
        {
          Name: "송혜교",
          Age: 43,
          City: "인천",
        },
        {
          Name: "정수빈",
          Age: 48,
          City: "울산",
        },
        {
          Name: "장미경",
          Age: 43,
          City: "울산",
        },
        {
          Name: "송혜교",
          Age: 25,
          City: "서울",
        },
        {
          Name: "최영희",
          Age: 50,
          City: "서울",
        },
        {
          Name: "홍길동",
          Age: 51,
          City: "서울",
        },
        {
          Name: "정수빈",
          Age: 20,
          City: "제주",
        },
        {
          Name: "송혜교",
          Age: 44,
          City: "강릉",
        },
        {
          Name: "김태희",
          Age: 20,
          City: "대구",
        },
        {
          Name: "박지영",
          Age: 43,
          City: "부산",
        },
        {
          Name: "서영희",
          Age: 56,
          City: "서울",
        },
        {
          Name: "장미경",
          Age: 28,
          City: "부산",
        },
        {
          Name: "박지영",
          Age: 52,
          City: "인천",
        },
        {
          Name: "최영희",
          Age: 43,
          City: "대전",
        },
        {
          Name: "김철수",
          Age: 20,
          City: "광주",
        },
        {
          Name: "송혜교",
          Age: 36,
          City: "울산",
        },
        {
          Name: "홍길동",
          Age: 56,
          City: "부산",
        },
        {
          Name: "김태희",
          Age: 36,
          City: "인천",
        },
        {
          Name: "송혜교",
          Age: 49,
          City: "강릉",
        },
        {
          Name: "홍길동",
          Age: 69,
          City: "부산",
        },
        {
          Name: "김철수",
          Age: 28,
          City: "서울",
        },
        {
          Name: "서영희",
          Age: 52,
          City: "부산",
        },
        {
          Name: "이민호",
          Age: 53,
          City: "대구",
        },
        {
          Name: "김철수",
          Age: 39,
          City: "울산",
        },
        {
          Name: "최영희",
          Age: 41,
          City: "광주",
        },
        {
          Name: "김철수",
          Age: 48,
          City: "강릉",
        },
        {
          Name: "서영희",
          Age: 43,
          City: "대전",
        },
        {
          Name: "김태희",
          Age: 30,
          City: "부산",
        },
        {
          Name: "장미경",
          Age: 50,
          City: "광주",
        },
        {
          Name: "김철수",
          Age: 38,
          City: "강릉",
        },
        {
          Name: "최영희",
          Age: 69,
          City: "세종",
        },
        {
          Name: "최영희",
          Age: 31,
          City: "강릉",
        },
        {
          Name: "박지영",
          Age: 35,
          City: "강릉",
        },
        {
          Name: "홍길동",
          Age: 27,
          City: "부산",
        },
        {
          Name: "송혜교",
          Age: 60,
          City: "대전",
        },
        {
          Name: "김태희",
          Age: 67,
          City: "대전",
        },
        {
          Name: "박지영",
          Age: 54,
          City: "제주",
        },
        {
          Name: "김철수",
          Age: 51,
          City: "인천",
        },
        {
          Name: "이민호",
          Age: 23,
          City: "부산",
        },
        {
          Name: "송혜교",
          Age: 53,
          City: "서울",
        },
        {
          Name: "김철수",
          Age: 60,
          City: "서울",
        },
        {
          Name: "김태희",
          Age: 32,
          City: "대전",
        },
        {
          Name: "송혜교",
          Age: 60,
          City: "세종",
        },
        {
          Name: "홍길동",
          Age: 29,
          City: "대전",
        },
        {
          Name: "최영희",
          Age: 31,
          City: "대구",
        },
        {
          Name: "서영희",
          Age: 46,
          City: "부산",
        },
        {
          Name: "홍길동",
          Age: 48,
          City: "대구",
        },
        {
          Name: "서영희",
          Age: 62,
          City: "대전",
        },
        {
          Name: "장미경",
          Age: 50,
          City: "인천",
        },
      ];

function App() {
  const [data, setData] = useState(jsonData);
  const [filteredData, setFilteredData] = useState(jsonData);
  const [filter, setFilter] = useState('전체');
  const [sortConfig, setSortConfig] = useState({ key: 'Name', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const newFilteredData = filter === '전체' ? jsonData : jsonData.filter(item => item.City === filter);
    setFilteredData(newFilteredData);
  }, [filter]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortConfig.key === 'Age') {
        return sortConfig.direction === 'asc'
          ? a[sortConfig.key] - b[sortConfig.key]
          : b[sortConfig.key] - a[sortConfig.key];
      }
      return sortConfig.direction === 'asc'
        ? a[sortConfig.key].localeCompare(b[sortConfig.key])
        : b[sortConfig.key].localeCompare(a[sortConfig.key]);
    });
    setData(sortedData);
  }, [filteredData, sortConfig]);

  const handleFilterChange = (city) => {
    setFilter(city);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 페이징 처리
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 수 계산
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="App">
      <h1>JSON to HTML Table</h1>
      <FilterButtons filter={filter} onFilterChange={handleFilterChange} />
      <Table data={currentItems} onSort={handleSort} sortConfig={sortConfig} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
