import type { LinkButtonStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const linkButtonStyles: LinkButtonStyles = {
  main: {
    color: colors.BLUE_600,

    '& $circle': {
      backgroundColor: colors.BLUE_50,
    },

    '&:hover': {
      color: colors.BLUE_800,

      '& $circle': {
        color: colors.CLASSIC_WHITE,
        backgroundColor: colors.BLUE_600,
      },
    },

    '&$active, &:active, &$active:hover, &:active:hover': {
      color: colors.BLUE_900,

      '& $circle': {
        color: colors.CLASSIC_WHITE,
        backgroundColor: colors.BLUE_800,
      },
    },
  },

  cancel: {
    color: colors.NEUTRAL_300,

    '& $circle': {
      color: colors.NEUTRAL_300,
      backgroundColor: colors.NEUTRAL_40,
    },

    '&:hover': {
      color: colors.NEUTRAL_500,

      '& $circle': {
        color: colors.CLASSIC_WHITE,
        backgroundColor: colors.NEUTRAL_300,
      },
    },

    '&$active, &:active, &$active:hover, &:active:hover': {
      color: colors.NEUTRAL_900,

      '& $circle': {
        color: colors.CLASSIC_WHITE,
        backgroundColor: colors.NEUTRAL_500,
      },
    },
  },
};
