import React, { createContext, useContext, useEffect, useState } from 'react';
import { MappedRelation } from '@customTypes/common';
import { useRelation } from '@hooks/useRelation';

interface RelationProvider {
  children: React.ReactNode;
}

const RelationContext = createContext<MappedRelation[] | undefined>(undefined);
const RelationUpdateContext = createContext<React.Dispatch<React.SetStateAction<MappedRelation[]>>>(() => {});

export const useMappedNames = () => {
  return useContext(RelationContext);
};

export const useSetMappedNames = () => {
  return useContext(RelationUpdateContext);
};

const RelationProvider: React.FC<RelationProvider> = ({ children }) => {
  const [mappedNames, setMappedNames] = useState<MappedRelation[]>();

  useEffect(() => {
    useRelation(setMappedNames);
  }, []);

  return (
    <RelationContext.Provider value={mappedNames!}>
      <RelationUpdateContext.Provider value={setMappedNames as React.Dispatch<React.SetStateAction<MappedRelation[]>>}>
        {children}
      </RelationUpdateContext.Provider>
    </RelationContext.Provider>
  );
};

export default RelationProvider;
