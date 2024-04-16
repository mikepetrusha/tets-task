import { render, screen } from '../../../../unit-tests';
import { AddressbookCard } from '../addressbook-card';

const mockData = {
  id: '1',
  firstname: 'test1',
  lastname: 'test2',
  email: 'test@gmail.com'
};

describe('AddressbookCard component', () => {
  it('should render AddressbookCard', () => {
    render(<AddressbookCard data={mockData} />);
    const contact = screen.getByTestId('test-contact-card');
    expect(contact).toBeInTheDocument();
  });
});
