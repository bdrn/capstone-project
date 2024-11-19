import { initializeTimes, updateTimes } from './App';

describe('Booking Functions', () => {
  test('initializeTimes returns initial times array', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ]);
  });

  test('updateTimes returns same times array when given a date', () => {
    const state = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', date: '2024-02-20' };
    const newTimes = updateTimes(state, action);
    expect(newTimes).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ]);
  });
});