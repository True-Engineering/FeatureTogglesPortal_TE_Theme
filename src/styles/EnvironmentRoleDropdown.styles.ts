import type { EnvironmentRoleDropdownStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const environmentRoleDropdownStyles: EnvironmentRoleDropdownStyles = {
  mainIcon: {
    color: colors.BLUE_600,
  },

  secondIcon: {
    color: colors.PLUM_600,
  },

  cancelIcon: {
    color: colors.NEUTRAL_80,
  },
};

export const secondIconButtonTweakStyles = {
  main: {
    color: colors.PLUM_600,
    backgroundColor: colors.PLUM_50,

    '&:hover': {
      backgroundColor: colors.PLUM_600,
      color: colors.CLASSIC_WHITE,
    },
    '&$active, &:active, &$active:hover, &:active:hover': {
      backgroundColor: colors.PLUM_800,
      color: colors.CLASSIC_WHITE,
    },
    '&:disabled, &$disabled': {
      backgroundColor: colors.PLUM_50,
      color: colors.PLUM_200,
    },
  },
};
