import { EventPropTypeInterface, VictoryBarTTargetType } from 'victory';

export function getOnClickHandler(onClickYear: (year: string) => void) {
  const events: EventPropTypeInterface<VictoryBarTTargetType, number | string | number[] | string[]>[] = [];

  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  const handleOnClick = (props: any) => {
    /* eslint-disable-next-line  react/prop-types */
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
