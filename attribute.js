class Attribute{
    constructor(name, value)
    {
        this.name = name;
        this.value = value;
    }

    get stringify()
    {
        return ` ${this.name}="${this.value}"`;
    }
}

module.exports = Attribute;