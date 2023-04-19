import postcss from 'postcss'
import fs from 'fs'

import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting'
import postcssMixins from 'postcss-mixins'
import postcssCustomProperties from 'postcss-custom-properties'
import postcssAtRulesVariables from 'postcss-at-rules-variables'
import postcssImport from 'postcss-import'
import postcssSimpleVars from 'postcss-simple-vars'
import postcssEach from 'postcss-each'
import formatText from '../utils/formatters/text'
// import postcssNormalize from 'postcss-normalize'

import mistCss from '../theme/generator'


const postcssPlugins = [
   postcssImport,
   // postcssNormalize,
   postcssMixins,
   postcssSimpleVars,
   postcssNesting,
   postcssEach({
      plugins: {
         afterEach: [
            postcssAtRulesVariables
         ],
         beforeEach: [
            postcssCustomProperties
         ]
      }
   }),
   autoprefixer,
]

const fileOrigin = './generate-theme.css'
const fileLocation = 'mist/generated/mist-theme.css'

try {
   var result = postcss.parse(mistCss.toString(), {
      from: fileOrigin
   }).toString();

   result = formatText.trim(result);
   fs.writeFile(fileLocation, result, () => true);
   console.log('Mist Theme generated successfully!')
} catch (err) {
   console.log('Error while writing Mist CSS file.')
}