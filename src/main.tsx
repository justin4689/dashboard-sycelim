import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import FormElements from './pages/form-elements.tsx'
import DashboardLayout from './layouts/DashboardLayout.tsx'
import DataTablePage from './pages/data-table-page.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/form-elements" element={<FormElements />} />
          <Route path="/data-table" element={<DataTablePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
