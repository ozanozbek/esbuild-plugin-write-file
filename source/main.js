import { writeFile } from 'fs/promises';

const getWriteFunction = (files = {}) => (async () => {
  const operations = Object.entries(files)
    .map(
      ([target, content]) => writeFile(target, content)
    );
  await Promise.all(operations);
});

const writeFilePlugin = ({before, after}) => ({
  name: 'writeFile',
  async setup(build) {
    before && build.onStart(getWriteFunction(before));
    after && build.onEnd(getWriteFunction(after));
  }
});

export default writeFilePlugin;