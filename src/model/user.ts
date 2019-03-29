enum Feng {
    EAST = 0,
    SOUTH = 1,
    WEST = 2,
    NORTH = 3
}

interface User {
    id: number;
    score: number;
    kaze: Feng;
    isLiich?: Boolean;
}

export default User;
