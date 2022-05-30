// type TagType = { name: string; value: number }
// type InfoType = { desc: string; isActive: boolean }

// type incomingData = {
//     userId: number
//     id: number
//     title: string
//     info: InfoType
//     tags: TagType[]
// }

interface IJson {
    userId: number
    id: number
    title: string
    info: IInfo
    tags: ITag[]
}

interface IInfo {
    desc: string
    isActive: boolean
}

interface ITag {
    name: string
    value: number
}

const json: IJson = {
    userId: 1,
    id: 1,
    title: 'alsdfjasdf',
    info: { desc: 'asdf', isActive: true },
    tags: [{ name: 'basd', value: 42 }]
}
