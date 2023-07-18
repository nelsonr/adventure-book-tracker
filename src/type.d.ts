interface Item {
    name: string;
    quantity?: number
}
interface GameState {
    [key: string]: {
        title: string;
        value: number | string;
    }
}
