import React, { useEffect, useState } from 'react'
import { Data } from './utils/types'
import AppContainer from './AppContainer'
import DataFetch from './data/DataFetch'

/**
 * Get data, set state & prepare app
 */

export default function App() {
    const [loadedEckData, setLoadedEckData] = useState<Data>(null);

    useEffect(() => {
        const fetchData = () => {
            const data = DataFetch() as Data
            setLoadedEckData(data);
        };

        fetchData();
    }, []);

    return (
        <AppContainer loadedEckData={loadedEckData} />
    )
}
