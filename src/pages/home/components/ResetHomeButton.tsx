import { useDispatch } from 'react-redux';
import { resetUser } from '../../../redux/slices/user.slice';

export const ResetHomeButton = () => {
  const dispatch = useDispatch();

  const dispatchAction = async () => {
    dispatch(resetUser());
  };

  return (
    <button onClick={ dispatchAction }>Dispatch reset</button>
  );
};