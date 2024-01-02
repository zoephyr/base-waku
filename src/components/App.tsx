import { Counter } from './Counter.js';

const App = ({ name }: { name: string }) => {
  return (
    <div style={{ border: '3px red dashed', margin: '1em', padding: '1em' }}>
      <h1 className="text-3xl font-bold underline text-red-500">Hello {name}!</h1>
      <h3 className="text-xl font-bold underline text-purple-500">This is a server component. I guess this is going to be the rage this year</h3>
      <p>I sure hope I bet right on this technology...</p>
      <Counter />
    </div>
  );
};

export default App;
