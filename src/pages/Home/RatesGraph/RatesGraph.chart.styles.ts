import { basicAxisStyles, tooltipFlyoutStyles, tooltipStyles } from '../../../utils/chart';
import { purple800, orange800 } from '../../../utils/theme';

export const coloredAxisStyles = {
  ...basicAxisStyles,
  axis: {
    stroke: purple800,
  },
  axisLabel: {
    ...basicAxisStyles.axisLabel,
    fill: orange800,
  },
  grid: {
    ...basicAxisStyles.grid,
    stroke: purple800,
  },
  tickLabels: {
    ...basicAxisStyles.tickLabels,
    fill: purple800,
  },
};

export const coloredAxisYStyles = {
  ...coloredAxisStyles,
  axisLabel: {
    ...coloredAxisStyles.axisLabel,
    padding: 36,
  },
};

export const barStyles = {
  data: {
    fill: 'url(#bar)',
    cursor: 'pointer',
  },
};

export { tooltipFlyoutStyles, tooltipStyles };
