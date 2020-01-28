function vowelsAndConsonants(s) {
    const v = 'aeiou';
    let c = '';
    for (let i = 0; i < s.length;i++) {
        if (v.includes(s[i]))
            console.log(s[i]);
        else
            c += s[i] + "\n";
    }
    console.log(c);
}
// function vowelsAndConsonants(s) {
// 	let vRegEx = /[aeiou]/g;
//  let cRegEx = /[^aeiou]/g;
//  console.log(s.match(vRegEx).join("\n"));
//  console.log(s.match(cRegEx).join("\n"));
// }