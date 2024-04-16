import { act } from '@testing-library/react';

import { useContactsService } from '../contacts.service';

jest.mock('@/config/constants', () => ({
  API_URL: 'http://example.com/api'
}));

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('useContactsService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches contacts successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ responseObject: [{ id: 1, name: 'John Doe' }] })
    });

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.getContacts();
    });

    expect(state.contacts).toEqual([]);
    expect(state.isLoading).toBeFalsy();
    expect(mockFetch).toHaveBeenCalledWith('http://example.com/api/contacts');
  });

  it('add contact successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ responseObject: [{ id: 1, name: 'John Doe' }] })
    });

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.addContact({ id: 1, name: 'John Doe' });
    });

    expect(state.contacts).toEqual([{ id: 1, name: 'John Doe' }]);
    expect(state.isLoading).toBeFalsy();
  });

  it('edit contact successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ responseObject: [{ id: 1, name: 'John Doe' }] })
    });

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.editContact({ id: '1', firstname: 'test', lastname: 'test', email: 'dafs' });
    });

    expect(state.isLoading).toBeFalsy();
  });

  it('deletes contacts successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ responseObject: [{ id: 1, name: 'John Doe' }] })
    });

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.deleteContact('1');
    });

    expect(state.isLoading).toBeFalsy();
  });
});
