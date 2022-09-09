import type { FormStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors, dimensions } = trueEngineeringTheme;

export const formStyles: FormStyles = {
  root: {
    backgroundColor: colors.CLASSIC_WHITE,
    borderRadius: dimensions.BORDER_RADIUS_LARGE,
    color: colors.NEUTRAL_900,
  },

  title: {
    color: colors.NEUTRAL_900,
  },
};
