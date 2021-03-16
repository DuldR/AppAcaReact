let testAction = [
    {id:1, rest: "OK"},
    {id:2, rest: "Butt"},
    {id:3, rest: "annus"}
]

myObj = {};

function addObj (current, add) {
    let newObj = Object.assign(current, add);
    return newObj;
}

