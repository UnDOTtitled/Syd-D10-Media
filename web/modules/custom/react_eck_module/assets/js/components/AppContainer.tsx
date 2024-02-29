// @ts-nocheck

import React, { useContext, useRef, useEffect } from 'react'

// import AppParams from "./AppParams";
import {AppState} from "./utils/types";
import Accordion from "./eck/Accordion";

// import Listing from "./elements/Listing";
import Filters from "./elements/Filters";
import ActiveFilters from "./elements/ActiveFilters";
import DatePicker from "./elements/DatePicker";

type Props = {
    eckEntity: string
}

export default function AppContainer({
    submit, eckEntity
} : Props) {
      
    return (
        <>
            {
                {
                'accordion':  <Accordion eckEntity={eckEntity} />
                }[eckEntity]
            }
        </>
    )
}
