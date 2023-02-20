import { useEffect, useState } from 'react';

const TableHeaderGenerator = () => {

  const [jsonInput, setJsonInput] = useState('');
  const [output, setOutput] = useState('');

  const getValue = (key, value) => {
    if (key === "key" || key === "label") {
      return `"${value}"`;
    }
    return value;
  }

  useEffect(() => {
    if (!jsonInput) {
      setOutput('');
      return;
    }
    let obj = {};
    try {
      obj = JSON.parse(jsonInput)
    } catch (error) {
      alert('Invalid json');
      setOutput('');
      return;
    }

    let result = [];
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        let row = {};
        row.key = key;

        let label = key.replace(/([A-Z])/g, " $1");
        label = label.charAt(0).toUpperCase() + label.slice(1);
        row.label = label;


        let dataType = obj[key];
        if (dataType === 0) {
          row.dataType = "TableDataTypes.number";
        } else if (dataType === true) {
          row.dataType = "TableDataTypes.boolean";
        } else if (!isNaN((new Date(dataType)).getTime())) {
          row.dataType = "TableDataTypes.dateTime";
        }
        result.push(row);
      }
    }
    let outputString = "[\r\n";
    result.forEach(row => {
      outputString += "  {\r\n";
      for (const key in row) {
        if (Object.hasOwnProperty.call(row, key)) {
          const value = row[key];
          outputString += `    ${key}: ${getValue(key, value)},\r\n`
        }
      }
      outputString += "  },\r\n";
    })
    outputString += "]";

    setOutput(outputString);
  }, [jsonInput])
  

  
  
  return (
    <>
      <div className="row py-2">
        <div className="col-md-6 mb-2">
          <h5 className="text-center">Start Scratch from New Json</h5>
          <textarea cols="30" rows="10" className="form-control" value={jsonInput} onChange={(e) => setJsonInput(e.target.value)}></textarea>
        </div>
        <div className="col-md-6 mb-4">
          <h5 className="text-center">Existing Table Header Configurations</h5>
          <textarea cols="30" rows="10" className="form-control"></textarea>
        </div>
      </div>
      <div className="row py-2">
        <div className="col-12">
          <h5 className="text-center">Configure</h5>
        </div>
        <div className="col-md-6 mb-2"></div>
        <div className="col-md-6 mb-2">
          <textarea cols="30" rows="10" className="form-control" value={output} readOnly></textarea>
        </div>
      </div>
    </>
  );
};

export default TableHeaderGenerator;
