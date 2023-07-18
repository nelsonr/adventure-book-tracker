interface Item {
    name: string;
    quantity?: number
}

type Stat = {
    title: string;
    value: number | string;
    initialValue?: number | string;
    isLocked?: boolean;
};

type Stats = {
    [key: string]: Stat;
};

interface GameState {
    version: string;
    stats: Stats
}
