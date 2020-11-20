import React from 'react';
import GoogleDocScrollyteller from '../../../../dist';
import type { PanelData } from '../Block';
import Block from '../Block';

const App: React.FC = () => (
  <GoogleDocScrollyteller<PanelData>
    renderPreview={(props) => <Block {...props} />}
  />
);

export default App;
