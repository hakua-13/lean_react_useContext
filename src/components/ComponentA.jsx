import { useContext } from 'react';
import { UseCount } from '../App';

export const ComponentA = () => {
  const { count, setCount } = useContext(UseCount);

  const handleCountUp = () => {
    setCount(preVal => preVal + 1);
  }
  const handleCountDown = () => {
    setCount(preVal => preVal - 1);
  }

  return(
    <>
      <h2>ComponentA</h2>
      <p>{count}</p>
      <button onClick={handleCountUp}>count up</button>
      <button onClick={handleCountDown}>count down</button>
    </>
  )
}