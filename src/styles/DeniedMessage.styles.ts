import type { DeniedMessageStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const deniedMessageStyles: DeniedMessageStyles = {
  text: {
    color: colors.NEUTRAL_900,
  },
};
