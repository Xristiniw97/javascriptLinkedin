class Glass {
    constructor (
        type,
        color,
        height,
        ml,
        isFull
    ) {
        this.type = type,
        this.color = color,
        this.height = height,
        this.ml = ml,
        this.isFull = isFull
    }

    fullGlass(isFull) {
        this.isFull = isFull;
    }
}

export default Glass;