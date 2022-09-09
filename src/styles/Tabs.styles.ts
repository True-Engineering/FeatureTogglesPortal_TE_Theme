import type { TabsStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors } = trueEngineeringTheme;

export const tabsStyles: TabsStyles = {
  tab: {
    color: colors.NEUTRAL_900,

    '& > $count': {
      color: colors.NEUTRAL_900,
      border: ['solid', 1, colors.NEUTRAL_60],
    },
  },

  activeTab: {
    backgroundColor: colors.YELLOW_600,
    color: colors.NEUTRAL_900,

    '& > $count': {
      backgroundColor: colors.CLASSIC_WHITE,
      border: ['solid', 1, colors.CLASSIC_WHITE],
      color: colors.NEUTRAL_900,
    },
  },

  horizontal: {
    '& $segments': {
      backgroundColor: colors.NEUTRAL_20,
    },
  },

  activeSecondTab: {
    backgroundColor: colors.NEUTRAL_50,
  },
};
