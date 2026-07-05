const fs = require('fs');

// index.html以外の.htmlファイルを全部拾う
const files = fs.readdirSync('.')
  .filter(f => f.endsWith('.html') && f !== 'index.html');

const links = files
  .map(f => {
    const name = f.replace('.html', '').replace(/-/g, ' ');
    return `    <li><a href="/${f}">${name}</a></li>`;
  })
  .join('\n');

const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>My Portfolio</title>
</head>
<body>
  <h1>Portfolio</h1>
  <ul>
${links}
  </ul>
</body>
</html>
`;

fs.writeFileSync('index.html', html);
console.log('index.html generated with', files.length, 'links');
