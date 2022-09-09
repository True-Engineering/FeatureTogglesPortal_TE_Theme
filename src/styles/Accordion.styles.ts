import type { AccordionStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const accordionStyles: AccordionStyles = {
  header: {
    borderBottom: ['solid', 1, colors.NEUTRAL_50],
    '$item:first-child &': {
      borderTop: ['solid', 1, colors.NEUTRAL_50],
    },
  },

  title: {
    color: colors.NEUTRAL_900,
  },

  arrow: {
    color: colors.NEUTRAL_500,
  },

  content: {
    backgroundColor: colors.NEUTRAL_20,
  },
};
