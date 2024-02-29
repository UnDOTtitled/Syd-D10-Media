import React, { useContext } from 'react';
import { eckEntityContext } from '../AppInit';

type Props = {
    classes: string
    ref: HTMLDivElement
    loadedEckData: Array<{
        name: string,
        location: string,
        role: string,
        branches: Array<{
            name: string,
            location: string,
            role: string,
            id: string
        }>
    }>,
    eckEntity: string
};

export default function Accordion({ classes }: Props) {
    const loadedEckData = useContext(eckEntityContext);

    return (
        <div className={classes} role="tablist" aria-multiselectable="true">
            {loadedEckData.map((row, i) => (
                <React.Fragment key={i}>
                    <p className="accordion__title">
                        <button
                            className="js-accordion__header accordion__header"
                            role="tab"
                            id={`accordion-${i}`}
                            aria-controls={`panel-${i}`}
                            aria-selected="false"
                            type="button"
                            data-hashaccordion-id="f8mpir1ij4"
                            aria-expanded="false"
                        >
                            {row.name}
                        </button>
                    </p>
                    <div
                        className="js-accordion__panel accordion__panel"
                        role="tabpanel"
                        aria-labelledby={`accordion-${i}`}
                        id={`panel-${i}`}
                        data-hashaccordion-id="f8mpir1ij4"
                        aria-hidden="true"
                    >
                        {row.branches?.map((branch, j) => (
                            <div key={j}>
                                <p>Name: {branch.name}</p>
                                <p>Location: {branch.location}</p>
                                <p>Role: {branch.role}</p>
                                <p>ID: {branch.id}</p>
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}
