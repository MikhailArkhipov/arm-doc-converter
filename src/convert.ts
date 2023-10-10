// Copyright (c) Mikhail Arkhipov. All rights reserved.
// Licensed under the MIT License. See LICENSE in the project root for license information.

import { command, run, string, positional } from 'cmd-ts';
import { Directory } from 'cmd-ts/batteries/fs';
import { convertHtmlToIndex } from './htmlToIndex';

const cmd = command({
  name: 'ArmDocCvt',
  description: 'Converts documentation on ARM instructions in HTML form into small JSON index',
  version: '0.0.1',
  args: {
    srcFolder: positional({ type: Directory, displayName: 'srcFolder' }),
    dstFolder: positional({ type: Directory, displayName: 'dstFolder' }),
    setName: positional({ type: string, displayName: 'setName' }),
  },
  handler: (args) => {
    convertHtmlToIndex(args.srcFolder, args.dstFolder, args.setName);
  },
});

run(cmd, process.argv.slice(2));