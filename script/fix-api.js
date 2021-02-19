const fs = require('fs');
const glob = require('glob');

const paths = glob.sync('./.sync/api/*/*.md');

let target = '';

paths.forEach((path,ind) => {
  const arrPath = path.split('/');
  const basePath = arrPath[arrPath.length - 2];
  if (ind == 0) {
    target = basePath;
  }
  const title = arrPath[arrPath.length - 1].split('.')[0];
  const titleUp = `---
title: '${basePath}'
---

`;

  let before = '';
  if (ind == 0 || target != basePath) {
    fs.writeFileSync(`./docs/api/${basePath}.md`, '');
    before = titleUp;
    target = basePath;
  } else {
    before = fs.readFileSync(`./docs/api/${basePath}.md`, 'utf-8');
  }

  const md = fs.readFileSync(`./.sync/api/${basePath}/${title}.md`, 'utf-8');
  const index = md.indexOf('#');
  let after = md.substring(index, md.length);
  // after = after.replace(/####/g, '-');
  after = after.replace('## ', '#### ');
  after = after.replace('# ', '## ');

  fs.writeFileSync(`./docs/api/${basePath}.md`, before + after + '\n');
  fs.writeFileSync(`./docs/api/${basePath}.en-US.md`, before + after + '\n');
});
