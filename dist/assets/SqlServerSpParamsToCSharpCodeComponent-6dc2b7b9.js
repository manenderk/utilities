import{r as p,j as l,a}from"./index-d6bd4c7e.js";import{H as N,T as P,C as f}from"./HelpTextComponent-28d71122.js";import{G as I}from"./GetEOL-e3e2825b.js";const v=()=>{const[m,T]=p.useState(""),[y,S]=p.useState(""),u=t=>{let e=null;switch(t){case"INT":e="System.Data.SqlDbType.Int";break;case"VARCHAR":e="System.Data.SqlDbType.VarChar";break;case"NVARCHAR":e="System.Data.SqlDbType.NVarChar";break;case"BIT":e="System.Data.SqlDbType.Bit";break;case"SMALLINT":e="System.Data.SqlDbType.SmallInt";break;case"DATETIME":e="System.Data.SqlDbType.DateTime";break;case"DATE":e="System.Data.SqlDbType.Date";break;case"TIME":e="System.Data.SqlDbType.Time";break;case"DATETIME2":e="System.Data.SqlDbType.DateTime2";break;case"DATETIMEOFFSET":e="System.Data.SqlDbType.DateTimeOffset";break;case"DECIMAL":e="System.Data.SqlDbType.Decimal";break;case"FLOAT":e="System.Data.SqlDbType.Float";break}return t.startsWith("VARCHAR(")?e="System.Data.SqlDbType.VarChar":t.startsWith("NVARCHAR(")?e="System.Data.SqlDbType.NVarChar":t.startsWith("DECIMAL(")?e="System.Data.SqlDbType.Decimal":t.startsWith("FLOAT(")&&(e="System.Data.SqlDbType.Float"),e??"System.Data.SqlDbType.UNDETERMINED"},d=()=>{if(!m){S("");return}const t=m.trim(),e=I(t);let o=t.split(e).map(s=>{s=s.trim(),s.startsWith(",")&&(s=s.substring(1));const r=s.split(" "),b=r[0],q=u(r[1]);let c=null;r[1].includes("(")&&r[1].includes(")")&&(c=r[1].substring(r[1].indexOf("(")+1,r[1].indexOf(")")));const h=r[2]==="OUTPUT"?"System.Data.ParameterDirection.Output":"System.Data.ParameterDirection.Input";let D="NULL";r[2]==="="&&(D=r[3]),D==="NULL"&&(D="DBNull.Value");const i=[];return i.push("new SqlParameter()"),i.push("{"),i.push(`ParameterName = "${b}",`),i.push(`SqlDbType = ${q},`),c&&i.push(`Size = ${c},`),i.push(`Direction = ${h},`),i.push(`Value = ${D}`),i.push("}"),i.join(e)});o=o.join(`,${e}`);const n=[];n.push("var dbParams = new SqlParameter[]"),n.push("{"),n.push(o),n.push("};"),S(n.join(e))};return p.useEffect(()=>{d()},[m]),l("div",{className:"row animate__animated animate__fadeIn",id:"SqlColumnsToCSharpVariables",children:[a("div",{className:"col-md-12 mb-4",children:l(N,{children:[a("p",{children:"It converts SQL Server Stored Procedure Parameters to C# SqlParameter"}),a("p",{children:"Below is the example conversion"}),a("div",{className:"table-responsive",children:l("table",{className:"table table-bordered",children:[a("thead",{children:l("tr",{children:[a("th",{children:"SQL Server Params"}),a("th",{children:"C# Code"})]})}),a("tbody",{children:l("tr",{children:[a("td",{children:a("pre",{children:`@CleaningTypeID INT  OUTPUT  
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
,@ModifiedBy_Specified BIT = 0 `})}),a("td",{children:a("pre",{children:`var dbParams = new SqlParameter[]
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
};`})})]})})]})})]})}),l("div",{className:"col-md-6",children:[a("h5",{className:"text-center",children:"SQL Server Params"}),a("div",{className:"form-group",children:a("textarea",{rows:"20",className:"form-control",value:m,onChange:t=>T(t.target.value)})})]}),l("div",{className:"col-md-6",children:[a("h5",{className:"text-center",children:"C# Code"}),l("div",{className:"form-group position-relative",children:[a("textarea",{rows:"20",className:"form-control",value:y,onChange:t=>S(t.target.value)}),a("div",{className:"input-copy-button",children:a(P,{label:"Copy",children:a("button",{className:"btn btn-secondary",onClick:()=>f(null,y),children:a("i",{className:"fa fa-clipboard"})})})})]})]})]})};export{v as default};
