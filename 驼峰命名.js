function name() {
    let str = 'get-element-by-id';
    let s = new String();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-") {
            s[i] = '';
            s[i + 1] = str[i + 1].toUpperCase();
             i++;
        }else{
            s[i] = str[i];
        }
        document.write(s[i]);
    }
}