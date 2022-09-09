import type { FreezeNotificationStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const freezeNotificationStyles: FreezeNotificationStyles = {
  root: {
    color: colors.NEUTRAL_900,
    backgroundColor: colors.BLUE_50,
  },

  circle: {
    backgroundColor: colors.BLUE_600,
  },
};
