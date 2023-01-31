import {
  cartDetailsFragment,
  userErrorsFragment,
} from '../fragments/cart-details-fragment'

export const cartCreateMutation = /* GraphQL */ `
  mutation cartCreate($input: CartInput = {}) {
    cartCreate(input: $input) {
      cart {
        ...CartDetails
      }
      userErrors {
        ...UserErrors
      }
    }
  }
  ${cartDetailsFragment}
  ${userErrorsFragment}
`

export const cartLinesAddMutation = /* GraphQL */ `
  mutation cartLinesAdd($lines: [CartLineInput!]!, $cartId: ID!) {
    cartLinesAdd(lines: $lines, cartId: $cartId) {
      cart {
        ...CartDetails
      }
      userErrors {
        ...UserErrors
      }
    }
  }
  ${cartDetailsFragment}
  ${userErrorsFragment}
`

export const cartLinesRemoveMutation = /* GraphQL */ `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartDetails
      }
      userErrors {
        ...UserErrors
      }
    }
  }
  ${cartDetailsFragment}
  ${userErrorsFragment}
`

export const cartLinesUpdateMutation = /* GraphQL */ `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartDetails
      }
      userErrors {
        ...UserErrors
      }
    }
  }
  ${cartDetailsFragment}
  ${userErrorsFragment}
`