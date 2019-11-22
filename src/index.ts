import { doTheThing } from './dependency'

export async function useDependency() : Promise<string> {
  try {
    return (await doTheThing()) + ' and then I did the other thing'
  } catch {
    return 'holy crap!'
  }
}

useDependency()
  .then(x => console.log(x))
  .catch(x => x)
