import React from 'react';
import { StyledGrid } from './Grid.style';
import { GridData } from '@customTypes/common';
import { useGrid } from '@hooks/useGrid';
import { useEmsUrl } from '@hooks/useEmsUrl';
import Indicator from '@components/Indicator';
import { classNames, columns } from './data';

interface GridProps {
  type: string;
}

const Grid: React.FC<GridProps> = ({ type }) => {
  let { data, isLoading, isError } = useGrid(type);

  if (isLoading) {
    return <Indicator isLoading={isLoading} size="default" />;
  }
  if (isError) {
    return <Indicator isError={isError} />;
  }
  return (
    <>
      <StyledGrid type={type} length={data.length}>
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
          {!data.length ? (
            <Indicator isEmpty={true} />
          ) : (
            data.map((rowData: GridData) => (
              <div
                key={rowData.NO}
                className="row"
                // onClick={() => useEmsUrl(rowData.IP!, rowData?.ALARM_NAME)}
              >
                {Object.entries(rowData).map(([key, value], i) => {
                  if (key === 'IP') return;
                  return (
                    <div
                      key={i}
                      className={`cell ${classNames[key]} ${i % 2 === 0 ? 'even' : 'odd'} ${
                        key === 'ALARMSEVERITY' && value === '경고' ? 'warning' : 'critical'
                      }`}
                      title={key === 'INC' ? `${Math.abs(value as number).toLocaleString()}%` : value.toLocaleString()}
                    >
                      {key === 'INC' ? (
                        <>
                          {value !== 0 && <span className={value < 0 ? 'dec' : 'inc'}></span>}
                          <span>{`${Math.abs(value as number).toLocaleString()}%`}</span>
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

export default React.memo(Grid);
