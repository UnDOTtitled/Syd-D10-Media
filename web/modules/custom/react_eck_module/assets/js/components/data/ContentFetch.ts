// @ts-nocheck

import axios from 'axios'
import { formatDateUrl } from '../utils/helpers'
import { AppData, DataAction, StateAction, AppState } from '../utils/types'
import { siteUrl } from '../utils/helpers'

/**
 * Axios POST request for nid's from api
 */
export default async function ContentFetch(
  eckEntity,
) {

    const eckData = [
        {
            "name": "Jenkins",
            "location": "Pune",
            "role": "Testing",
            "branches": [
                {
                    "name": "Jenkins_pune1",
                    "location": "Pune_Hin",
                    "role": "Testing_Automation",
                    "id": "PUN_HINJE_T122"
                },
                {
                    "name": "Jenkins_pune2",
                    "location": "Pune_DC",
                    "role": "Testing_UI",
                    "id": "PUN_DC_TDC121"
                },
                {
                    "name": "Jenkins_pune3",
                    "location": "Pune_SEZ",
                    "role": "Testing_Black",
                    "id": "PUN_DC_TDC121"
                }
            ]
        },
        {
            "name": "UI/UX",
            "location": "Delhi",
            "role": "UI_Dev",
            "branches": [
                {
                    "name": "UIUX_Del1",
                    "location": "Del_Sec1",
                    "role": "UI",
                    "id": "Del_Sec1_T122"
                },
                {
                    "name": "UIUX_Del2",
                    "location": "Del_Sec3",
                    "role": "Testing_UI",
                    "id": "Del_Sec3_TDC121"
                }
            ]
        },
        {
            "name": "Back-End",
            "location": "Mumbai",
            "role": "Dev",
            "branches": [
                {
                    "name": "Dev_Mum1",
                    "location": "Mum_Sec1",
                    "role": "Dev",
                    "id": "Mum_Sec1_Dv122"
                },
                {
                    "name": "Dev_Mum2",
                    "location": "Mum_Sec3",
                    "role": "Dev",
                    "id": "Mum_Sec3_Dev21"
                }
            ]
        }
    ];
    return eckData;

}
