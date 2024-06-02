import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import Auth0ProviderWithNavigate from './Auth/Auth0ProviderWithNavigate.tsx';
import { AppContextProvider } from './context/appC.tsx';
import { Toaster } from 'sonner';
const queryclient=new QueryClient({
    defaultOptions:{
        queries:{
            retry:0,

            },
        },
    });
ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>

    <Auth0ProviderWithNavigate>
    <QueryClientProvider client={queryclient}>
        <AppContextProvider>
            <App/>
            <Toaster visibleToasts={1} position="top-right" richColors/>
        </AppContextProvider>
    
        
    
    
    </QueryClientProvider>
    </Auth0ProviderWithNavigate>
    
 </React.StrictMode>
   
  

    
)
