import { orange800, white } from './theme';

export const basicAxisStyles = {
  axisLabel: {
    fontSize: 8,
    fontStyle: 'italic',
    padding: 24,
  },
  grid: {
    opacity: 0.2,
  },
  tickLabels: {
    fontSize: 8,
  },
};

export const basicAxisYStyles = {
  ...basicAxisStyles,
  axisLabel: {
    ...basicAxisStyles.axisLabel,
    padding: 36,
  },
};

export const tooltipFlyoutStyles = {
  fill: white,
  stroke: orange800,
  strokeWidth: 1,
};

export const tooltipStyles = {
  fontSize: 8,
};
