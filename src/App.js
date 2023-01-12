import {Link,Route,Routes} from 'react-router-dom'
import AddCustomers from './pages/AddCustomers';
import Customers from './pages/Customers';
import './App.css'


function App() {
  return (
  <>
     <ul>
        <li>
          <Link to={"/"}>Customers</Link>
        </li>
        <li>
          <Link to={"/AddCustomers"}>Add Customers</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/" element={<Customers/>}/>
          <Route path="/AddCustomers" element={<AddCustomers/>}/>
        </Routes>
      </div>
  </>
  );
}

export default App;
