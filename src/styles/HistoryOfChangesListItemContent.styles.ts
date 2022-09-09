import type { HistoryOfChangesListItemContentStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const historyOfChangesListItemContentStyles: HistoryOfChangesListItemContentStyles = {
  head: {
    color: colors.NEUTRAL_900,
  },

  body: {
    color: colors.NEUTRAL_900,
  },

  environmentChanges: {
    backgroundColor: colors.NEUTRAL_20,
  },

  environmentOldValue: {
    color: colors.NEUTRAL_60,
  },

  // Icons styles

  arrowIcon: {
    color: colors.NEUTRAL_100,
  },

  disableNewIcon: {
    color: colors.NEUTRAL_100,
  },

  enableNewIcon: {
    color: colors.GREEN_800,
  },

  // text

  lightGreyText: {
    color: colors.NEUTRAL_100,
  },

  greyBoldText: {
    color: colors.NEUTRAL_300,
  },
};
