import { basicAxisStyles, tooltipFlyoutStyles, tooltipStyles } from '../../utils/chart';

export const axisStyles = {
  ...basicAxisStyles,
  axisLabel: {
    ...basicAxisStyles.axisLabel,
    fontSize: 14,
  },
  tickLabels: {
    fontSize: 10,
  },
};

export const axisYStyles = {
  ...axisStyles,
  axisLabel: {
    padding: 40,
  },
};

export { tooltipFlyoutStyles, tooltipStyles };
