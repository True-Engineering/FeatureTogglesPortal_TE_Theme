import type { ProjectMembersListStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const boldDropdownTweakStyles = {
  value: {
    fontWeight: 'bold',
    color: colors.NEUTRAL_900,
  },

  arrow: {
    color: colors.NEUTRAL_300,
  },
};
