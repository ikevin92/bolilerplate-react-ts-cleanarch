import { Layout } from '../../styled-components';
import { HomeTitle } from './styled-components';
import { CreateHomeButton, ModifyHomeButton, ResetHomeButton } from './components';

export const Home = () => {

  return (
    <Layout>
      <HomeTitle>Abemus Home</HomeTitle>
      <CreateHomeButton />
      <ModifyHomeButton />
      <ResetHomeButton />
    </Layout>
  );
};