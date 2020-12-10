class Tag{
    constructor(tag, content, atribs){
        this.tag = tag;
        this.atribs = atribs;
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
                content += this.content[i].stringify;
        }
        else content = this.content;

        return `<${this.tag}${atribsStr}> ` + content + ` </${this.tag}>`;
    }
}