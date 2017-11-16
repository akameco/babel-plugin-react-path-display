// @flow
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

pluginTester({
  title: 'default',
  plugin,
  snapshot: true,
  babelOptions: {
    filename: __filename,
    parserOpts: {
      plugins: ['classProperties', 'jsx'],
    },
    babelrc: false,
  },
  tests: [
    {
      title: 'ファイルパスに従って、displayNameを作成する',
      code: `
    import React from 'react'

    export default class Link extends React.Component {
      render() {
        return <div>hello world</div>
      }
    }
    `,
    },
    {
      title: 'displayNameがすでにある場合は変換しない',
      code: `
    import React from 'react'

    export default class Link extends React.Component {
      static displayName = 'Link'
      render() {
        return <div>hello world</div>
      }
    }
    `,
    },
    {
      title: 'SFCの場合は変換しない',
      code: `
    import React from 'react'

    function Link() {
      return <div>hello</div>
    }

    export default Link
    `,
    },
    {
      title: 'React以外のクラスは変換しない',
      code: `
    export default class Link {
      render() {
        return <div>hello world</div>
      }
    }
    `,
    },
    {
      title: 'displayName以外のstatic class propertyがある場合',
      code: `
    import React from 'react'

    export default class Link extends React.Component {
      static hello = 'hello'
      render() {
        return <div>hello world</div>
      }
    }
    `,
    },
  ],
})
