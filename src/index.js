import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Parent from './Parent';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Parent />
  </StrictMode>
);
