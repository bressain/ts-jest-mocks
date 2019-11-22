import * as subject from '../dependency'

describe('dependency', () => {
  describe('#doTheThing', () => {
    it('does the thing', () => {
      expect(subject.doTheThing()).toEqual('I did the thing')
    })
  })
})
