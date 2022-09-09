import type { HeaderIconWithDropdownStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors, dimensions, boxShadows } = trueEngineeringTheme;

export const headerIconWithDropdownStyles: HeaderIconWithDropdownStyles = {
  title: {
    paddingLeft: 10,
    color: colors.NEUTRAL_900,
    fontFamily: 'Raleway',
    fontWeight: 800,
    fontSize: 26,
    letterSpacing: '-0.5px',
    lineHeight: '31px',
  },

  icon: {
    color: colors.NEUTRAL_60,
  },

  activeIcon: {
    color: colors.NEUTRAL_80,
  },

  dropdown: {
    background: colors.CLASSIC_WHITE,
    borderRadius: dimensions.BORDER_RADIUS_EXTRA_LARGE,
    boxShadow: boxShadows.dropdownShadow,
  },

  item: {
    color: colors.NEUTRAL_900,
    '&:hover': {
      backgroundColor: colors.NEUTRAL_20,
    },
  },
};
