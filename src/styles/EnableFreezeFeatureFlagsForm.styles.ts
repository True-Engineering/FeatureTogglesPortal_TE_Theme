import type { EnableFreezeFeatureFlagsFormStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const enableFreezeFeatureFlagsFormStyles: EnableFreezeFeatureFlagsFormStyles = {
  message: {
    color: colors.NEUTRAL_100,
  },

  time: {
    color: colors.NEUTRAL_900,
  },
};
