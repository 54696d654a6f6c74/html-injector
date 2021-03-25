// Import purely for documentation purposes
import Tag from "./tag.js";

/**
 * Converts Tag object into DOM Element object
 * 
 * @param {Tag} tag 
 * @returns {Element} DOM Element object
 */
function createElement(tag)
{
    var ele = document.createElement(tag.tag);
    
    for(let i = 0; i < tag.atribs.length; i++)
    {
        var att = document.createAttribute(tag.atribs[i].name);
        att.value = tag.atribs[i].value;
        ele.setAttributeNode(att);
    }

    if(typeof(tag.content) === 'string' || tag.content instanceof String)
        ele.innerHTML = tag.content;
    else if(Array.isArray(tag.content))
    {
        for(let i = 0; i < tag.content.length; i++)
        {
            if(typeof(tag.content[i]) === 'string' || tag.content[i] instanceof String)
                ele.innerHTML += tag.content[i];
            else
                ele.appendChild(createElement(tag.content[i]));
        }
    }
    else throw new Error("Tag content must be string or array");

    return ele;
}

/**
 * Appends passed Tag objects to the DOM at specifed target locations
 * 
 * @param {Tag | [Tag]} injection 
 * @param {string | [string]} target 
 */
function bindHTML(injection, target) {
    if(Array.isArray(injection))
    {
        var elems = [];
        for(let i = 0; i < injection.length; i++)
        {
            if(Array.isArray(injection[i]))
            {
                if(Array.isArray(target))
                {
                    if(target.length != injection.length)
                        throw new Error("The the amount of targets must match the amount of injections!");
                    
                    bindHTML(injection[i], target[i]);
                }

                else bindHTML(injection[i], target);
            }
            else elems.push(createElement(injection[i]));
        }

        if(Array.isArray(target))
        {
            if(target.length != injection.length)
                throw new Error("The the amount of targets must match the amount of injections!");
            for(let i = 0; i < target.length; i++)
                document.getElementById(target[i]).appendChild(elems[i]);
        }
        else{
            for(let i = 0; i < elems.length; i++)
                document.getElementById(target).appendChild(elems[i]);
        }
    }

    else
    {
        var elem = createElement(injection);

        document.getElementById(target).appendChild(elem);
    }
}

module.exports = { injectHTML: injectHTML,
                   injectHTMLTop: injectHTMLTop,
                   bindHTML
};
