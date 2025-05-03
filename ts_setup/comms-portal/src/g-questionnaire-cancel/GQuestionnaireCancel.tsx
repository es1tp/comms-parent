import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import { useIntl } from 'react-intl';


export const GQuestionnaireCancel: React.FC = () => {
  const nav = useNavigate();
  const intl = useIntl();


  function onCancel() {
    nav({
      from: '/public/$locale/pages/$pageId/products/$productId/offers/$offerId',
      to: '/public/$locale',
    })
  }

  return (
    <Button variant='outlined' onClick={onCancel}>{intl.formatMessage({id: 'buttons.cancel'})}</Button>
  )
}