import{r as o,j as e}from"./index-Yu54hfrR.js";import{H as x,T as b,C as u}from"./HelpTextComponent-BH9MyqDR.js";const v=[{sqlServer:"varbinary",clrSqlServer:"SqlBytes, SqlBinary",cSharp:"Byte[]"},{sqlServer:"binary",clrSqlServer:"SqlBytes, SqlBinary",cSharp:"Byte[]"},{sqlServer:"image",clrSqlServer:"None",cSharp:"None"},{sqlServer:"varchar",clrSqlServer:"None",cSharp:"None"},{sqlServer:"char",clrSqlServer:"None",cSharp:"None"},{sqlServer:"nvarchar",clrSqlServer:"SqlChars, SqlString",cSharp:"String"},{sqlServer:"nchar",clrSqlServer:"SqlChars, SqlString",cSharp:"String"},{sqlServer:"text",clrSqlServer:"None",cSharp:"None"},{sqlServer:"ntext",clrSqlServer:"None",cSharp:"None"},{sqlServer:"uniqueidentifier",clrSqlServer:"SqlGuid",cSharp:"Guid"},{sqlServer:"rowversion",clrSqlServer:"None",cSharp:"Byte[]"},{sqlServer:"bit",clrSqlServer:"SqlBoolean",cSharp:"Boolean"},{sqlServer:"tinyint",clrSqlServer:"SqlByte",cSharp:"Byte"},{sqlServer:"smallint",clrSqlServer:"SqlInt16",cSharp:"Int16"},{sqlServer:"int",clrSqlServer:"SqlInt32",cSharp:"int"},{sqlServer:"bigint",clrSqlServer:"SqlInt64",cSharp:"Int64"},{sqlServer:"smallmoney",clrSqlServer:"SqlMoney",cSharp:"Decimal"},{sqlServer:"money",clrSqlServer:"SqlMoney",cSharp:"Decimal"},{sqlServer:"numeric",clrSqlServer:"SqlDecimal",cSharp:"Decimal"},{sqlServer:"decimal",clrSqlServer:"SqlDecimal",cSharp:"Decimal"},{sqlServer:"real",clrSqlServer:"SqlSingle",cSharp:"Single"},{sqlServer:"float",clrSqlServer:"SqlDouble",cSharp:"Double"},{sqlServer:"smalldatetime",clrSqlServer:"SqlDateTime",cSharp:"DateTime"},{sqlServer:"datetimeoffset",clrSqlServer:"SqlDateTimeOffset",cSharp:"DateTimeOffset"},{sqlServer:"datetime",clrSqlServer:"SqlDateTime",cSharp:"DateTime"},{sqlServer:"sql_variant",clrSqlServer:"None",cSharp:"Object"},{sqlServer:"User-defined type(UDT)",clrSqlServer:"None",cSharp:"user-defined type"},{sqlServer:"table",clrSqlServer:"None",cSharp:"None"},{sqlServer:"cursor",clrSqlServer:"None",cSharp:"None"},{sqlServer:"timestamp",clrSqlServer:"None",cSharp:"None"},{sqlServer:"xml",clrSqlServer:"SqlXml",cSharp:"None"}],f=()=>{const[t,m]=o.useState(""),[q,c]=o.useState(""),d=()=>{if(!t){c("");return}let s=[],n=t.split(`
`);n=n.map(i=>i.replace(/\s+/g," ")),n.forEach(i=>{let a="public",S=i.split(" "),p="",h="",l="";for(let r=0;r<S.length;r++)r===0?p=S[r]:r===1?h=S[r]:l+=S[r]+" ";l=l.trim();for(let r=0;r<v.length;r++)v[r].sqlServer===p&&(a+=" "+v[r].cSharp);h==="yes"&&(a+="?"),(l.includes(" ")||l.includes("-")||l.includes("_"))&&(s.push(`[Column("${l}")]`),l=l.replaceAll(" ","").replaceAll("-","").replaceAll("_","")),a+=" "+l,a+=" { get; set; }",s.push(a)}),c(s.join(`
`))};return o.useEffect(()=>{d()},[t]),e.jsxs("div",{className:"row animate__animated animate__fadeIn",id:"SqlColumnsToCSharpVariables",children:[e.jsx("div",{className:"col-md-12 mb-4",children:e.jsxs(x,{children:[e.jsx("p",{children:"It converts SQL Server variable information to C# variables. The SQL Server variable information should be provided in this format: <Data Type> <Is Null> <Variable Name>"}),e.jsx("p",{children:"Below is the example conversion"}),e.jsxs("div",{className:"row pt-2",children:[e.jsxs("div",{className:"col-md-6 mb-2",children:[e.jsx("p",{children:e.jsx("strong",{children:"SQL Columns Data"})}),e.jsxs("div",{children:["nvarchar no ProdCode",e.jsx("br",{}),"nvarchar yes Preservation",e.jsx("br",{}),"nvarchar yes Description",e.jsx("br",{}),"bit no RTI",e.jsx("br",{}),"nvarchar yes Group",e.jsx("br",{}),"smallint yes GroupCode",e.jsx("br",{}),"nvarchar yes Class",e.jsx("br",{}),"smallint yes ClassCode",e.jsx("br",{}),"nvarchar yes LabelInfo"]})]}),e.jsxs("div",{className:"col-md-6 mb-2",children:[e.jsx("p",{children:e.jsx("strong",{children:"C# Variables Data"})}),e.jsxs("div",{children:["public String ProdCode ","{"," get; set; ","}",e.jsx("br",{}),"public String? Preservation ","{"," get; set; ","}",e.jsx("br",{}),"public String? Description ","{"," get; set; ","}",e.jsx("br",{}),"public Boolean RTI ","{"," get; set; ","}",e.jsx("br",{}),"public String? Group ","{"," get; set; ","}",e.jsx("br",{}),"public Int16? GroupCode ","{"," get; set; ","}",e.jsx("br",{}),"public String? Class ","{"," get; set; ","}",e.jsx("br",{}),"public Int16? ClassCode ","{"," get; set; ","}",e.jsx("br",{}),"public String? LabelInfo ","{"," get; set; ","}"]})]})]})]})}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{className:"text-center",children:"SQL Columns Data"}),e.jsx("div",{className:"form-group",children:e.jsx("textarea",{rows:"20",className:"form-control",value:t,onChange:s=>m(s.target.value)})})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{className:"text-center",children:"C# Variables Data"}),e.jsxs("div",{className:"form-group position-relative",children:[e.jsx("textarea",{rows:"20",className:"form-control",value:q,onChange:s=>c(s.target.value)}),e.jsx("div",{className:"input-copy-button",children:e.jsx(b,{label:"Copy",children:e.jsx("button",{className:"btn btn-secondary",onClick:()=>u(null,q),children:e.jsx("i",{className:"fa fa-clipboard"})})})})]})]})]})};export{f as default};
