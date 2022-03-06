function remove_character(str, char_pos) 
    {
        part1 = str.substring(0, char_pos);
        part2 = str.substring(char_pos + 1, str.length);
        if(!str[char_pos]){
            // return null
            let error = console.log("Unable to find this character");
            return error;
        }
        return (part1 + part2);

    }

console.log(remove_character("apple",10));
console.log(remove_character("Javascript",3));
console.log(remove_character("Solutions",5));