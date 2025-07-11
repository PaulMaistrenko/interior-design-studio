import PropTypes from 'prop-types';
import { SurveyStep1 } from '../SurveySteps/SurveyStep1';
import { SurveyStep2 } from '../SurveySteps/SurveyStep2';
import { SurveyStep3 } from '../SurveySteps/SurveyStep3';
import { SurveyStep4 } from '../SurveySteps/SurveyStep4';
import { SurveyStep5 } from '../SurveySteps/SurveyStep5';
import { SurveyStep6 } from '../SurveySteps/SurveyStep6';
import { SurveyStep9 } from '../SurveySteps/SurveyStep9';
import { SurveyStep7 } from '../SurveySteps/SurveyStep7';
import { SurveyStep8 } from '../SurveySteps/SurveyStep8';
import { useEffect, useState } from 'react';
import { getQuestions } from '../../../../utils/api';

export const SurveyQuestionsList = ({
  currentSurveyStep,
  setCurrentSurveyStep,
}) => {
  const [formData, setFormData] = useState({
    customer_name: '',
    phone_number: '',
    customer_question: '',
    chosen_answers: [
      {
        question: 1,
        custom_answer: '',
      },
      {
        option: '',
      },
      {
        option: '',
      },
      {
        option: '',
      },
      {
        option: '',
      },
    ],
  });
  const [surveyQuestions, setSurveyQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await getQuestions();
        setSurveyQuestions(data);
      } catch (err) {
        setError(err.message);
        console.error('Помилка завантаження:', err);
      } finally {
        setLoading(false);
      }
    };
    loadQuestions();
  }, []);

  switch (currentSurveyStep) {
    case 1:
      return (
        <SurveyStep1
          surveyStep1={surveyQuestions.find((item) => item.order === 1) || {}}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 2:
      return (
        <SurveyStep2
          surveyStep2={surveyQuestions.find((item) => item.order === 2) || {}}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 3:
      return (
        <SurveyStep3
          surveyStep3={surveyQuestions.find((item) => item.order === 3) || {}}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 4:
      return (
        <SurveyStep4
          surveyStep4={surveyQuestions.find((item) => item.order === 4) || {}}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 5:
      return (
        <SurveyStep5
          surveyStep5={surveyQuestions.find((item) => item.order === 5) || {}}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 6:
      return <SurveyStep6 />;
    case 7:
      return <SurveyStep7 />;
    case 8:
      return <SurveyStep8 setCurrentSurveyStep={setCurrentSurveyStep} />;
    case 9:
      return <SurveyStep9 />;
    default:
      return;
  }
};

SurveyQuestionsList.propTypes = {
  currentSurveyStep: PropTypes.number.isRequired,
  setCurrentSurveyStep: PropTypes.func.isRequired,
};
