// @ts-nocheck

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/AppInit'

const root = document.getElementById('root')

if (root) {
    const eckEntity = root.dataset.eck

    ReactDOM.render(
        <React.StrictMode>
            <App eckEntity={eckEntity}/>
        </React.StrictMode>,
        root
    )
}