const DataMapping = [
  {
    sqlServer: "varbinary",
    clrSqlServer: "SqlBytes, SqlBinary",
    cSharp: "Byte[]",
  },
  {
    sqlServer: "binary",
    clrSqlServer: "SqlBytes, SqlBinary",
    cSharp: "Byte[]",
  },
  {
    sqlServer: "image",
    clrSqlServer: "None",
    cSharp: "None",
  },
  {
    sqlServer: "varchar",
    clrSqlServer: "None",
    cSharp: "None",
  },
  {
    sqlServer: "char",
    clrSqlServer: "None",
    cSharp: "None",
  },
  {
    sqlServer: "nvarchar",
    clrSqlServer: "SqlChars, SqlString",
    cSharp: "String",
  },
  {
    sqlServer: "nchar",
    clrSqlServer: "SqlChars, SqlString",
    cSharp: "String",
  },
  {
    sqlServer: "text",
    clrSqlServer: "None",
    cSharp: "None",
  },
  {
    sqlServer: "ntext",
    clrSqlServer: "None",
    cSharp: "None",
  },
  {
    sqlServer: "uniqueidentifier",
    clrSqlServer: "SqlGuid",
    cSharp: "Guid",
  },
  {
    sqlServer: "rowversion",
    clrSqlServer: "None",
    cSharp: "Byte[]",
  },
  {
    sqlServer: "bit",
    clrSqlServer: "SqlBoolean",
    cSharp: "Boolean",
  },
  {
    sqlServer: "tinyint",
    clrSqlServer: "SqlByte",
    cSharp: "Byte",
  },
  {
    sqlServer: "smallint",
    clrSqlServer: "SqlInt16",
    cSharp: "Int16",
  },
  {
    sqlServer: "int",
    clrSqlServer: "SqlInt32",
    cSharp: "int",
  },
  {
    sqlServer: "bigint",
    clrSqlServer: "SqlInt64",
    cSharp: "Int64",
  },
  {
    sqlServer: "smallmoney",
    clrSqlServer: "SqlMoney",
    cSharp: "Decimal",
  },
  {
    sqlServer: "money",
    clrSqlServer: "SqlMoney",
    cSharp: "Decimal",
  },
  {
    sqlServer: "numeric",
    clrSqlServer: "SqlDecimal",
    cSharp: "Decimal",
  },
  {
    sqlServer: "decimal",
    clrSqlServer: "SqlDecimal",
    cSharp: "Decimal",
  },
  {
    sqlServer: "real",
    clrSqlServer: "SqlSingle",
    cSharp: "Single",
  },
  {
    sqlServer: "float",
    clrSqlServer: "SqlDouble",
    cSharp: "Double",
  },
  {
    sqlServer: "smalldatetime",
    clrSqlServer: "SqlDateTime",
    cSharp: "DateTime",
  },
  {
    sqlServer: "datetimeoffset",
    clrSqlServer: "SqlDateTimeOffset",
    cSharp: "DateTimeOffset",
  },
  {
    sqlServer: "datetime",
    clrSqlServer: "SqlDateTime",
    cSharp: "DateTime",
  },
  {
    sqlServer: "sql_variant",
    clrSqlServer: "None",
    cSharp: "Object",
  },
  {
    sqlServer: "User-defined type(UDT)",
    clrSqlServer: "None",
    cSharp: "user-defined type",
  },
  {
    sqlServer: "table",
    clrSqlServer: "None",
    cSharp: "None",
  },
  {
    sqlServer: "cursor",
    clrSqlServer: "None",
    cSharp: "None",
  },
  {
    sqlServer: "timestamp",
    clrSqlServer: "None",
    cSharp: "None",
  },
  {
    sqlServer: "xml",
    clrSqlServer: "SqlXml",
    cSharp: "None",
  },
];

export default DataMapping;