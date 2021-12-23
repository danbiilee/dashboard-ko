import React from 'react';
import { StyledGrid } from './Grid.style';
import { GridData } from '@customTypes/common';
import { useGrid } from '@hooks/useGrid';
import { useEmsUrl } from '@hooks/useEmsUrl';
import Indicator from '@components/Indicator';

interface GridProps {
  type: string;
}

interface IndexClassNames {
  [index: string]: string;
}

interface IndexColumns {
  [index: string]: string[];
}

const classNames: IndexClassNames = {
  NO: 'no',
  SERVICE_NAME: 'service-nm',
  TEAM_NAME: 'team-nm',
  CNT: 'cnt',
  ALARMSEVERITY: 'grade',
  ALARM_NAME: 'alarm-nm',
  DAY: 'day',
  THIS_WEEK: 'this-week',
  LAST_WEEK: 'last-week',
  INC: 'ratio',
  CONDITIONLOGTEXT: 'log',
};

const columns: IndexColumns = {
  month: ['No', '서비스명', '팀명', '건수'],
  notTaken: ['No', '팀명', '등급', '알람명', '기간', '비고'],
  week: ['No', '알람명', '서비스명', '건수'],
  prepare: ['No', '알람명', '서비스명', '금주', '전주', '증감율'],
};

const Grid: React.FC<GridProps> = ({ type }) => {
  let { data: dataSource, isLoading, isError } = useGrid(type);

  if (isLoading) {
    return <Indicator isLoading={isLoading} size="default" />;
  }
  if (isError) {
    return <Indicator isError={isError} />;
  }
  return (
    <>
      <StyledGrid type={type} length={dataSource.length}>
        <div className="thead">
          <div className="row">
            {(columns[type] as string[]).map((column, i) => (
              <div key={i} className="cell" title={column}>
                <span className="text">{column}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="tbody">
          {!dataSource.length ? (
            <Indicator isEmpty={true} />
          ) : (
            dataSource.map((data: GridData) => (
              <div key={data.NO} className="row" onClick={() => useEmsUrl(data.IP!, data?.ALARM_NAME)}>
                {Object.entries(data).map(([key, value], i) => {
                  if (key === 'IP') return;
                  return (
                    <div
                      key={i}
                      className={`cell ${i % 2 === 0 ? 'even' : 'odd'} ${classNames[key]} ${
                        key === 'ALARMSEVERITY' && value === '경고' ? 'warning' : 'critical'
                      }`}
                      title={key === 'INC' ? `${Math.abs(value as number)}%` : value.toLocaleString()}
                    >
                      {key === 'INC' ? (
                        <>
                          {value !== 0 && <span className={value < 0 ? 'dec' : 'inc'}></span>}
                          <span>{`${Math.abs(value as number)}%`}</span>
                        </>
                      ) : (
                        <span className="text">{value.toLocaleString()}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </StyledGrid>
    </>
  );
};

export default Grid;
