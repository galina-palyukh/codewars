/*DESCRIPTION:
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:
* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
    * With `name` not given
or `name` = ""        => return "Hello, World!"*/


// SOLUTIONS:
function hello(name) {
    if (name === undefined || name.trim() === '') {
        return 'Hello, World!';
    } else {
        let firstChar = name.charAt(0).toUpperCase();
        return "Hello, " + firstChar + name.toLowerCase().substr(1) + "!";
    }
}
console.log(hello(""));
console.log(hello("aLIcCe"));


function helloShort(name) {
    return "Hello, " + (!name ? "World" : name.charAt(0).toUpperCase()+ name.toLowerCase().substr(1)) +"!";
}

console.log(helloShort(""));
console.log(helloShort("aLIcCe"));
