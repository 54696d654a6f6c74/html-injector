function bindOnclick(func, target)
{
    target.addEventListener("click", func);
}

module.exports = {
    bindOnclick
};