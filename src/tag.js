class Tag{
    constructor(tag, content, atribs = undefined){
        this.tag = tag;
        this.atribs = atribs ?? [];
        this.content = content;
    }

    get stringify(){
        let atribsStr = "";
        if(this.atribs){
            for(let i = 0; i < this.atribs.length; i++)
                atribsStr += this.atribs[i].stringify;            
        }

        let content = "";
        
        if(Array.isArray(this.content)){
            for(let i = 0; i < this.content.length; i++)
            {
                if(typeof(this.content[i]) === 'string' || content instanceof String)
                    content += this.content[i];
                else content += this.content[i].stringify;
            }
        }
        else content = this.content;

        return `<${this.tag}${atribsStr}>` + content + `</${this.tag}>`;
    }
}

module.exports = Tag;
