// @flow weak
import path from 'path'
import slash from 'slash'
// import blog from 'babel-log'

export default ({ types: t }) => {
  const isReactClass = require('babel-helper-is-react-class')(t)

  return {
    name: 'react-path-display',
    visitor: {
      Class(classPath, { file: { opts: { filename } } }) {
        if (!isReactClass(classPath.node)) {
          return
        }

        let hasDisplayName = false

        classPath.traverse({
          ClassProperty({ node }) {
            const { name } = node.key
            if (node.static && name === 'displayName') {
              hasDisplayName = true
            }
          },
        })

        if (hasDisplayName) {
          return
        }

        const componentName = classPath.node.id.name

        const { dir, name } = path.parse(path.relative(process.cwd(), filename))
        const prefix = slash(dir + path.sep + name).replace('/', '.')

        const displayName = `${prefix}.${componentName}`

        const prop = t.classProperty(
          t.identifier('displayName'),
          t.stringLiteral(displayName),
        )
        prop.static = true

        classPath.get('body').pushContainer('body', [prop])
      },
    },
  }
}
