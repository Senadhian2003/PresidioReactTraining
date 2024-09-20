import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActionComponent from './components/ActionComponent/ActionComponent';
import { useState } from 'react';
import TableComponent from './components/TableComponent/TableComponent';
import { ItemProvider } from './components/ItemContext';

function App() {
  

  const [data, setData] = useState([])


  return (

    <ItemProvider>

    <div className="App">
      

      <ActionComponent/>
      <TableComponent/>



    </div>

    </ItemProvider>

  );
}

export default App;
