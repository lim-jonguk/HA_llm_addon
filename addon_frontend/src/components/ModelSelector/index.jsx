// components/ModelSelector/index.jsx

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SelectorContainer, Label, Select } from './styles';
import { getModelList } from '../../services/api';

function ModelSelector({ selectedModel, onModelChange }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    // 모델 목록 가져오기
    const fetchModels = async () => {
      try {
        const data = await getModelList();
        setModels(data);
      } catch (error) {
        console.error('모델 목록을 가져오는 중 에러 발생:', error);
      }
    };

    fetchModels();
  }, []);

  return (
    <SelectorContainer>
      <Label htmlFor="model-select">모델 선택:</Label>
      <Select
        id="model-select"
        value={selectedModel}
        onChange={(e) => onModelChange(e.target.value)}
      >
        {models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </Select>
    </SelectorContainer>
  );
}

ModelSelector.propTypes = {
  selectedModel: PropTypes.string.isRequired,
  onModelChange: PropTypes.func.isRequired,
};

export default ModelSelector;
