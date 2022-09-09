import type { TitleStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const titleStyles: TitleStyles = {
  root: {
    color: colors.NEUTRAL_900,
  },

  title: {
    fontFamily: 'Raleway',
    fontWeight: 700,
    lineHeight: '40px',
    letterSpacing: '-0.15px',
  },

  subTitle: {
    color: colors.NEUTRAL_60,
  },
};
