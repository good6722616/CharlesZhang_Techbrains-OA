function char_replaceByNext(str) {
    const all_chars = str.split("");
    for(let i = 0; i < all_chars.length; i++) {
        let n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
        n = (n + 1) % 26; 
        all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }
    return all_chars.join("");
}
  
console.log(char_replaceByNext("abcdefg"))