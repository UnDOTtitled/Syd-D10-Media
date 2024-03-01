/*
 *
 *  I converted this to TypeScript from the W3C example at: https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html
 * 
 *  AJ - 2024-03-01
 */

class AccordionFunctionality {
  private rootEl: HTMLElement;
  private buttonEl: HTMLButtonElement;
  private contentEl: HTMLElement;
  private open: boolean;

  constructor(domNode: HTMLElement) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector('button[aria-expanded]') as HTMLButtonElement;

    const controlsId = this.buttonEl.getAttribute('aria-controls');
    this.contentEl = document.getElementById(controlsId!)!;

    this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';

    // add event listeners
    this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
  }

  private onButtonClick() {
    this.toggle(!this.open);
  }

  private toggle(open: boolean) {
    // don't do anything if the open state doesn't change
    if (open === this.open) {
      return;
    }

    // update the internal state
    this.open = open;

    // handle DOM updates
    this.buttonEl.setAttribute('aria-expanded', `${open}`);
    if (open) {
      this.contentEl.setAttribute('aria-hidden', 'false');
    } else {
      this.contentEl.setAttribute('aria-hidden', 'true');
    }
  }

  // Add public open and close methods for convenience
  public openAccordion() {
    this.toggle(true);
  }

  public closeAccordion() {
    this.toggle(false);
  }
}

export default AccordionFunctionality;