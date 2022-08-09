import { useDispatch } from 'react-redux';
import { modifyUser } from '../../../redux/slices/user.slice';

export const ModifyHomeButton = () => {
  const dispatch = useDispatch();

  const dispatchAction = async () => {
    dispatch(modifyUser({ name: 'Kevin' }));
  };
  return (
    <button onClick={ dispatchAction }>Dispatch modify</button>
  );
};