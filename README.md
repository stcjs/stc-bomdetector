# stc-replace

Content replace for stc, Support string & regular expression

## Install

```sh
npm install stc-replace
```

## How to use

```
var BOMDetector = require('stc-bomdetector');

stc.workflow({
  BOMDetector: {plugin: BOMDetector, include: [/\.(js|css|html)/, {type: 'tpl'}]}
})
```