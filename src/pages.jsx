import { lazy, Suspense } from "react";
import HomePage from "./components/HomePage";
const SqlColumnsToCSharpVariables = lazy(() => import('./components/SqlColumnsToCSharpVariables/SqlColumnsToCSharpVariables'));

const Pages = [
  {
    path: '/sql-columns-to-csharp-variables',
    element: <Suspense fallback="Loading..."><SqlColumnsToCSharpVariables /></Suspense>,
    title: 'SQL Columns to C# Variables'
  },
  {
    path: '/',
    element: <HomePage />,
    title: 'Home'
  }
]

export default Pages;