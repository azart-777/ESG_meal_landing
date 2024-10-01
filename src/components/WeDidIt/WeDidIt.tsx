import React from 'react';
import { useTranslation } from 'react-i18next';
import { dataWeDidIt } from './dataWeDidIt';
import WeDidItContent from './WeDidItContent/WeDidItContent';

export const WeDidIt: React.FC = () => {
    const { t } = useTranslation();
    const data = dataWeDidIt[0]; 

    return (
        <WeDidItContent 
            slogan={t(data.slogan)} 
            message={t(data.message)} 
            shortDescription={t(data.shortDescription)}
            cardData={[
                { title: t(data.cardBusiness.title), sentences: data.cardBusiness.sentences.map(sentence => t(sentence)) },
                { title: t(data.cardClient.title), sentences: data.cardClient.sentences.map(sentence => t(sentence)) }
            ]}
        />
    );
};