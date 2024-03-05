import { Tooltip } from "@mantine/core";
import { useEffect, useState } from "react";
import CopyToClipboard from "../../common/CopyToClipboard";
import GetEOL from "../../common/GetEOL";
import HelpTextComponent from "../HelpTextComponent/HelpTextComponent";

const SqlServerSpParamsToCSharpCodeComponent = () => {
  const [sqlText, setSqlText] = useState("");
  const [cSharpText, setCSharpText] = useState("");

  const getCSharpDataType = (sqlDataType) => {
    let returnValue = null;
    sqlDataType = sqlDataType.toUpperCase();

    switch (sqlDataType) {
      case "INT":
        returnValue = "System.Data.SqlDbType.Int";
        break;
      case "VARCHAR":
        returnValue = "System.Data.SqlDbType.VarChar";
        break;
      case "NVARCHAR":
        returnValue = "System.Data.SqlDbType.NVarChar";
        break;
      case "BIT":
        returnValue = "System.Data.SqlDbType.Bit";
        break;
      case "SMALLINT":
        returnValue = "System.Data.SqlDbType.SmallInt";
        break;
      case "DATETIME":
        returnValue = "System.Data.SqlDbType.DateTime";
        break;
      case "DATE":
        returnValue = "System.Data.SqlDbType.Date";
        break;
      case "TIME":
        returnValue = "System.Data.SqlDbType.Time";
        break;
      case "DATETIME2":
        returnValue = "System.Data.SqlDbType.DateTime2";
        break;
      case "DATETIMEOFFSET":
        returnValue = "System.Data.SqlDbType.DateTimeOffset";
        break;
      case "DECIMAL":
        returnValue = "System.Data.SqlDbType.Decimal";
        break;
      case "FLOAT":
        returnValue = "System.Data.SqlDbType.Float";
        break;
    }

    if (sqlDataType.startsWith("VARCHAR(")) {
      returnValue = "System.Data.SqlDbType.VarChar";
    } else if (sqlDataType.startsWith("NVARCHAR(")) {
      returnValue = "System.Data.SqlDbType.NVarChar";
    } else if (sqlDataType.startsWith("DECIMAL(")) {
      returnValue = "System.Data.SqlDbType.Decimal";
    } else if (sqlDataType.startsWith("FLOAT(")) {
      returnValue = "System.Data.SqlDbType.Float";
    }

    return returnValue ?? "System.Data.SqlDbType.UNDETERMINED";
  };

  const processAndCovert = () => {
    if (!sqlText) {
      setCSharpText("");
      return;
    }

    const input = sqlText.trim();
    const eol = GetEOL(input);
    const params = input.split(eol);
    let cSharpParams = params.map((param) => {
      param = param.trim();
      if (param.startsWith(',')) {
        param = param.substring(1);
      }
      const parts = param.split(" ");
      const paramName = parts[0];
      const sqlDataType = getCSharpDataType(parts[1]);
      let size = null;
      if (parts[1].includes("(") && parts[1].includes(")")) {
        size = parts[1].substring(
          parts[1].indexOf("(") + 1,
          parts[1].indexOf(")")
        );
      }
      const direction =
        parts[2] === "OUTPUT"
          ? "System.Data.ParameterDirection.Output"
          : "System.Data.ParameterDirection.Input";
      let value = "NULL";
      if (parts[2] === "=") {
        value = parts[3];
      }
      if (value === "NULL") {
        value = "DBNull.Value";
      }

      const returnString = [];
      returnString.push("new SqlParameter()");
      returnString.push(`{`);
      returnString.push(`ParameterName = "${paramName}",`);
      returnString.push(`SqlDbType = ${sqlDataType},`);
      if (size) {
        returnString.push(`Size = ${size},`);
      }
      returnString.push(`Direction = ${direction},`);
      returnString.push(`Value = ${value}`);
      returnString.push(`}`);
      return returnString.join(eol);
    });
    cSharpParams = cSharpParams.join(`,${eol}`);

    const cSharpCode = [];
    cSharpCode.push(`var dbParams = new SqlParameter[]`);
    cSharpCode.push(`{`);
    cSharpCode.push(cSharpParams);
    cSharpCode.push(`};`);

    setCSharpText(cSharpCode.join(eol));
  };

  useEffect(() => {
    processAndCovert();
  }, [sqlText]);

  return (
    <div
      className="row animate__animated animate__fadeIn"
      id="SqlColumnsToCSharpVariables"
    >
      <div className="col-md-12 mb-4">
        <HelpTextComponent>
          <p>
            It converts SQL Server Stored Procedure Parameters to C# SqlParameter
          </p>
          <p>Below is the example conversion</p>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>SQL Server Params</th>
                  <th>C# Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
<pre>
{
`@CleaningTypeID INT  OUTPUT  
,@Name NVARCHAR(250)   
,@Name_Specified BIT = 0  
,@MinutesToExpiration INT   
,@MinutesToExpiration_Specified BIT = 0  
,@UsesBeforeExpiration INT = NULL  
,@UsesBeforeExpiration_Specified BIT = 0  
,@TimeOfExpirationOnLastDay TIME = NULL  
,@TimeOfExpirationOnLastDay_Specified BIT = 0  
,@Active BIT   
,@Active_Specified BIT = 0  
,@Modified DATETIMEOFFSET   
,@Modified_Specified BIT = 0  
,@ModifiedBy INT   
,@ModifiedBy_Specified BIT = 0 `
}

</pre>
                  </td>
                  <td>
<pre>
{
`var dbParams = new SqlParameter[]
{
new SqlParameter()
{
ParameterName = "@CleaningTypeID",
SqlDbType = System.Data.SqlDbType.Int,
Direction = System.Data.ParameterDirection.Input,
Value = DBNull.Value
},
new SqlParameter()
{
ParameterName = "@Name",
SqlDbType = System.Data.SqlDbType.NVarChar,
Size = 250,
Direction = System.Data.ParameterDirection.Input,
Value = DBNull.Value
},
new SqlParameter()
{
ParameterName = "@Name_Specified",
SqlDbType = System.Data.SqlDbType.Bit,
Direction = System.Data.ParameterDirection.Input,
Value = 0
},
new SqlParameter()
{
ParameterName = "@MinutesToExpiration",
SqlDbType = System.Data.SqlDbType.Int,
Direction = System.Data.ParameterDirection.Input,
Value = DBNull.Value
},
new SqlParameter()
{
ParameterName = "@MinutesToExpiration_Specified",
SqlDbType = System.Data.SqlDbType.Bit,
Direction = System.Data.ParameterDirection.Input,
Value = 0
},
new SqlParameter()
{
ParameterName = "@UsesBeforeExpiration",
SqlDbType = System.Data.SqlDbType.Int,
Direction = System.Data.ParameterDirection.Input,
Value = DBNull.Value
},
new SqlParameter()
{
ParameterName = "@UsesBeforeExpiration_Specified",
SqlDbType = System.Data.SqlDbType.Bit,
Direction = System.Data.ParameterDirection.Input,
Value = 0
},
new SqlParameter()
{
ParameterName = "@TimeOfExpirationOnLastDay",
SqlDbType = System.Data.SqlDbType.Time,
Direction = System.Data.ParameterDirection.Input,
Value = DBNull.Value
},
new SqlParameter()
{
ParameterName = "@TimeOfExpirationOnLastDay_Specified",
SqlDbType = System.Data.SqlDbType.Bit,
Direction = System.Data.ParameterDirection.Input,
Value = 0
},
new SqlParameter()
{
ParameterName = "@Active",
SqlDbType = System.Data.SqlDbType.Bit,
Direction = System.Data.ParameterDirection.Input,
Value = DBNull.Value
},
new SqlParameter()
{
ParameterName = "@Active_Specified",
SqlDbType = System.Data.SqlDbType.Bit,
Direction = System.Data.ParameterDirection.Input,
Value = 0
},
new SqlParameter()
{
ParameterName = "@Modified",
SqlDbType = System.Data.SqlDbType.DateTimeOffset,
Direction = System.Data.ParameterDirection.Input,
Value = DBNull.Value
},
new SqlParameter()
{
ParameterName = "@Modified_Specified",
SqlDbType = System.Data.SqlDbType.Bit,
Direction = System.Data.ParameterDirection.Input,
Value = 0
},
new SqlParameter()
{
ParameterName = "@ModifiedBy",
SqlDbType = System.Data.SqlDbType.Int,
Direction = System.Data.ParameterDirection.Input,
Value = DBNull.Value
},
new SqlParameter()
{
ParameterName = "@ModifiedBy_Specified",
SqlDbType = System.Data.SqlDbType.Bit,
Direction = System.Data.ParameterDirection.Input,
Value = 0
}
};`
}
</pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </HelpTextComponent>
      </div>
      <div className="col-md-6 mb-3">
        <h5 className="text-center">SQL Server Params</h5>
        <div className="form-group">
          <textarea
            rows="20"
            className="form-control"
            value={sqlText}
            onChange={(e) => setSqlText(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <h5 className="text-center">C# Code</h5>
        <div className="form-group position-relative">
          <textarea
            rows="20"
            className="form-control"
            value={cSharpText}
            onChange={(e) => setCSharpText(e.target.value)}
          ></textarea>
          <div className="input-copy-button">
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

export default SqlServerSpParamsToCSharpCodeComponent;
