import Person from './Person';
import useSWR from 'swr';
import { getById } from '../../api';
import AsyncData from '../../components/AsyncData';

export default function PersonTable({
  name
}) {

  const {
    data: person,
    isLoading, 
    error,
  } = useSWR(name ? `persons/${name}` : null, getById);

  return (
    <div>
      <AsyncData error={error} loading={isLoading}>
          <Person key={name} 
            {...person}
          />
      </AsyncData>
    </div>
  );
}
