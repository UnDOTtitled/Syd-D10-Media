import React, { createContext, useEffect, useState } from 'react'
import { EckEntityContextT } from './utils/types'
import AppContainer from './AppContainer'
import ContentFetch from './data/ContentFetch'

export const eckEntityContext = createContext<Partial<EckEntityContextT>>(null)

/**
 * Get data, set state & prepare app
 */
type Props = {
    eckEntity: string,
}

export default function App({eckEntity} : Props) {
    const [loadedEckData, setLoadedEckData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await ContentFetch(eckEntity);
            setLoadedEckData(data);
        };

        fetchData();
    }, []);

    return (
        <eckEntityContext.Provider value={loadedEckData}>
            <AppContainer eckEntity={eckEntity} />
        </eckEntityContext.Provider>
    )
}
