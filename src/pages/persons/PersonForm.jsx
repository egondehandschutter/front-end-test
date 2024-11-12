import { useCallback } from 'react';
import useSWRMutation from 'swr/mutation';
import { post } from '../../api';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Error from '../../components/Error';
import { useNavigate } from 'react-router-dom';
import LabelInput from '../../components/LabelInput';
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/Theme.context';
import { IoMoonSharp, IoSunny } from 'react-icons/io5';

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Name is required'),
    age: yup.number().min(18).required('Age is required'),
  })
  .required()

export default function PersonForm() {
  
  const navigate = useNavigate();

  const {
    trigger: savePerson,
    error: saveError,
  } = useSWRMutation('persons', post);

  const { theme, toggleTheme } = useTheme();

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, isSubmitting } = methods;


  const onSubmit = useCallback(async ({ name, age }) => {
    await savePerson({
      name, 
      age,
    });
    navigate('/persons');
  }, [savePerson, navigate]);

  return (
    <>
      <button className="btn btn-secondary" type="button" onClick={toggleTheme}>
        {
          theme==='dark'
            ? <IoMoonSharp />
            : <IoSunny />
        }
      </button>
      <div>
        <Link  to={`/persons/`} className="btn btn-light">
          <IoArrowBack />
        </Link>
      </div>
      
      <h1>
        Add person
      </h1>
      
      <br></br>
      <Error error={saveError} />
      <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='w-50 mb-3'>
        <div className='mb-3'>
          <LabelInput
            label='Name'
            name='name'
            type='value'
          />
        </div>

        <div className='mb-3'>
          <LabelInput
            label='Age'
            name='age'
            type='value'
          />
        </div>
      
        <div className='clearfix'>
          <div className='btn-group float-end'>
            <button
              type='submit'
              className='btn btn-primary'
              to="/persons/"
              disabled={isSubmitting}
            >
              Add person
            </button>
          </div>
        </div>
      </form>
      </FormProvider>
    </>
  );
}
