import { useEffect, useState } from 'react';
import { UserEmptyState } from '../../../models';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { createUser } from '../../../redux/slices/user.slice';
import { fetchMorty, rickAndMortyUrl } from '../services';

export const CreateHomeButton = () => {
  const dispatch = useAppDispatch();
  const [morty, setMorty] = useState(UserEmptyState);

  const getMorty = async () => {
    const result = await fetchMorty(rickAndMortyUrl);
    setMorty(result);
  };

  useEffect(() => {
    getMorty();
  }, []);

  const dispatchAction = () => {
    dispatch(createUser(morty));
  };

  return (
    <button onClick={ dispatchAction }>Dispatch action</button>
  );
};