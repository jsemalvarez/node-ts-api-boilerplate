# Node con TypeScript - TS-Node-dev (preferido)

1. Install TS and some dependencies

```
npm i -D typescript @types/node ts-node-dev rimraf
```

2. Init tsconfig

```
npx tsc --init --outDir dist/ --rootDir src
```

3. Update tsconfig

```
"exclude": ["node_modules","dist" ],
"include": ["src"],
```

4. Add scripts dev, build y start ([TS-Node-dev](https://www.npmjs.com/package/ts-node-dev))

```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```
