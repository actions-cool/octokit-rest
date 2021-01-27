// 生成首页目录
const fs = require('fs');
const glob = require('glob');

const isWin = process.platform.includes('win');
const wrap = isWin ? '\r\n' : '\n';

// ********************************************************
function doGuide() {
  fs.writeFileSync('./docs/.directory.md', '');
  fs.writeFileSync('./docs/.directory.en-US.md', '');
  const guideCnTitle = '- [介 绍](/guide)';
  const guideEnTitle = '- [Guide](/en-US/guide)';

  let guideCn = guideCnTitle;
  let guideEn = guideEnTitle;
  const guidePaths = glob.sync('./docs/guide/*.md');
  guidePaths.forEach(guidePath => {
    const namePath = guidePath.split('/').pop().split('.')[0];
    const md = fs.readFileSync(guidePath, 'utf-8');
    const mds = md.split(wrap);
    const title = mds[1].split(`"`)[1];
    if (guidePath.includes('en-US')) {
      guideEn += `
  - [${title}](/en-US/guide/${namePath})`;
    } else {
      guideCn += `
  - [${title}](/guide/${namePath})`;
    }
  });

  fs.writeFileSync('./docs/.directory.md', guideCn);
  fs.writeFileSync('./docs/.directory.en-US.md', guideEn);
}

// ********************************************************
function doApi() {
  const cn = fs.readFileSync('./docs/.directory.md', 'utf-8');
  const en = fs.readFileSync('./docs/.directory.en-US.md', 'utf-8');

  const apiCnTitle = `
- [API](/api)`;
  const apiEnTitle = `
- [API](/en-US/api)`;

  let apiCn = apiCnTitle;
  let apiEn = apiEnTitle;
  const apiPaths = glob.sync('./docs/api/*.md');
  apiPaths.forEach(apiPath => {
    const namePath = apiPath.split('/').pop().split('.')[0];
    console.log(apiPath)
    if (apiPath.includes('en-US')) {
      apiEn += `
  - [${namePath}](/en-US/api/${namePath})`;
    } else {
      apiCn += `
  - [${namePath}](/api/${namePath})`;
    }
  });

  fs.writeFileSync('./docs/.directory.md', cn + apiCn);
  fs.writeFileSync('./docs/.directory.en-US.md', en + apiEn);
}

// ********************************************************
doGuide();
doApi();
