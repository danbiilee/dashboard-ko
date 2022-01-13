import React from 'react';
import { StyledGrid } from './Grid.style';
import { GridData, GridTypes } from '@customTypes/common';
import { useFetchGrid } from '@hooks/useFetchGrid';
import Indicator from '@components/Indicator';
import { GRID_CLASS, GRID_COLUMNS } from './data';
import { openEMS } from '@customUtils/index';

interface GridProps {
  type: GridTypes;
}

const Grid: React.FC<GridProps> = ({ type }) => {
  const { data, isLoading, isError } = useFetchGrid(type);

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
            {(GRID_COLUMNS[type] as string[]).map((column, i) => (
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
              <div key={rowData.NO} className="row" onClick={() => openEMS(rowData.IP!, rowData?.ALARM_NAME)}>
                {Object.entries(rowData).map(([key, value], i) => {
                  if (key === 'IP') return;
                  return (
                    <div
                      key={i}
                      className={`cell ${GRID_CLASS[key as keyof GridData]} ${i % 2 === 0 ? 'even' : 'odd'} ${
                        key === 'ALARMSEVERITY' && value === '경고' ? 'warning' : 'critical'
                      }`}
                      title={key === 'INC' ? `${Math.abs(value as number).toLocaleString()}%` : value.toLocaleString()}
                    >
                      {key === 'INC' ? (
                        <>
                          {value !== 0 && <span className={value < 0 ? 'dec' : 'inc'}></span>}
                          <span>{Math.abs(value as number).toLocaleString()}</span>
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
