import moment from 'moment';

const commonOptions = {
  chart: {
    backgroundColor: 'transparent',
    plotBackgroundColor: '#1B2A338B',
    style: {
      fontFamily: 'KoPub Dotum',
    },
  },
  credits: {
    enabled: false,
  },
  title: {
    text: undefined,
  },
  tooltip: {
    shared: true,
    useHTML: true,
    borderColor: '#5470805C',
    borderWidth: 2,
    style: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
    },
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
    x: 5,
    y: -15,
    itemStyle: {
      color: '#BDC1D1',
      fontSize: '1.2rem',
    },
    itemHoverStyle: {
      color: '#fff',
    },
    itemHiddenStyle: {
      color: '#626674',
    },
    symbolWidth: 0,
    symbolHeight: 0,
    symbolPadding: 0,
    squareSymbol: false,
    useHTML: true,
    labelFormatter: function (this: Highcharts.Point) {
      if (this.name === 'TOTAL') return;
      return `<div style='display: flex; align-items: center; cursor: pointer;'>
                <span style='width: 1.2rem; height: 1.2rem; margin-right: 0.5rem; background-color: ${this.color}'></span>          
                ${this.name}
              </div>`;
    },
  },
  yAxis: {
    title: {
      text: undefined,
    },
    min: 0,
    labels: {
      x: -10,
      style: {
        color: '#BDC1D1',
        fontSize: '1.2rem',
      },
    },
    gridLineColor: '#5470805C',
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        x: 1,
        style: {
          textOutline: 'none',
          fontSize: '1.3rem',
          color: '#fff',
        },
        formatter: function (this: Highcharts.PointLabelObject) {
          return this.y ? this.y.toLocaleString() : this.y;
        },
      },
    },
  },
};

const defaultTooltipFormatter = {
  headerFormat: '<div style="padding-bottom: 0.5rem; border-bottom: 1px solid;">{point.key}</div>',
  pointFormatter: function (this: Highcharts.Point) {
    const { y, series } = this;
    return `<div style='display: flex; align-items: center; margin-top: 0.8rem; z-index: 1;'>
                <span style='width: 1.2rem; height: 1.2rem; margin-right: 0.5rem; background-color: ${
                  this.color
                }'></span>
                <span style='margin-right: 0.5rem;'>${series.name}</span>
                <span style='padding-top: 0.2rem; font-size: 1.4rem;'>${y ? y.toLocaleString() : y}</span>
              </div>`;
  },
};

const momentTooltipFormatter = (type: string) => {
  let format = '';

  switch (type) {
    case 'week':
      format = 'dd';
      break;
    case 'time':
      format = 'YYYY-MM-DD HH:mm';
      break;
    case 'search':
      format = 'YYYY년 MM월';
      break;
  }

  return {
    formatter: function (this: Highcharts.TooltipFormatterContextObject) {
      const points = this.points as Highcharts.TooltipFormatterContextObject[];
      let result = `<div style="padding-bottom: 0.5rem; border-bottom: 1px solid;">${moment(points[0]?.x)
        .locale('ko')
        .format(format)}</div>`;

      for (let { color, y, series } of this.points as Highcharts.TooltipFormatterContextObject[]) {
        const { name } = series;
        if (name === 'TOTAL') continue;
        result += `<div style='display: flex; align-items: center; margin-top: 0.8rem; z-index: 1;'>
                    <span style='width: 1.4rem; height: 1.4rem; margin-right: 0.5rem; background-color: ${color}'></span>
                    <span style='margin-right: 0.5rem;'>${name}</span>
                    <span style='padding-top: 0.2rem; font-size: 1.8rem;'>${y ? y.toLocaleString() : y}</span>
                  </div>`;
      }

      return result;
    },
  };
};

