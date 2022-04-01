import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp';

import './index.css';

const contenedor =  document.getElementById('root');

const root = ReactDOMClient.createRoot(contenedor);


root.render(<GifExpertApp/>);
