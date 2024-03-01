import React, { useContext } from 'react'
import { Data, EckEntityContextT } from './utils/types'
import Accordion from "./eck/Accordion/Accordion";
import { eckEntityContext } from '../reactEckModule'

type Props = {
    loadedEckData: Data
}



export default function AppContainer({ loadedEckData } : Props) {
      
    const { eckEntity } = useContext(eckEntityContext)

    return (
        <>
            {loadedEckData ? {
                'accordion':  <Accordion loadedEckData={loadedEckData} />
                }[eckEntity || ''] : ''
            }
        </>
    )
}
