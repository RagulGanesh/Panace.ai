import { useEffect, useState } from "react";
import { Users } from "./users";
import Table from "./Table";

// inputData.data.filter(item => Array.isArray(item));
function App() {
  const [query, setQuery] = useState("");
  const keys = ["disease", "symptoms"];
  const search=(diseases)=>{
    // const filteredSymptoms = [];
    // diseases.forEach(disease => {
    //   const filteredDiseaseSymptoms = disease.symptoms.filter(symptom => symptom.toLowerCase().includes(query));
    //   if (filteredDiseaseSymptoms.length > 0) {
    //     filteredSymptoms.push(...filteredDiseaseSymptoms.map(symptom => `${disease.disease}`));
    //   }
    // });
    const filteredSymptoms = new Set();

      diseases.forEach(disease => {
        const filteredDiseaseSymptoms = disease.symptoms.filter(symptom => symptom.toLowerCase().includes(query));
        filteredDiseaseSymptoms.forEach(symptom => {
          filteredSymptoms.add(`${disease.disease}`);
        });
      });
    console.log(filteredSymptoms)
    return [...filteredSymptoms]
  }
  // const search = (data) => {

  //   // return data.symptoms.filter(data1=> data1.includes(query))
    
  //     // return data.filter(data => {
  //     //   data.symptoms.forEach((symptom)=>{
  //     //     symptom.includes(query)
  //     //   })
  //     // });

  //   return data.filter((item) =>
  //     keys.some((key) => item[key].includes(query))
  //   );
  // };
return (
  <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    {<Table data={search(Users)} />}
  </div>
);
}

export default App;
