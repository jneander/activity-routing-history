// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {History} from 'history'

declare module 'history' {
  interface History {
    get index(): number
  }
}
