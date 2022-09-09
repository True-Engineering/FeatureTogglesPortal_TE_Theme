import type { SortHeadStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const sortHeadStyles: SortHeadStyles = {
  root: {
    color: colors.NEUTRAL_100,

    '&:hover': {
      '& $icon': {
        color: colors.BLUE_600,
      },
    },
  },

  activeText: {
    color: colors.NEUTRAL_100,
  },

  activeIcon: {
    color: colors.BLUE_600,
  },
};
