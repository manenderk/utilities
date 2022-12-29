import { Tooltip } from "@mantine/core";
import { useEffect, useState } from "react";
import CopyToClipboard from "../../common/CopyToClipboard";
import HelpTextComponent from "../HelpTextComponent/HelpTextComponent";
import DataMapping from "./data-mapping";
import "./SqlColumnsToCSharpVariables.scss";

const SqlColumnsToCSharpVariables = () => {
  const [sqlText, setSqlText] = useState("");
  const [cSharpText, setCSharpText] = useState("");

  const convertText = () => {
    if (!sqlText) {
      setCSharpText("");
      return;
    }
    let newVars = [];
    let vars = sqlText.split("\n");
    vars = vars.map((row) => row.replace(/\s+/g, " "));
    vars.forEach((varRow) => {
      let newVar = "public";
      let data = varRow.split(" ");
      let sqlType = "";
      let isNull = "";
      let columnName = "";
      for (let i = 0; i < data.length; i++) {
        if (i === 0) {
          sqlType = data[i];
        } else if (i === 1) {
          isNull = data[i];
        } else {
          columnName += data[i] + " ";
        }
      }
      columnName = columnName.trim();
      for (let i = 0; i < DataMapping.length; i++) {
        if (DataMapping[i].sqlServer === sqlType) {
          newVar += " " + DataMapping[i].cSharp;
        }
      }
      if (isNull === "yes") {
        newVar += "?";
      }
      if (
        columnName.includes(" ") ||
        columnName.includes("-") ||
        columnName.includes("_")
      ) {
        newVars.push(`[Column("${columnName}")]`);
        columnName = columnName
          .replaceAll(" ", "")
          .replaceAll("-", "")
          .replaceAll("_", "");
      }
      newVar += " " + columnName;
      newVar += " { get; set; }";
      newVars.push(newVar);
    });
    setCSharpText(newVars.join("\n"));
  };

  useEffect(() => {
    convertText();
  }, [sqlText]);

  return (
    <div className="row" id="SqlColumnsToCSharpVariables">
      <div className="col-md-12 mb-4">
        <HelpTextComponent>
          <p>
            It converts SQL Server variable information to C# variables. The SQL
            Server variable information should be provided in this format:
            &lt;Data Type&gt; &lt;Is Null&gt; &lt;Variable Name&gt;
          </p>
          <p>Below is the example conversion</p>
          <div className="row pt-2">
            <div className="col-md-6 mb-2">
              <p>
                <strong>SQL Columns Data</strong>
              </p>
              <div>
                nvarchar no ProdCode
                <br />
                nvarchar yes Preservation
                <br />
                nvarchar yes Description
                <br />
                bit no RTI
                <br />
                nvarchar yes Group
                <br />
                smallint yes GroupCode
                <br />
                nvarchar yes Class
                <br />
                smallint yes ClassCode
                <br />
                nvarchar yes LabelInfo
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <p>
                <strong>C# Variables Data</strong>
              </p>
              <div>
                public String ProdCode {"{"} get; set; {"}"}
                <br />
                public String? Preservation {"{"} get; set; {"}"}
                <br />
                public String? Description {"{"} get; set; {"}"}
                <br />
                public Boolean RTI {"{"} get; set; {"}"}
                <br />
                public String? Group {"{"} get; set; {"}"}
                <br />
                public Int16? GroupCode {"{"} get; set; {"}"}
                <br />
                public String? Class {"{"} get; set; {"}"}
                <br />
                public Int16? ClassCode {"{"} get; set; {"}"}
                <br />
                public String? LabelInfo {"{"} get; set; {"}"}
              </div>
            </div>
          </div>
        </HelpTextComponent>
      </div>
      <div className="col-md-6">
        <h5 className="text-center">SQL Columns Data</h5>
        <div className="form-group">
          <textarea
            rows="20"
            className="form-control"
            value={sqlText}
            onChange={(e) => setSqlText(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="col-md-6">
        <h5 className="text-center">C# Variables Data</h5>
        <div className="form-group position-relative">
          <textarea
            rows="20"
            className="form-control"
            value={cSharpText}
            onChange={(e) => setCSharpText(e.target.value)}
          ></textarea>
          <div id="copy-button">
            <Tooltip label="Copy">
              <button
                className="btn btn-secondary"
                onClick={() => CopyToClipboard(null, cSharpText)}
              >
                <i className="fa fa-clipboard"></i>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SqlColumnsToCSharpVariables;
