import type { FlagEnvironmentsStatesStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const flagEnvironmentsStatesStyles: FlagEnvironmentsStatesStyles = {
  dot: {
    backgroundColor: colors.NEUTRAL_80,
  },

  name: {
    color: colors.NEUTRAL_80,
  },

  dotEnabled: {
    backgroundColor: colors.GREEN_600,
  },

  nameEnabled: {
    color: colors.NEUTRAL_900,
  },
};
