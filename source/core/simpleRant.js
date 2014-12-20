function SimpleRant() {
    this.rantConstructor = function (input) {
        var result = input, re;
        var regex = /\<(.*?)\>/g;
        var matches, token;
        var replacement = [], i=0;

        //// operator matches (anything inside bracket notation)
        //result = input, matches, token, replacement = [], i= 0, regex = /(\[.*?\])/g;
        //while (matches = regex.exec(input)) {
        //    // [rep:4] - repeat 4 times (loop)
        //    // [rep:4][sep:\s]{\8,x}
        //    console.log(matches[1]);
        //    //result = lexer(this, matches, result);
        //
        //}
        //
        //
        //
        //// expression matches (anything inside curly bracket notation)
        //result = input, matches, token, replacement = [], i= 0, regex = /(\{.*?\})/g;
        //while (matches = regex.exec(input)) {
        //    // [rep:4] - repeat 4 times (loop)
        //    // [rep:4][sep:\s]{\8,x}
        //    console.log(matches[1]);
        //    //result = lexer(this, matches, result);
        //
        //}

        // lexer matches (anything inside arrow notation)
        result = input, matches, token, replacement = [], i= 0, regex = /\<(.*?)\>/g;
        while (matches = regex.exec(input)) {  
            //var input = "noun long animal";
            // We accept a number of keywords, and they all correlate to the entries in the DIC files
            // First, get the DIC token
            re=new RegExp("\\w+","g");
            token = matches[1].match(re);
            // Match against valid keywords in valid_tokens
            if(dic.tokens.indexOf(token[0]) != -1){
                // Now we're ready to pass the token to the parser. It should
                // include the token and any modifiers and subs
                result = lexer(this, matches, result);
            }
        }
        return this.capitalize(result);
    };
}

SimpleRant.prototype.capitalize = function (s) {
    return s[0].toUpperCase() + s.slice(1);
};

if('undefined' != typeof module){
    module.exports.SimpleRant = SimpleRant;
}