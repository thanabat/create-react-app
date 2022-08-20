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
  const [count, setCount] = React.useState<number>(0);
  const [title, setTitle] = React.useState<string>('header 1');
  const [show, setShow] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>();
  const [names, setNames] = React.useState<string[]>([]);
  const [email, setEmail] = React.useState<string>();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  React.useEffect(() => {
    setShow(count >= 0 && count < 5 && title == 'show');
  }, [show]);

  const onChangeInput = (t: string) => {
    setTitle(t);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNames((ns) => {
      return [...ns, name];
    });
    setName('');
  };

  return (
    <div style={{ border: '1px solid red' }}>
      {/* <Header1 title={title} color="white" /> */}
      {show && <Header1 title="This is title" />}

      {title === 'Hello React 101' ? (
        ''
      ) : (
        <div>
          <div style={{ height: '10px' }}></div>
          <CountComponent count={count} onIncrease={(c) => setCount(c)} />
          <button onClick={() => setCount((c) => c - 1)}> - </button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <input name="password" type="password" />
        <input
          type="checkbox"
          onClick={() => showPassword(show)=>!show)}
        />
        show
        <button>Login</button>
      </form>
    </div>
  );
}
