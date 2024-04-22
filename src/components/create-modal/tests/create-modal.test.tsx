import renderer from 'react-test-renderer';

import { CreateModal } from '../create-modal';
import { createModalHook } from '@/hooks/createModalHook';
import { ICreateModalProps } from '../create-modal.types';
import { act } from '@testing-library/react';

it('renders correctly', () => {
  const tree = renderer
    .create(<CreateModal onClose={() => console.log('test')} title="test" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly', async () => {
  await act(() => {
    const useCreateModalTest = createModalHook<ICreateModalProps>((props) => () => (
      <CreateModal {...props} />
    ));

    const TestComp = () => {
      const [openModal] = useCreateModalTest();
      openModal();
      /* fire events that update state */
      return <div>test</div>;
    };
    const tree = renderer.create(<TestComp />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
