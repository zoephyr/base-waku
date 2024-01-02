'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: '3px blue dashed', margin: '1em', padding: '1em' }}>
      <p><strong>Count</strong>: {count}</p>
      <button className="border-blue-500 p-1 rounded-md border-4" onClick={() => setCount((c) => c + 1)}>Increment</button>
      <h3>This is a client component. I'd sure love to understand RSC interleaving components more....</h3>
    </div>
  );
};
