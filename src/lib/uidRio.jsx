import { uid } from 'uid';

export function uidRio() {
    const text = uid(22)
    const dataid = text.split('')
    dataid.splice(5, 1, '-')
    dataid.splice(11, 1, '-')
    dataid.splice(17, 1, '-')
    // dataid.splice(23, 1, '-')
    const data = dataid.toString().split(',').join('')
    return data
}