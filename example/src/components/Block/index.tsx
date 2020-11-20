import React, { useCallback, useState } from 'react';
import type { ScrollytellerDefinition } from '@abcnews/scrollyteller';
import Scrollyteller from '@abcnews/scrollyteller';
import Graphic from '../Graphic';

export type PanelData = {
  index: number;
  number: number;
};

const Block: React.FC<ScrollytellerDefinition<PanelData>> = ({
  panels,
  config,
}) => {
  const [data, setData] = useState<PanelData>(null!);
  const [progress, setProgress] = useState<number>(null!);
  const [counter, setCounter] = useState<number>(0);
  const onMarker = useCallback(
    (data: PanelData) => {
      setData(data);
      setCounter(counter + 1);
    },
    [counter]
  );
  const onProgress = useCallback(({ pctAboveFold }) => {
    setProgress(pctAboveFold);
  }, []);

  return (
    <Scrollyteller<PanelData>
      waypoint={0.5}
      panels={panels}
      {...config}
      onMarker={onMarker}
      onProgress={onProgress}
    >
      <Graphic panel={data?.number} progress={progress} counter={counter} />
    </Scrollyteller>
  );
};

export default Block;
