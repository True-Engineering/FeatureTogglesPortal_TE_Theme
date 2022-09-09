import type { TextWithStatusStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const textWithStatusStyles: TextWithStatusStyles = {
  green: {
    backgroundColor: colors.GREEN_50,
    color: colors.GREEN_800,
  },

  blue: {
    backgroundColor: colors.BLUE_50,
    color: colors.BLUE_600,
  },

  red: {
    backgroundColor: colors.RED_50,
    color: colors.RED_600,
  },
};
