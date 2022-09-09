import type { PageFooterStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const pageFooterStyles: PageFooterStyles = {
  footerContent: {
    borderTop: [1, 'solid', colors.NEUTRAL_50],
    color: colors.NEUTRAL_80,
  },
};
