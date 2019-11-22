# ts-jest-mocks

I love how `sinon` handles mocking (really, stubbing) but have struggled with how `jest` does mocks. What I _do_ like about `jest`'s mocks is the diffing so I feel it's worth trying to make it work.

What I want to see is **at a minimum**:

- One line to mock out the module import
- One line to provide a stubbed result _within the context of the test_
- The ability to handle async functions gracefully

Wish list items:

- No explicit casts

I'll add more "requirements", wish list items, and examples as I experiment with `jest`.

## Issues

- Actually not as bad as I thought it would be. My only gripe at this point is doing an explicit cast. Seems like `jest` types could do a better job here.
