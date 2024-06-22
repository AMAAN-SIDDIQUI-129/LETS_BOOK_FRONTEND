import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from './context/appC.tsx';
import { Toaster } from 'sonner';
import { SearchContextProvider } from './context/SearchContext.tsx';
const queryclient=new QueryClient({
    defaultOptions:{
        queries:{
            retry:0,

            },
        },
    });
ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>

    <QueryClientProvider client={queryclient}>
        <AppContextProvider>
            <SearchContextProvider>
                <App/>
                
            </SearchContextProvider>

            <Toaster visibleToasts={1} position="top-right" richColors/>
        </AppContextProvider>
    
        
    
    
    </QueryClientProvider>
    
 </React.StrictMode>
   
  

    
)
