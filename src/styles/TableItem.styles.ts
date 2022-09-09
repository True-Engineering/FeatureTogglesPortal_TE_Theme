import type { TableItemStyles } from '@true-engineering/feature-toggles-portal-ui';
import { rgba } from '@true-engineering/true-react-common-ui-kit';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const tableItemStyles: TableItemStyles = {
  rowWithAction: {
    '&:hover': {
      backgroundColor: rgba(colors.BLUE_50, 0.3),
    },
  },

  activeRow: {
    backgroundColor: rgba(colors.BLUE_50, 0.3),
  },

  expandedRowData: {
    backgroundColor: colors.NEUTRAL_20,
  },
};
