import QUnit from 'qunit'
import run from './run.js'
// @ts-ignore
import * as lib from '#dist'

export default {
  async test() {
    await new Promise((resolve, reject) => {
      run(QUnit, lib, lib, (results) => {
        if (results?.failed !== 0) {
          reject()
        } else {
          // @ts-ignore
          resolve()
        }
      })
    })
  },
}
