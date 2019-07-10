export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = (amount) => {
  const num = amount++;
    return {
      type: 'INCREMENT',
      count: num
  }
}

export const decrement = (amount) => {
  const num = amount--;
  return {
    type: 'DECREMENT',
    count: num
  }
}
