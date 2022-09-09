import type { NotFoundMessageStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const notFoundMessageStyles: NotFoundMessageStyles = {
  number: {
    color: colors.BLUE_200,
    borderColor: colors.BLUE_200,
  },

  content: {
    color: colors.NEUTRAL_900,
  },
};
