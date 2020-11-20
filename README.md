# GoogleDocScrollyteller

An [@abcnews/scrollyteller](https://github.com/abcnews/scrollyteller/) preview component for React, which loads, parses & renders [Odyssey-like content](https://github.com/abcnews/scrollyteller/#usage-with-odyssey) from a public Google Doc, as well as creating pastable Core Media rich-text.

## Usage

The `<GoogleDocScrollyteller>` only has one mandatory prop, a `renderPreview` function, which takes a scrollyteller definition as props (`config` and `panels`), and is expected to return a component containing a`<Scrollyteller>`.

### JavaScript usage

```jsx
import GoogleDocScrollyteller from '@abcnews/google-doc-scrollyteller';
import Scrollyteller from '@abcnews/scrollyteller';
import React, { useState } from 'react';
import Graphic from '<somewhere>';

const Block = ({ panels, config }) => {
  const [graphicProps, setGraphicProps] = useState(null);

  return (
    <Scrollyteller
      panels={panels}
      {...config}
      onMarker={(data) => setGraphicProps(data)}
    >
      <Graphic {...graphicProps} />
    </Scrollyteller>
  );
};

const App = () => (
  <GoogleDocScrollyteller
    renderPreview={(props) => <Block {...props} />}
  />
);

export default App;
```

### TypeScript usage

```tsx
import GoogleDocScrollyteller from '@abcnews/google-doc-scrollyteller';
import Scrollyteller from '@abcnews/scrollyteller';
import type { ScrollytellerDefinition } from '@abcnews/scrollyteller';
import React, { useState } from 'react';
import Graphic from '<somewhere>';
import type { GraphicProps } from '<somewhere>';

const Block: React.FC<ScrollytellerDefinition<GraphicProps>> = ({
  panels,
  config,
}) => {
  const [graphicProps, setGraphicProps] = useState<GraphicProps>(null!);

  return (
    <Scrollyteller<PanelData>
      panels={panels}
      {...config}
      onMarker={(data: GraphicProps) => setGraphicProps(data)}
    >
      <Graphic {...graphicProps} />
    </Scrollyteller>
  );
};

const App: React.FC = () => (
  <GoogleDocScrollyteller<PanelData>
    renderPreview={(props) => <Block {...props} />}
  />
);

export default App;
```

### Optional props 

**TODO**

- `preprocessCoreEl`
- `loadScrollytellerArgs`
- `postprocessScrollytellerDefinition`
- `renderFallbackImagesButton`

## Development

This project uses [tsdx](https://tsdx.io) for build/dev tooling and [np](https://github.com/sindresorhus/np) for release management.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run [the example](#example) inside another:

```bash
cd example
npm i
aunty serve
```

The example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode as recommended above.

To do a one-off build, use `npm run build`.

To run tests, use `npm test` or `yarn test`.

### Example

Mostly to aid development and demonstrate usage, there is an example project in `/example`. It uses [aunty](https://github.com/abcnews/aunty) as the build tool to match the usual ABC News interactive development work flow.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyse`.

### Releasing

To release a new version to NPM run `npm run release` and follow the prompts.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

### Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

## Authors

- Colin Gourlay ([gourlay.colin@abc.net.au](mailto:gourlay.colin@abc.net.au))
- Simon Elvery ([elvery.simon@abc.net.au](mailto:elvery.simon@abc.net.au))

See the [full list of contributors](https://github.com/abcnews/google-doc-scrollyteller/graphs/contributors).
