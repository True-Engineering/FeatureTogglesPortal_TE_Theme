import type { ListStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors, dimensions, boxShadows } = trueEngineeringTheme;

export const listStyles: ListStyles = {
  root: {
    borderRadius: dimensions.BORDER_RADIUS_SMALL,
    backgroundColor: colors.CLASSIC_WHITE,
    color: colors.NEUTRAL_500,
    boxShadow: boxShadows.dropdownShadow,
  },

  cell: {
    '&:hover': {
      backgroundColor: colors.NEUTRAL_20,

      '&$focused, &$active': {
        backgroundColor: colors.NEUTRAL_20,
      },
    },
  },

  focused: {
    backgroundColor: colors.NEUTRAL_20,
  },

  active: {
    backgroundColor: colors.NEUTRAL_20,
  },
};
