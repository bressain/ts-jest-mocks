import * as dependency from '../dependency'
import * as subject from '../index'

jest.mock('../dependency')

describe('index', () => {
  describe('#useDependency', () => {
    it('uses the dependency', async () => {
      (dependency.doTheThing as jest.Mock).mockResolvedValue('butts lol,')

      expect(await subject.useDependency()).toEqual('butts lol, and then I did the other thing')
    })

    it('handles errors from the dependency', async () => {
      (dependency.doTheThing as jest.Mock).mockRejectedValue('it broke')

      expect(await subject.useDependency()).toEqual('holy crap!')
    })
  })
})
