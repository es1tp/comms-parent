
import React from 'react'
import ReactDOM from 'react-dom/client';
import { App } from '@/app';
import { datasource } from './api-db';

//@ts-ignore backdoor for console
window.__datasource = datasource;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<React.StrictMode><App /></React.StrictMode>);