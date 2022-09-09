import type { GroupRowStyles } from '@true-engineering/feature-toggles-portal-ui';
import { rgba } from '@true-engineering/true-react-common-ui-kit';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const groupRowStyles: GroupRowStyles = {
  groupRowHeader: {
    background: rgba(colors.BLUE_50, 0.3),
  },
};
