# ARM Instruction Documentation Converter

Converts documentation on ARM instructions that comes from [ARM Documentation site](https://developer.arm.com/downloads/-/exploration-tools) in HTML form into a JSON index. The index is employed by the [Visual Studio Code](https://code.visualstudio.com/) [extension](https://marketplace.visualstudio.com/items?itemName=Mikhail-Arkhipov.armassemblyeditor) that provides editor support for the [ARM Assembly language](https://developer.arm.com/documentation/dui0068/b/ARM-Instruction-Reference). The [extension repo is here](https://github.com/MikhailArkhipov/vscode-arm).

### Prerequisites
- `npm install -g typescript`
- `npm install -g ts-node`

### Usage
`ts-node convert.ts srcFolder dstFolder setName` 

For example:

`ts-node convert.ts ./ArmDocHtml/A32 . A32` 

yields `A32.json` index.

