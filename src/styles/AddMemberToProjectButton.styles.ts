import type { AddMemberToProjectButtonStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors, dimensions } = trueEngineeringTheme;

export const addMemberToProjectButtonStyles: AddMemberToProjectButtonStyles = {
  popup: {
    borderRadius: dimensions.BORDER_RADIUS_STD,
    backgroundColor: colors.CLASSIC_WHITE,
    color: colors.NEUTRAL_500,
    boxShadow:
      '0 8px 32px -8px rgb(34 42 55 / 30%), 0 -2px 6px 0 rgb(34 42 55 / 6%), 0 0 1px 0 rgb(34 42 55 / 40%)',
  },
};
