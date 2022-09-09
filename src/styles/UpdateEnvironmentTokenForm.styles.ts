import type { UpdateEnvironmentTokenFormStyles } from '@true-engineering/feature-toggles-portal-ui';
import { rgba } from '@true-engineering/true-react-common-ui-kit';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors, dimensions } = trueEngineeringTheme;

export const updateEnvironmentTokenFormStyles: UpdateEnvironmentTokenFormStyles = {
  inputControls: {
    background: `linear-gradient(90deg, ${rgba(
      colors.NEUTRAL_20,
      0.0001,
    )} 0%, ${colors.NEUTRAL_20} 27.52%)`,
    borderRadius: dimensions.BORDER_RADIUS_SMALL,
  },
};
