import authReducer from '../../reducers/auth';

test('should login correclty', () => {
  const action = {
    type: 'LOGIN',
    uid: 'dhty'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should logout correclty', () => {
  const action = {
    type: 'LOGIN'
  };
  const state = authReducer({ uid: 'anything' }, action);
  expect(state).toEqual({});
});
