import type { ProjectEnvironmentsListStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const projectEnvironmentsListStyles: ProjectEnvironmentsListStyles = {
  checkIcon: {
    color: colors.GREEN_600,
  },

  minusIcon: {
    color: colors.NEUTRAL_80,
  },

  empty: {
    color: colors.NEUTRAL_80,
  },
};
