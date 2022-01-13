import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { StyledChart } from './Chart.style';
import { chartOptions } from '@components/Chart/options';
import { ChartParam } from '@customTypes/common';
import { useFetchChart } from '@hooks/useFetchChart';
import Indicator from '@components/Indicator';
import { areEqual, getCategories, getSeries } from '@customUtils/index';

Highcharts.setOptions({
  lang: {
    thousandsSep: ',',
  },
});

export interface ChartProps {
  type: keyof typeof chartOptions;
  param?: ChartParam;
}

const Chart: React.FC<ChartProps> = ({ type, param }) => {
  const urlType = type === 'search' ? type : 'main';
  const path = type === 'search' ? undefined : type;

  const [options, setOptions] = useState(chartOptions[type]);
  const { data, isLoading, isError } = useFetchChart(urlType, path, param);

  useEffect(() => {
    if (!data) {
      return;
    }

    setOptions((options) => {
      let opt: any = {};
      opt = { ...options };
      opt.xAxis.categories = getCategories(type, data);
      opt.series = getSeries(type, data, options.series);
      return opt;
    });
  }, [data]);

  if (isLoading) {
    return <Indicator isLoading={isLoading} size={type === 'search' ? 'large' : 'default'} />;
  }
  if (isError) {
    return <Indicator isError={isError} />;
  }
  return (
    <>
      {type !== 'team' && type !== 'obs' && !data.length ? (
        <Indicator isEmpty={true} />
      ) : (
        <StyledChart>
          <HighchartsReact highcharts={Highcharts} options={options} />
          {type === 'week' && <span className="today">TODAY</span>}
        </StyledChart>
      )}
    </>
  );
};

export default React.memo(Chart, areEqual);
