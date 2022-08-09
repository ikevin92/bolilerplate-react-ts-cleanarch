import { useAppDispatch } from '../../../redux/hooks/hooks';
import { resetUser } from '../../../redux/slices/user.slice';

export const ResetHomeButton = () => {
  const dispatch = useAppDispatch();

  const dispatchAction = () => {
    dispatch(resetUser());
  };

  return (
    <button onClick={ dispatchAction }>Dispatch reset</button>
  );
};