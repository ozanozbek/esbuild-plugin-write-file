# esbuild-plugin-write-file

This esbuild plugin creates/writes files (asynchronously and in parallel) before and after bundling.

## Installation

```bash
npm install esbuild-plugin-write-file
```

## Usage

```js
import esbuild from 'esbuild';
import writeFilePlugin from 'esbuild-plugin-write-file';

esbuild.build({
  // ...
  plugins: [writeFilePlugin({
    before: { // write before bundling
      './src/template.html': 'template content',
      './src/license.txt': 'license content'
    },
    after: { // write after bundling
      './dist/report.json': JSON.stringify({hello: 'world'})
    }
  })]
});
```

## Options

**before**: {_String_ targetPath: _String_ content, ...}

An _object_ with `targetPath`: `content` entries. Files are written before bundling.

**after**: {_String_ targetPath: _String_ content, ...}

An _object_ with `targetPath`: `content` entries. Files are written after bundling.