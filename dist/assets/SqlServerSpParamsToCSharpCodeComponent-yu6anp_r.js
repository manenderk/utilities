import{r as c,j as e}from"./index-CEHBdBed.js";import{H as h,T as N,C as P}from"./HelpTextComponent-CGyVLrqv.js";import{G as f}from"./GetEOL-Du6e4coz.js";import"./use-floating-auto-update-B3aIXb2B.js";const j=()=>{const[n,y]=c.useState(""),[p,D]=c.useState(""),T=t=>{let a=null;switch(t){case"INT":a="System.Data.SqlDbType.Int";break;case"VARCHAR":a="System.Data.SqlDbType.VarChar";break;case"NVARCHAR":a="System.Data.SqlDbType.NVarChar";break;case"BIT":a="System.Data.SqlDbType.Bit";break;case"SMALLINT":a="System.Data.SqlDbType.SmallInt";break;case"DATETIME":a="System.Data.SqlDbType.DateTime";break;case"DATE":a="System.Data.SqlDbType.Date";break;case"TIME":a="System.Data.SqlDbType.Time";break;case"DATETIME2":a="System.Data.SqlDbType.DateTime2";break;case"DATETIMEOFFSET":a="System.Data.SqlDbType.DateTimeOffset";break;case"DECIMAL":a="System.Data.SqlDbType.Decimal";break;case"FLOAT":a="System.Data.SqlDbType.Float";break}return t.startsWith("VARCHAR(")?a="System.Data.SqlDbType.VarChar":t.startsWith("NVARCHAR(")?a="System.Data.SqlDbType.NVarChar":t.startsWith("DECIMAL(")?a="System.Data.SqlDbType.Decimal":t.startsWith("FLOAT(")&&(a="System.Data.SqlDbType.Float"),a??"System.Data.SqlDbType.UNDETERMINED"},u=()=>{if(!n){D("");return}const t=n.trim(),a=f(t);let S=t.split(a).map(s=>{s=s.trim(),s.startsWith(",")&&(s=s.substring(1));const r=s.split(" "),d=r[0],b=T(r[1]);let o=null;r[1].includes("(")&&r[1].includes(")")&&(o=r[1].substring(r[1].indexOf("(")+1,r[1].indexOf(")")));const q=r[2]==="OUTPUT"?"System.Data.ParameterDirection.Output":"System.Data.ParameterDirection.Input";let m="NULL";r[2]==="="&&(m=r[3]),m==="NULL"&&(m="DBNull.Value");const i=[];return i.push("new SqlParameter()"),i.push("{"),i.push(`ParameterName = "${d}",`),i.push(`SqlDbType = ${b},`),o&&i.push(`Size = ${o},`),i.push(`Direction = ${q},`),i.push(`Value = ${m}`),i.push("}"),i.join(a)});S=S.join(`,${a}`);const l=[];l.push("var dbParams = new SqlParameter[]"),l.push("{"),l.push(S),l.push("};"),D(l.join(a))};return c.useEffect(()=>{u()},[n]),e.jsxs("div",{className:"row animate__animated animate__fadeIn",id:"SqlColumnsToCSharpVariables",children:[e.jsx("div",{className:"col-md-12 mb-4",children:e.jsxs(h,{children:[e.jsx("p",{children:"It converts SQL Server Stored Procedure Parameters to C# SqlParameter"}),e.jsx("p",{children:"Below is the example conversion"}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-bordered",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SQL Server Params"}),e.jsx("th",{children:"C# Code"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("pre",{children:`@CleaningTypeID INT  OUTPUT  
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
,@ModifiedBy_Specified BIT = 0 `})}),e.jsx("td",{children:e.jsx("pre",{children:`var dbParams = new SqlParameter[]
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
};`})})]})})]})})]})}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{className:"text-center",children:"SQL Server Params"}),e.jsx("div",{className:"form-group",children:e.jsx("textarea",{rows:"20",className:"form-control",value:n,onChange:t=>y(t.target.value)})})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("h5",{className:"text-center",children:"C# Code"}),e.jsxs("div",{className:"form-group position-relative",children:[e.jsx("textarea",{rows:"20",className:"form-control",value:p,onChange:t=>D(t.target.value)}),e.jsx("div",{className:"input-copy-button",children:e.jsx(N,{label:"Copy",children:e.jsx("button",{className:"btn btn-secondary",onClick:()=>P(null,p),children:e.jsx("i",{className:"fa fa-clipboard"})})})})]})]})]})};export{j as default};
