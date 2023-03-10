import { lazy, Suspense } from "react";
import HomePage from "./components/HomePage";
const UrlParamGenerator = lazy(() => import("./components/UrlParamGenerator/UrlParamGenerator"));
const TableHeaderGenerator = lazy(() => import("./components/TableHeaderGenerator/TableHeaderGenerator"));
const SqlColumnsToCSharpVariables = lazy(() => import('./components/SqlColumnsToCSharpVariables/SqlColumnsToCSharpVariables'));

const Pages = [
  {
    path: '/sql-columns-to-csharp-variables',
    element: <Suspense fallback="Loading..."><SqlColumnsToCSharpVariables /></Suspense>,
    title: 'SQL Columns to C# Variables'
  },
  {
    path: '/table-header-generator',
    element: <Suspense fallback="Loading..."><TableHeaderGenerator /></Suspense>,
    title: 'Table Header Generator'
  },
  {
    path: '/url-params-generator',
    element: <Suspense fallback="Loading..."><UrlParamGenerator /></Suspense>,
    title: 'URL Params Generator'
  },
  {
    path: '/',
    element: <HomePage />,
    title: 'Home'
  }
]

export default Pages;