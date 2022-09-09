import type { FlagsTableStyles } from '@true-engineering/feature-toggles-portal-ui';
import { rgba } from '@true-engineering/true-react-common-ui-kit';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const flagsTableStyles: FlagsTableStyles = {
  root: {
    color: colors.NEUTRAL_900,
  },

  filterContainer: {
    backgroundColor: rgba(colors.BLUE_50, 0.3),
  },

  table: {
    '& tr': {
      borderBottom: [1, 'solid', colors.NEUTRAL_50],
    },

    '& th': {
      color: colors.NEUTRAL_100,
    },
  },
};
