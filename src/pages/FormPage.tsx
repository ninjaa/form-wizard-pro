import React from 'react';
import { useParams } from 'react-router-dom';
import { ConsolePage } from './ConsolePage';
import { formConfigs } from '../utils/form_configs';
import './FormPage.scss';

export const FormPage: React.FC = () => {
  const { formType } = useParams<{ formType: string }>();
  const formConfig = formConfigs[formType || ''];

  if (!formConfig) {
    return <div>Form not found</div>;
  }

  return (
    <div className="form-page">
      <div className="form-container">
        <h1>{formConfig.title}</h1>
        <ConsolePage formConfig={formConfig} />
      </div>
    </div>
  );
};
