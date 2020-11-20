import { whenDOMReady } from '@abcnews/env-utils';
import { selectMounts } from '@abcnews/mount-utils';
import React from 'react';
import { render } from 'react-dom';
import App from './components/AppBasic';

whenDOMReady.then(() => render(<App />, selectMounts('app')[0]));
