import { initializeTimes, updateTimes } from './App';
import { fetchAPI } from './api';


jest.mock('./api', () => ({
  fetchAPI: jest.fn()
}));

describe('Booking Functions', () => {
  beforeEach(() => {

    fetchAPI.mockReset();

    fetchAPI.mockResolvedValue([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ]);
  });

  test('initializeTimes returns initial times array', async () => {
    // Arrange
    const expectedTimes = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];

    // Act
    const initialTimes = await initializeTimes();

    // Assert
    expect(initialTimes).toEqual(expectedTimes);
    expect(fetchAPI).toHaveBeenCalled();
  });

  test('updateTimes returns updated times array when given a date', async () => {
    // Arrange
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-02-20' };
    
    // Act
    const newTimes = await updateTimes(state, action);

    // Assert
    expect(newTimes).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ]);
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test('updateTimes returns same state for unknown action type', async () => {
    // Arrange
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    
    // Act
    const newTimes = await updateTimes(state, action);

    // Assert
    expect(newTimes).toEqual(state);
  });

  test('initializeTimes handles API failure gracefully', async () => {
    // Arrange
    fetchAPI.mockRejectedValueOnce(new Error('API Error'));
    const expectedTimes = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];

    // Act
    const initialTimes = await initializeTimes();

    // Assert
    expect(initialTimes).toEqual(expectedTimes);
  });

  test('updateTimes handles API failure gracefully', async () => {
    // Arrange
    fetchAPI.mockRejectedValueOnce(new Error('API Error'));
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-02-20' };

    // Act
    const newTimes = await updateTimes(state, action);

    // Assert
    expect(newTimes).toEqual(state);
  });
});