// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   const increase = () => {
//     setCount(count + 1);
//   };
//   const decrease = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };
//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div className="container text-center mt-5">
//       <div className="card shadow p-5 mx-auto" style={{ maxWidth: "400px" }}>
//         <h1 className="mb-4">{count}</h1>
//         <div className="d-flex justify-content-center gap-3">
//           <button className="btn btn-success" onClick={increase}>
//             +
//           </button>

//           <button className="btn btn-danger" onClick={decrease}>
//             -
//           </button>

//           <button className="btn btn-secondary" onClick={reset}>
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;


import Counter from './components/Counter';

function App() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', padding: '30px' }}>
      <h1>تطبيقي الأول باستخدام React 🚀</h1>
      <p>تجربة الـ Components والـ State:</p>
      
      {/* استدعاء المكون */}
      <Counter />
    </div>
  );
}

export default App;
