# babel-plugin-react-path-display

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/babel-plugin-react-path-display.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/akameco/babel-plugin-react-path-display.svg?branch=master)](https://travis-ci.org/akameco/babel-plugin-react-path-display)
[![Coverage Status](https://coveralls.io/repos/github/akameco/babel-plugin-react-path-display/badge.svg?branch=master)](https://coveralls.io/github/akameco/babel-plugin-react-path-display?branch=master)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> babel plugin for react display name with file path prefix.

## Install

```
$ yarn add --dev babel-plugin-react-path-display
```

## Usage

.babelrc

```json
{
  "plugins": ["react-path-display"]
}
```

### Options

## Examples

```js
import React from 'react'

export default class Link extends React.Component {
  render() {
    return <div>hello world</div>;
  }
}

      ↓ ↓ ↓ ↓ ↓ ↓

import React from 'react';

export default class Link extends React.Component {
  render() {
    return <div>hello world</div>;
  }
  static displayName = 'path.to.file.Link';
}
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub><b>akameco</b></sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/babel-plugin-react-path-display/commits?author=akameco "Code") [📖](https://github.com/akameco/babel-plugin-react-path-display/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/babel-plugin-react-path-display/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
