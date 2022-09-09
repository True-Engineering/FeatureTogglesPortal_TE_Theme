import type { IconButtonStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const iconButtonStyles: IconButtonStyles = {
  'cancel-light': {
    color: colors.NEUTRAL_300,

    '&:hover': {
      color: colors.NEUTRAL_500,
      backgroundColor: colors.NEUTRAL_60,
    },

    '&$active, &:active, &$active:hover, &:active:hover': {
      color: colors.NEUTRAL_500,
      backgroundColor: colors.NEUTRAL_80,
    },

    '&:disabled, &$disabled': {
      color: colors.NEUTRAL_60,
    },
  },

  cancel: {
    color: colors.NEUTRAL_300,
    backgroundColor: colors.NEUTRAL_50,

    '&:hover': {
      color: colors.NEUTRAL_500,
      backgroundColor: colors.NEUTRAL_60,
    },

    '&$active, &:active, &$active:hover, &:active:hover': {
      color: colors.NEUTRAL_500,
      backgroundColor: colors.NEUTRAL_80,
    },

    '&:disabled, &$disabled': {
      color: colors.NEUTRAL_60,
      backgroundColor: colors.NEUTRAL_40,
    },
  },

  main: {
    color: colors.BLUE_600,
    backgroundColor: colors.BLUE_50,

    '&:hover': {
      color: colors.CLASSIC_WHITE,
      backgroundColor: colors.BLUE_600,
    },

    '&$active, &:active, &$active:hover, &:active:hover': {
      color: colors.CLASSIC_WHITE,
      backgroundColor: colors.BLUE_800,
    },

    '&:disabled, &$disabled': {
      color: colors.BLUE_200,
    },
  },
};
