import React, { useEffect } from 'react';
import { Data } from '../../utils/types';
import AccordionFunctionality from './AccordionFunctionality';

type Props = {
  loadedEckData: Data
};

export default function Accordion({ loadedEckData }: Props) {

  useEffect(() => {
    const accordions = document.querySelectorAll('.js-accordion h2');

    accordions.forEach((accordionEl) => {
      new AccordionFunctionality(accordionEl as HTMLElement);
    });
  }, []);

  return (
    <div className="js-accordion" role="tablist" aria-multiselectable="true" id="accordionGroup">
    {loadedEckData ? loadedEckData.map((row: { title: string; copy: string; }, i: number) => (
        <React.Fragment key={i}>
          <h2 className="accordion__title">
            <button
              type="button"
              aria-expanded="false"
              className="js-accordion-trigger accordion__header"
              aria-controls={`sect${i}`}
              id={`accordion${i}id`}
              role="tab"
              aria-selected="false"
              >
              <span>
                {row.title}
              </span>
            </button>
          </h2>
          <div
            id={`sect${i}`}
            role="region"
            aria-labelledby={`accordion${i}id`}
            className="js-accordion-panel accordion__panel"
            aria-hidden="true"
          >
            <p>{row.copy}</p>
          </div>
        </React.Fragment>
      )) : ''}
    </div>
  );
}
