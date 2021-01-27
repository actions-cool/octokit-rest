const fs = require('fs');
const glob = require('glob');
const axios = require('axios');

const paths = glob.sync('./sync/api/actions/*.md');

paths.forEach(path => {
  const title = path.split('/').pop().split('.')[0];
  const titleShow = `---
title: 'actions'
`;
  let md = fs.readFileSync(path, 'utf-8');
  const index = md.lastIndexOf('---');
  const after = md.substring(index, md.length);
  md = titleShow + after;
  fs.writeFileSync(path, md);
  console.log(`${title} done!`);
});