const obsOptions = {
  ...commonOptions,
  chart: {
    ...commonOptions.chart,
    marginBottom: 42, // 25
  },
  tooltip: {
    ...commonOptions.tooltip,
    ...defaultTooltipFormatter,
  },
  xAxis: {
    categories: [],
    labels: {
      useHTML: true,
      y: 8, // 20
      style: {
        color: '#BDC1D1',
        fontSize: '1rem',
      },
      formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
        // return `<span style='display: inline-block; max-width: 3.6rem; overflow: hidden; text-overflow: ellipsis; white-space:nowrap;'>${this.value}</span>`;
        return `<span style='display: inline-block; max-width: 5rem; overflow: hidden; text-overflow: ellipsis; white-space:nowrap;'>${this.value}</span>`;
      },
    },
    lineColor: '#5470805C',
    crosshair: true,
  },
  plotOptions: {
    ...commonOptions.plotOptions,
    series: {
      groupPadding: 0.27,
    },
  },
  series: [
    {
      name: 'A급',
      type: 'column',
      color: '#E6361F',
      borderWidth: 0,
      data: [],
      // data: [22, 22, 22, 22, 22, 22, 22, 22, 95, 22, 22],
    },
    {
      name: 'B급',
      type: 'column',
      color: '#F5C010',
      borderWidth: 0,
      data: [],
      // data: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35],
    },
  ],
};

const teamOptions = {
  ...commonOptions,
  chart: {
    ...commonOptions.chart,
    marginBottom: 42, // 25
  },
  tooltip: {
    ...commonOptions.tooltip,
    ...defaultTooltipFormatter,
  },
  xAxis: {
    categories: [],
    labels: {
      useHTML: true,
      y: 8, // 20
      style: {
        color: '#BDC1D1',
        fontSize: '1rem',
      },
      formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
        // return `<span style='display: inline-block; max-width: 3.6rem; overflow: hidden; text-overflow: ellipsis; white-space:nowrap;'>${this.value}</span>`;
        return `<span style='display: inline-block; max-width: 5rem; overflow: hidden; text-overflow: ellipsis; white-space:nowrap;'>${this.value}</span>`;
      },
    },
    lineColor: '#5470805C',
    crosshair: true,
  },
  plotOptions: {
    ...commonOptions.plotOptions,
    series: {
      groupPadding: 0.27,
    },
  },
  series: [
    {
      name: '심각',
      type: 'column',
      color: '#E6361F',
      borderWidth: 0,
      // data: [22, 22, 22, 22, 22, 22, 22, 22, 95, 22, 22],
      data: [],
    },
    {
      name: '경고',
      type: 'column',
      color: '#F5C010',
      borderWidth: 0,
      // data: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35],
      data: [],
    },
  ],
};

const weekOptions = {
  ...commonOptions,
  chart: {
    ...commonOptions.chart,
    marginBottom: 40,
  },
  tooltip: {
    ...commonOptions.tooltip,
    ...momentTooltipFormatter('week'),
  },
  xAxis: {
    categories: [],
    labels: {
      y: 20,
      style: {
        color: '#BDC1D1',
        fontSize: '1.4rem',
      },
      formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
        return moment(this.value).locale('ko').format('dd');
      },
    },
    lineColor: '#5470805C',
    crosshair: true,
  },
  plotOptions: {
    ...commonOptions.plotOptions,
    column: {
      ...commonOptions.plotOptions.column,
      stacking: undefined,
    },
    series: {
      pointPadding: 0.11,
      groupPadding: 0.22,
    },
  },
  series: [
    {
      name: '전주',
      type: 'column',
      color: '#768894',
      borderWidth: 0,
      data: [],
      // data: [2, 6, 54, 18, 1, 17, 4],
    },
    {
      name: '금주',
      type: 'column',
      color: '#F5C010',
      borderWidth: 0,
      data: [],
      // data: [83, 17, 83, 19, 1, 33, 124],
    },
  ],
};

