import Navbar from './components/Navbar';
import Filter from './components/Filter';
import { filterData } from './data';

function App() {
  return (
    <div>
       <div> <Navbar> </Navbar></div>
       <div> <Filter filterData={filterData} > </Filter></div>
  
    </div>
  );
}

export default App;
