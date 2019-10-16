import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadExampleData, loadingExampleDataFailure } from '../store';

const useDataList = () => {
  const { exampleData } = useSelector(state => state.exampleData);
  const { error } = useSelector(state => state.error);

  return { exampleData, error };
};

const DataList = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);

  const { exampleData } = useSelector(state => state.exampleData);
  const { error } = useSelector(state => state.error);

  useEffect(() => {
    setIsDataLoading(true);

    setIsDataLoading(false);
  }, []);

  return (
    <div>
      00000<div>11111</div>
    </div>
  );
};

export default DataList;
