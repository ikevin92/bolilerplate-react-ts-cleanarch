import { useDispatch } from 'react-redux';
import { createUser } from '../../../redux/slices/user.slice';

export const CreateHomeButton = () => {
  const dispatch = useDispatch();

  const dispatchAction = async () => {
    dispatch(createUser({ name: 'John Doe', id: 1 }));
  };
  
  return (
    <button onClick={ dispatchAction }>Dispatch action</button>
  );
};