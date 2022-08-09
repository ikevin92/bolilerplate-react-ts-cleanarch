import { Layout } from '../../styled-components';
import { HomeTitle } from './styled-components';
import { CreateHomeButton, ModifyHomeButton, ResetHomeButton } from './components';

export const Home = () => {

  return (
    <Layout>
      <CreateHomeButton />
      <ModifyHomeButton />
      <ResetHomeButton />
      <HomeTitle>Abemus Home</HomeTitle>
    </Layout>
  );
};