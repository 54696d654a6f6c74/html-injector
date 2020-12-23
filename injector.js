function injectHTML(injection, target)
{
    if(Array.isArray(injection))
    {
        for(let i = 0; i < injection.length; i++)
            document.getElementById(target).innerHTML += injection[i].stringify;
    }
    else
    {
        document.getElementById(target).innerHTML += injection.stringify;
    }
}

function injectHTMLTop(injection, target)
{
    if(Array.isArray(injection))
    {
        for(let i = 0; i < injection.length; i++)
            document.getElementById(target).innerHTML = injection[i].stringify + document.getElementById(target).innerHTML;
    }
    else
    {
        document.getElementById(target).innerHTML = injection.stringify + document.getElementById(target).innerHTML;
    }
}

module.exports = { injectHTML: injectHTML,
                   injectHTMLTop: injectHTMLTop
};