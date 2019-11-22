import { doTheThing } from './dependency'

export async function useDependency() : Promise<string> {
  return (await doTheThing()) + ' and then I did the other thing'
}

useDependency()
  .then(x => console.log(x))
