import { VictoryAxis, VictoryBar, VictoryChart, VictoryTooltip } from 'victory';

import { YearAvgViews } from '../../../types';

import { getOnClickHandler } from './events';

import Eye from '../../../components/Eye';
import {
  coloredAxisYStyles,
  coloredAxisStyles,
  tooltipFlyoutStyles,
  tooltipStyles,
  barStyles,
} from './RatesGraph.chart.styles';
import './RatesGraph.css';

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
    <div className="graph-container">
      <VictoryChart domainPadding={20} height={200}>
        <VictoryAxis label="Avg views per talk (in millions)" dependentAxis style={coloredAxisYStyles} />
        <VictoryAxis label="Release year" style={coloredAxisStyles} />
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
    </div>
  );
}

export default RatesGraph;
