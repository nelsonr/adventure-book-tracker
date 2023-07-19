type Item = {
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

type Enemy = {
    id: number;
    skill: number;
    stamina: number;
}

interface GameState {
    version: string;
    stats: Stats
    enemies: Enemy[];
}
