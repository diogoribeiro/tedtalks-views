import { purple800, orange800, white } from '../../../utils/theme';

export const axisStyles = {
  axis: {
    stroke: purple800,
  },
  axisLabel: {
    fill: orange800,
    fontSize: 8,
    fontStyle: 'italic',
    padding: 24,
  },
  grid: {
    stroke: purple800,
    opacity: 0.2,
  },
  tickLabels: {
    fontSize: 8,
    fill: purple800,
  },
};

export const axisYStyles = {
  ...axisStyles,
  axisLabel: {
    ...axisStyles.axisLabel,
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

export const barStyles = {
  data: {
    fill: 'url(#bar)',
    cursor: 'pointer',
  },
};
