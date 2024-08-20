import React from 'react'
import { useNavigate } from 'react-router-dom';

function First() {
  // Hook은 함수내에서X  함수컴포넌트최상단에서O

  const navigate = useNavigate(); // 훅을 컴포넌트의 최상위에서 호출

  const HW2page = () => {
    navigate('/second'); // 탐색 함수 호출
  };

  return (
    <div>
      <p>
        학번: 2023204063 <br />
        이름: 라현아
      </p>
      <button onClick={HW2page}>
        HW2
      </button>
    </div>
  );
}
  
export default First;
  