import { EventPropTypeInterface, VictoryBarTTargetType } from 'victory';

interface OnClickProps {
  datum: {
    xName: string;
  };
}

export function getOnClickHandler(onClickYear: (year: string) => void) {
  const events: EventPropTypeInterface<VictoryBarTTargetType, number | string | number[] | string[]>[] = [];

  const handleOnClick = (props: OnClickProps) => {
    onClickYear(props.datum.xName);
  };

  events.push({
    target: 'data',
    eventHandlers: {
      onClick: () => ({
        target: 'data',
        mutation: handleOnClick,
      }),
    },
  });

  return events;
}
