import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './components/AppInit'
import { EckEntityContextT } from './components/utils/types'

export const eckEntityContext = createContext<Partial<EckEntityContextT>>(null);

const root = document.getElementById('root')

if (root) {
    const eckEntity = root.dataset.eck || '';

    ReactDOM.render(
        <React.StrictMode>
            <eckEntityContext.Provider value={{ eckEntity }}>
                <App />
            </eckEntityContext.Provider>
        </React.StrictMode>,
        root
    )
}