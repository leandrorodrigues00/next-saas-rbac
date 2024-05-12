import { ability } from '@saas/auth'

const userCanInveteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUSers = ability.can('delete', 'User')

const userCannotDeleteOtherUSers = ability.cannot('delete', 'User')

console.log(userCanInveteSomeoneElse)
console.log(userCanDeleteOtherUSers)
console.log(userCannotDeleteOtherUSers)
