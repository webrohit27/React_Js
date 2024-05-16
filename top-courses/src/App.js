import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from "./components/Cards";
import { filterData, apiUrl } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {

  const[courses, setCourses] = useState(null);
  const[loading, setLoading] = useState(true);

  async functon fetchData(){
    setLoading(true);
    try{
      let response = fetch(apiUrl);
      let output = await response.json();
      /// output ->
      setCourses(output);
      
    }
    catch(error){
       toast.error("network")
    }
    setLoading(false);
  }

  useEffect( ()=>{
       fetchData();
  }, [])

  return (
    <div>
       <div> <Navbar> </Navbar></div>
       <div> <Filter filterData={filterData} > </Filter></div>
       <div> </div>
  
    </div>
  );
}

export default App;
