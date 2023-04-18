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
import formatText from './formatters/text'
// import postcssNormalize from 'postcss-normalize'


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

const insertCss = (props: {css:string, from?:string, to?:string} = {
   css: '',
   from: 'src/lib/theme/generator/mist-theme.css',
   to: 'src/lib/theme/generated/mist-theme.css'
}) => {
   var from = props.from?? 'src/lib/theme/mist-theme.css'
   var to = props.to?? 'src/lib/theme/generated/mist-theme.css'

   var result = postcss.parse(props.css.toString(), {
      from: from
   }).toString();
   
   result = formatText.trim(result);
   // console.log(result);
   fs.writeFile(to, result, () => true)
}

export default insertCss;