import { useEffect, useState } from "react";
// import { Users } from "./users";
import Table from "./Table";
import axios from "axios";

// inputData.data.filter(item => Array.isArray(item));
function App() {
  const [query, setQuery] = useState("");
  // const keys = ["disease", "symptoms"];
  const [Users,SetUsers]=useState([]);

  const getData=async()=>{
    const res=await axios.get("http://localhost:8000/")
    
    
    SetUsers(res.data);
  }

  useEffect(()=>{
      getData();
  },[])
  const search=(diseases)=>{

    // Only for 1 symptom

    // const filteredSymptoms = new Set();

    //   diseases.forEach(disease => {
    //     const filteredDiseaseSymptoms = disease.symptoms.filter(symptom => symptom.toLowerCase().includes(query));
    //     filteredDiseaseSymptoms.forEach(symptom => {
    //       filteredSymptoms.add(`${disease.disease}`);
    //     });
    //   });
    // console.log(filteredSymptoms)
    // if(filteredSymptoms.size===0) return ["No disease Found"]
    // return [...filteredSymptoms]
    // const matchingDiseasesList = document.getElementById('matchingDiseasesList');
    
    // For multiple symptoms

    let arr=[]
    if(query.length===0){
      diseases.forEach(disease => {
        arr.push(disease.disease)
      });
      console.log(diseases.length)
      return arr
    }
    const inputSymptoms = query.split(',').map(symptom => symptom.trim());
      let matchingDiseaseNames = [];

      diseases.forEach(disease => {
        const hasAllSymptoms = inputSymptoms.every(inputSymptom =>
          disease.symptoms.includes(inputSymptom)
        );

        if (hasAllSymptoms) {
          matchingDiseaseNames.push(disease.disease);
        }
      });
      console.log(matchingDiseaseNames.length)
      return matchingDiseaseNames;
  }

return (
  <div className="app bg-purple-300  h-screen">
    <div className="bg-purple-300 ">

    <div className="flex justify-center  bg-purple-300 items-center pt-5 ">

      <input
        className="search w-1/5 px-5 py-3 border-2 border-black rounded-2xl "
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        </div>
    {<Table data={search(Users)} />}
        </div>
  </div>
);
}

export default App;