const timeOptions = {
  ...commonOptions,
  chart: {
    ...commonOptions.chart,
    marginBottom: 25,
  },
  legend: {
    ...commonOptions.legend,
    x: 25,
  },
  tooltip: {
    ...commonOptions.tooltip,
    ...momentTooltipFormatter('time'),
  },
  xAxis: {
    categories: [],
    labels: {
      y: 18,
      style: {
        color: '#BDC1D1',
        fontSize: '1rem',
      },
      formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
        return moment(this.value).locale('ko').format('HH');
      },
      autoRotation: undefined,
    },
    lineColor: '#5470805C',
    crosshair: true,
  },
  plotOptions: {
    ...commonOptions.plotOptions,
    series: {
      groupPadding: 0,
    },
  },
  series: [
    {
      name: '심각',
      type: 'column',
      color: '#E6361F',
      borderWidth: 0,
      data: [],
      // data: [11, 11, 11, 11, 11, 11, 11, 15, 11, 11, 42, 13, 11, 11, 11, 11, 11, 11, 11, 11, 23, 11, 11, 11],
    },
    {
      name: '경고',
      type: 'column',
      color: '#F5C010',
      borderWidth: 0,
      data: [],
      // data: [35, 20, 40, 35, 40, 35, 35, 45, 35, 35, 65, 42, 35, 35, 35, 35, 35, 35, 35, 35, 52, 35, 35, 35],
    },
    {
      name: 'TOTAL',
      type: 'line',
      color: '#E6361F',
      data: [],
      // data: [46, 31, 51, 46, 51, 46, 46, 60, 46, 46, 107, 55, 46, 46, 46, 46, 46, 46, 46, 46, 75, 46, 46, 46],
    },
  ],
};

const searchOptions = {
  ...commonOptions,
  legend: {
    ...commonOptions.legend,
    x: 22,
    y: 0,
    itemStyle: {
      ...commonOptions.legend.itemStyle,
      fontSize: '1.4rem',
    },
  },
  tooltip: {
    ...commonOptions.tooltip,
    style: {
      ...commonOptions.tooltip.style,
      fontSize: '1.6rem',
    },
    ...momentTooltipFormatter('search'),
  },
  xAxis: {
    categories: [],
    labels: {
      y: 35,
      style: {
        color: '#BDC1D1',
        fontSize: '2.1rem',
      },
      formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
        return moment(this.value).locale('ko').format('YYYY년 MM월');
      },
    },
    tickColor: '#5470805C',
    lineColor: '#5470805C',
    tickWidth: 1,
    crosshair: true,
  },
  yAxis: {
    ...commonOptions.yAxis,
    labels: {
      ...commonOptions.yAxis.labels,
      x: -25,
      y: 10,
      style: {
        ...commonOptions.yAxis.labels.style,
        fontSize: '1.8rem',
      },
    },
  },
  plotOptions: {
    ...commonOptions.plotOptions,
    series: {
      pointPadding: 0.06,
      groupPadding: 0.2,
    },
    column: {
      ...commonOptions.plotOptions.column,
      stacking: undefined,
    },
    line: {
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
          fontSize: '1.5rem',
        },
        formatter: function (this: Highcharts.PointLabelObject) {
          return this.y ? this.y.toLocaleString() : this.y;
        },
      },
    },
  },
  series: [
    {
      name: '심각',
      type: 'column',
      color: '#E6361F',
      borderWidth: 0,
      dataLabels: {
        color: '#E6361F',
      },
      data: [],
      // data: [22, 106, 55, 40, 64, 53, 22, 46, 40, 22, 2, 2],
    },
    {
      name: '경고',
      type: 'column',
      color: '#F5C010',
      borderWidth: 0,
      dataLabels: {
        color: '#F5C010',
      },
      data: [],
      // data: [67, 145, 46, 76, 59, 57, 53, 95, 32, 38, 60, 80],
    },
    {
      name: 'TOTAL',
      type: 'line',
      color: '#A4F7FA',
      dataLabels: {
        y: -12,
        color: '#A4F7FA',
      },
      marker: {
        enabled: false,
      },
      data: [],
      // data: [89, 251, 101, 126, 123, 110, 78, 141, 72, 60, 62, 82],
    },
  ],
};

export const chartOptions = {
  week: weekOptions,
  team: teamOptions,
  obs: obsOptions,
  time: timeOptions,
  search: searchOptions,
};
