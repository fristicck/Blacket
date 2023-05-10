let str = ``;
let fstr = ``;

str.split('\n').forEach(b => {
  if (b.startsWith('//') || b === '') return;
  let formed = '';
  let a = b.split('\'');
  fstr += a[1] + ` {\n  ` + a[3].replaceAll('backgroundColor', 'background-color') + ': ' + a[5] + ` !important;\n}\n\n`;
});

console.log(fstr);
