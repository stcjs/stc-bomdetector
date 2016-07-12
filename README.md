# stc-bomdetector

Detect and remove BOM in files.

## Install

```sh
npm install stc-bomdetector
```

## How to use

```
var BOMDetector = require('stc-bomdetector');

stc.lint({
  BOMDetector: {plugin: BOMDetector, include: [/\.(js|css|html)/, {type: 'tpl'}]}
});
```