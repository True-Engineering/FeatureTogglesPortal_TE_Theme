import type { CssBaselineStyles } from '@true-engineering/feature-toggles-portal-ui';

export const cssBaselineStyles: CssBaselineStyles = {
  '@font-face': [
    {
      fontFamily: 'Raleway',
      src: `url("/fonts/Raleway-Regular.ttf") format("truetype")`,
    },
    {
      fontFamily: 'Raleway',
      src: `url("/fonts/Raleway-ExtraBold.ttf") format("truetype")`,
      fontWeight: 800,
    },
  ],
};
