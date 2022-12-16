import 'fastestsmallesttextencoderdecoder';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

if (typeof BigInt === 'undefined') {
  const bi = require('big-integer')

  // BugFix for BigInt('0xffffffffffffffff') by CBOR lib
  function myBigInt(value) {
    if (typeof value === 'string') {
      const match = value.match(/^0([xo])([0-9a-f]+)$/i)
      if (match) {
        return bi(match[2], match[1].toLowerCase() === 'x' ? 16 : 8)
      }
    }
    return bi(value)
  }

  // @ts-ignore
  global.BigInt = myBigInt;
} 