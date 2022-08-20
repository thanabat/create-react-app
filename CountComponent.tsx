import * as React from 'react';

export default function CountComponent(props) {
  const [num, setNum] = React.useState(0);
  const increase = () => {
    props.onIncrease(props.count + 1);
    // console.log('count', props.count);
  };

  return (
    <div>
      <div>Count :{props.count}</div>
      <button onClick={increase}>+</button>
    </div>
  );
}
