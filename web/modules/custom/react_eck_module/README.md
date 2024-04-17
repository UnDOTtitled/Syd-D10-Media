## INTRODUCTION

React Drupal Module for Accessible Accordion Integration
This module integrates a React component for an accessible accordion functionality into Drupal. It leverages data provided by the JSON API module and the "Accordion" Eck Entity Construction Kit: https://www.drupal.org/project/eck type.

Functionality:

Fetches JSON data representing accordion content (title & copy) from a JSON API endpoint.
Renders an accessible accordion component using React.
Implements logic for opening and closing accordion sections.
Achieves 100% accessibility compliance.
Data Structure:

The expected JSON data structure is an array of objects, where each object represents an accordion section:

JSON
[
  {
    "title": "Accordion 1",
    "copy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
  },
  {
    "title": "Accordion 2",
    "copy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
  },
  // ... more sections
]
Use code with caution.
Theming:

Styling for the accordion can be customized within the following SASS file:
web/themes/pippip/assets/sass/molecules/entities/_accordion.scss
Development:

Modifications to the React component logic can be made in the following TypeScript file:
web/modules/custom/react_eck_module/assets/js/components/eck/Accordion/Accordion.tsx
Legacy Twig Template:

The previous Twig-based accordion implementation is still available at:
web/themes/pippip/templates/entities/eck-entity--extra-content--accordion.html.twig
This legacy template can be re-enabled if necessary. However, the current implementation leverages a React component with a react ID tag for improved maintainability and accessibility.

## REQUIREMENTS

- JSON API MODULE

## INSTALLATION

- this module is a default part of the pippip base build

## CONFIGURATION
- Should work out the box - consult Angelou if there is an issue with the default functionality

## MAINTAINERS

Current maintainers for Drupal 10:

- Angelou - angelou.jeffers@un.titled.co.uk

