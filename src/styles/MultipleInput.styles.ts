import type { MultipleInputStyles } from '@true-engineering/feature-toggles-portal-ui';
import { trueEngineeringTheme } from '@true-engineering/ui-kit-true-engineering-theme';
const { colors, dimensions } = trueEngineeringTheme;

export const multipleInputStyles: MultipleInputStyles = {
  tag: {
    background: colors.BLUE_50,
  },

  removeTag: {
    color: colors.BLUE_900,
    opacity: 0.2,
    cursor: 'pointer',

    '&:hover': {
      opacity: 0.4,
    },
  },

  inputWrapper: {
    minHeight: dimensions.CONTROL_HEIGHT,
    border: ['solid', 1, colors.NEUTRAL_60],
    borderRadius: dimensions.BORDER_RADIUS_SMALL,
  },

  input: {
    borderRadius: dimensions.BORDER_RADIUS_SMALL,
    color: colors.NEUTRAL_900,

    '&::placeholder': {
      color: colors.NEUTRAL_100,
    },
  },

  required: {
    '&:before': {
      backgroundColor: colors.RED_900,
    },
  },

  focused: {
    borderColor: colors.BLUE_600,

    '& $label': {
      color: colors.BLUE_600,
    },
  },

  disabled: {
    backgroundColor: colors.NEUTRAL_20,

    '& $input': {
      color: colors.NEUTRAL_80,
    },
  },

  label: {
    color: colors.NEUTRAL_100,
  },

  invalid: {
    borderColor: colors.RED_600,
    '& $label': {
      color: colors.RED_600,
    },
  },

  invalidLabel: {
    color: colors.RED_600,
  },

  'error-top': {
    backgroundColor: colors.RED_600,
    color: colors.CLASSIC_WHITE,
  },

  'error-bottom': {
    color: colors.RED_600,
  },

  left: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  right: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  requiredLabel: {
    '&:after': {
      backgroundColor: colors.ORANGE_600,
    },
  },
};
