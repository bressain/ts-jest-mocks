import { doTheThing } from './dependency'

export default function useDependency() : string {
  return doTheThing() + ' and then I did the other thing'
}

console.log(useDependency())
