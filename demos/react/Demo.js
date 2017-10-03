
import * as InstructureIconsLine from '../../src/Line'

import * as InstructureIconsSolid from '../../src/Solid'


const icons = {};
const variants = [];


variants.push('Line');

Object.keys(InstructureIconsLine).map(compName => {
  const name = compName.substring(0, compName.indexOf('Line'));
  icons[name] = icons[name] || []
  icons[name].push(InstructureIconsLine[compName])
})

variants.push('Solid');

Object.keys(InstructureIconsSolid).map(compName => {
  const name = compName.substring(0, compName.indexOf('Solid'));
  icons[name] = icons[name] || []
  icons[name].push(InstructureIconsSolid[compName])
})


const glyphs = Object.keys(icons).map((name) => Object.assign({}, {name, variants: icons[name]}));

glyphs.sort(function(a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

module.exports = {
  glyphs: glyphs,
  variants: variants
}