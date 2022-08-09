import { createUser } from '../../../redux/slices/user.slice';
import { useAppDispatch } from '../../../redux/hooks/hooks';

export const CreateHomeButton = () => {
  const dispatch = useAppDispatch();

  const dispatchAction = () => {
    dispatch(createUser({ name: 'John Doe', id: '1' }));
  };

  return (
    <button onClick={ dispatchAction }>Dispatch action</button>
  );
};