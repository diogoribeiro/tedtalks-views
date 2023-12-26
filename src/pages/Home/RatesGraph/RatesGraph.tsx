import { VictoryAxis, VictoryBar, VictoryChart, VictoryTooltip } from 'victory';

import { YearAvgViews } from '../../../types';

import { getOnClickHandler } from './events';

import Eye from '../../../components/Eye';
import { axisYStyles, axisStyles, tooltipFlyoutStyles, tooltipStyles, barStyles } from './styles';

interface RatesGraphProps {
  onClickYear: (year: string) => void;
  yearsAvgViews: YearAvgViews[];
}

function RatesGraph({ onClickYear, yearsAvgViews }: RatesGraphProps) {
  const data = yearsAvgViews.map((yearAvgViews) => ({
    x: yearAvgViews.year,
    y: yearAvgViews.avgViews,
  }));

  const events = getOnClickHandler(onClickYear);

  return (
    <VictoryChart domainPadding={20} height={200}>
      <VictoryAxis label="Avg views per talk (in millions)" dependentAxis style={axisYStyles} />
      <VictoryAxis label="Release year" style={axisStyles} />
      <Eye />
      <VictoryBar
        barWidth={30}
        data={data}
        events={events}
        labels={({ datum }) => `${datum.y.toFixed(2)}MM`}
        labelComponent={<VictoryTooltip flyoutPadding={4} flyoutStyle={tooltipFlyoutStyles} style={tooltipStyles} />}
        style={barStyles}
      />
    </VictoryChart>
  );
}

export default RatesGraph;
