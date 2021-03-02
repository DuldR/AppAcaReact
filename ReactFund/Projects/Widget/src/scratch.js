function nameFilter (q) {

    const names = ["abc", "ab", "a", "c"]
    let butts = [];

    inpLeng = q.length

//     for (i=0; i<names.length; i++) {
//         let str = names[i];
//         if (str.substr(0, inpLeng) === q) {
//             console.log("Found");
//         }
//     }
    names.forEach((ele) => {
        console.log(ele);
        butts.push(ele)
        console.log
    })

    return butts;
}
