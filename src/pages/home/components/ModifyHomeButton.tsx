import { modifyUser } from '../../../redux/slices/user.slice';
import { useAppDispatch } from '../../../redux/hooks/hooks';

export const ModifyHomeButton = () => {
  const dispatch = useAppDispatch();

  const dispatchAction = async () => {
    dispatch(modifyUser({ name: 'Kevin', id: '1' }));
  };
  return (
    <button onClick={ dispatchAction }>Dispatch modify</button>
  );
};