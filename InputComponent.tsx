import * as React from 'react';

export default function InputComponent() {
  const [value, setValue] = React.useState<string>('This is initial');

  return (
    <div>
      <div>Title :{value}</div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
