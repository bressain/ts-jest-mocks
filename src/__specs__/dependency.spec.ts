import * as subject from '../dependency'

describe('dependency', () => {
  describe('#doTheThing', () => {
    it('does the thing', async () => {
      expect(await subject.doTheThing()).toEqual('I did the thing')
    })
  })
})
