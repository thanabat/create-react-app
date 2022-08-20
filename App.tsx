import * as React from 'react';
import './style.css';
import InputComponent from './InputComponent';
import CountComponent from './CountComponent';

const Header1 = (props) => {
  // undefined | null | 0
  return (
    <h1 style={{ color: props.color, fontSize: '15px' }}>{props.title}</h1>
  );
};

Header1.defaultProps = {
  color: 'red',
};

export default function App() {
  const [count, setCount] = React.useState<number>(1);
  const [title, setTitle] = React.useState<string>('header 1');
  const [show, setShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    setShow(count >= 0 && count < 5 && title == 'show');
  }, [show]);

  const onChangeInput = (t: string) => {
    setTitle(t);
  };

  return (
    <div style={{ border: '1px solid red' }}>
      {/* <Header1 title={title} color="white" /> */}
      {show && <Header1 title="This is title" />}
      <InputComponent onChangeInput={onChangeInput} />

      {title === 'Hello React 101' ? (
        ''
      ) : (
        <div>
          <div style={{ height: '10px' }}></div>
          <CountComponent count={count} onIncrease={(c) => setCount(c)} />
          <button onClick={() => setCount((c) => c - 1)}> - </button>
        </div>
      )}
    </div>
  );
}
