import { lazy, Suspense } from "react";
import HomePage from "./components/HomePage";
const ObjectToInterface = lazy(() =>
  import("./components/ObjectToInterface/ObjectToInterface")
);
const UrlParamGenerator = lazy(() =>
  import("./components/UrlParamGenerator/UrlParamGenerator")
);
const TableHeaderGenerator = lazy(() =>
  import("./components/TableHeaderGenerator/TableHeaderGenerator")
);
const SqlColumnsToCSharpVariables = lazy(() =>
  import("./components/SqlColumnsToCSharpVariables/SqlColumnsToCSharpVariables")
);
const CsvToHtmlTableComponent = lazy(() =>
  import("./components/CsvToHtmlTableComponent/CsvToHtmlTableComponent")
);
const SqlServerSpParamsToCSharpCodeComponent = lazy(() =>
  import("./components/SqlServerSpParamsToCSharpCodeComponent/SqlServerSpParamsToCSharpCodeComponent")
);

const Pages = [
  {
    path: "/sql-columns-to-csharp-variables",
    element: (
      <Suspense fallback="Loading...">
        <SqlColumnsToCSharpVariables />
      </Suspense>
    ),
    title: "SQL Columns to C# Variables",
  },
  {
    path: "/table-header-generator",
    element: (
      <Suspense fallback="Loading...">
        <TableHeaderGenerator />
      </Suspense>
    ),
    title: "Table Header Generator",
  },
  {
    path: "/url-params-generator",
    element: (
      <Suspense fallback="Loading...">
        <UrlParamGenerator />
      </Suspense>
    ),
    title: "URL Params Generator",
  },
  {
    path: "/object-to-interface",
    element: (
      <Suspense fallback="Loading...">
        <ObjectToInterface />
      </Suspense>
    ),
    title: "Object/Json To Interface",
  },
  {
    path: "/csv-to-html-table",
    element: (
      <Suspense fallback="Loading...">
        <CsvToHtmlTableComponent />
      </Suspense>
    ),
    title: "Csv To Html Table",
  },
  {
    path: "/sql-server-sp-params-to-csharp-code",
    element: (
      <Suspense fallback="Loading...">
        <SqlServerSpParamsToCSharpCodeComponent />
      </Suspense>
    ),
    title: "SQL Server SP Params To C# Code",
  },
  {
    path: "/",
    element: <HomePage />,
    title: "Home",
  },
];

export default Pages;
