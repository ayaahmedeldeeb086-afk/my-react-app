import { useState } from 'react';

function Counter() {
  // إنشاء متغيّر تفاعلي قيمته الابتدائية 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '2px solid #646cff', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
      <h2>العداد: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px 15px' }}>
        زيادة (+)
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px 15px' }}>
        إنقاص (-)
      </button>
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#ff4d4d', color: '#fff' }}>
        تصفير
      </button>
    </div>
  );
}

export default Counter;