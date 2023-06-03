type TokenType = string;

type Token = {
    Type: TokenType;
    Literal: string;
};

const Tokens = {
    ILLEGAL: "ILLEGAL",
    EOF: "EOF",

    // Identifiers + literals
    IDENT: "IDENT", // add, foobar, x, y, ...
    INT: "INT", // 1343456

    // Operators
    ASSIGN: "=",
    PLUS: "+",
    MINUS: "-",
    BANG: "!",
    ASTERISK: "*",
    SLASH: "/",

    LT: "<",
    GT: ">",

    // Delimiters
    COMMA: ",",
    SEMICOLON: ";",

    LPAREN: "(",
    RPAREN: ")",
    LBRACE: "{",
    RBRACE: "}",

    // Keywords
    FUNCTION: "FUNCTION",
    LET: "LET",
};

const keywords: Record<string, TokenType> = {
    fn: Tokens.FUNCTION,
    let: Tokens.LET,
};

function LookupIdent(ident: string): TokenType {
    const tok = keywords[ident];
    if (tok) {
        return tok;
    }
    return Tokens.IDENT;
}

export default { ...Tokens, keywords, LookupIdent };
export type { TokenType, Token };
