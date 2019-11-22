import * as dependency from '../dependency'
import subject from '../index'

jest.mock('../dependency')

describe('index', () => {
  describe('#useDependency', () => {
    it('uses the dependency', () => {
      (dependency.doTheThing as jest.Mock).mockReturnValue('butts lol,')

      expect(subject()).toEqual('butts lol, and then I did the other thing')
    })
  })
})
