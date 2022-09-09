import type { SyncPortalsFormStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const syncPortalsFormStyles: SyncPortalsFormStyles = {
  subtitle: {
    color: colors.NEUTRAL_80,
  },

  count: {
    color: colors.NEUTRAL_500,
  },

  header: {
    borderBottom: [1, 'solid', colors.NEUTRAL_50],
  },

  footer: {
    borderTop: [1, 'solid', colors.NEUTRAL_50],
  },

  flagRow: {
    '&:not(:last-child)': {
      borderBottom: [1, 'solid', colors.NEUTRAL_50],
    },
  },

  deleteConfirmWarning: {
    backgroundColor: colors.ORANGE_50,
  },

  deleteConfirmInfo: {
    backgroundColor: colors.NEUTRAL_20,
  },

  deleteConfirmWarningCircleIcon: {
    backgroundColor: colors.ORANGE_600,
  },

  noChanges: {
    color: colors.NEUTRAL_80,
  },
};
