// 首次使用，生成 US.md
return false;
const fs = require('fs');
const glob = require('glob');

const pathArr = [
  './docs/guide/*.md',
  './docs/api/*.md',
];

pathArr.forEach(path => {
  const files = glob.sync(path);
  files.forEach(file => {
    const md = fs.readFileSync(file, 'utf-8');
    const en = file.replace('.md', '.en-US.md');
    fs.writeFileSync(en, md);
  });
});
