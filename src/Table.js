const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Disease</th>
            {/* <th>Symptom</th> */}
          </tr>
          {data.map((item) => (
            <tr>
              {/* <td>{item.disease}</td>
              <td>{item.symptoms}</td> */}
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  