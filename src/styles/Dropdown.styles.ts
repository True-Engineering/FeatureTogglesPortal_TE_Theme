import type { DropdownStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const dropdownStyles: DropdownStyles = {
  trigger: {
    color: colors.NEUTRAL_500,
  },

  activeTrigger: {
    color: colors.NEUTRAL_900,
  },

  disabled: {
    color: colors.NEUTRAL_80,
  },

  arrow: {
    color: colors.NEUTRAL_80,
  },
};
