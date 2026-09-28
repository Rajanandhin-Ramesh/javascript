import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import BuildSummary from './BuildSummary.tsx'
import ConvertTSX from './ConvertTSX.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <App />
  </StrictMode>,
)
