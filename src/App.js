// import { useState } from 'react';
// import './App.css';
// import User from './components/sessions/User';
// // import PrivateText from './components/PrivateText';

// const App = () => {
//   const [currUser, setCurrUser] = useState(null);
//   return (
//     <div className="App">
//       <User currUser={currUser} setCurrUser={setCurrUser} />
//     </div>
//   );
// };
// export default App;
import './App.css';
import React, { useState } from 'react';
import AppRouter from './routers';
import Header from './components/Header';

function App() {
  const [currUser, setCurrUser] = useState(null);
  return (
    <div className="row">
      <Header />
      <div className="col-md-10 offset-md-2 main-content">
        <AppRouter currUser={currUser} setCurrUser={setCurrUser} />
      </div>
    </div>
  );
}

export default App;
