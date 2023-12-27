import { VictoryAxis, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryTooltip } from 'victory';

import { TedTalk } from '../../types';

import { countViewsByReleaseMonth } from '../../utils/data';
import { axisYStyles, axisStyles, tooltipFlyoutStyles, tooltipStyles } from './ViewsByReleaseMonth.chart.styles';

interface TopFiveProps {
  talks: TedTalk[];
}

function ViewsByReleaseMonth({ talks }: TopFiveProps) {
  const totalByMonth = countViewsByReleaseMonth(talks);
  const totalByMonthData = Object.values(totalByMonth)
    .sort((monthA, monthB) => monthA.monthIndex - monthB.monthIndex)
    .map((viewsByMonth) => ({
      x: viewsByMonth.monthLabel,
      y: viewsByMonth.views,
    }));

  return (
    <VictoryChart width={700} height={300}>
      <VictoryAxis label="Views (in millions)" dependentAxis style={axisYStyles} />
      <VictoryAxis label="Release month" style={axisStyles} />
      <VictoryGroup
        labels={({ datum }) => `${datum.y.toFixed(2)}MM`}
        labelComponent={<VictoryTooltip flyoutStyle={tooltipFlyoutStyles} style={{ ...tooltipStyles, fontSize: 12 }} />}
        data={totalByMonthData}
      >
        <VictoryLine
          style={{
            data: { stroke: 'tomato' },
          }}
        />
        <VictoryScatter size={3} />
      </VictoryGroup>
    </VictoryChart>
  );
}

export default ViewsByReleaseMonth;
