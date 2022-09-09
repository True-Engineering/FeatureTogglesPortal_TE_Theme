import type { TableStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const tableStyles: TableStyles = {
  shadow: {
    boxShadow: `0px 8px 32px -8px rgba(34, 42, 55, 0.13)`,
  },

  headRow: {
    borderBottom: [1, 'solid', colors.NEUTRAL_50],
  },

  row: {
    borderBottom: [1, 'solid', colors.NEUTRAL_50],

    '&:last-child': {
      borderBottom: 0,
    },
  },

  headCell: {
    color: colors.NEUTRAL_80,
  },

  cell: {
    color: colors.NEUTRAL_900,
  },
};
