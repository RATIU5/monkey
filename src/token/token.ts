type TokenType = string;

type Token = {
    Type: TokenType;
    Literal: string;
};

const ILLEGAL: TokenType = "ILLEGAL";
const EOF: TokenType = "EOF";

// Identifiers + literals
const IDENT: TokenType = "IDENT"; // add, foobar, x, y, ...
const INT: TokenType = "INT"; // 1343456

// Operators
const ASSIGN: TokenType = "=";
const PLUS: TokenType = "+";

// Delimiters
const COMMA: TokenType = ",";
const SEMICOLON: TokenType = ";";

const LPAREN: TokenType = "(";
const RPAREN: TokenType = ")";
const LBRACE: TokenType = "{";
const RBRACE: TokenType = "}";

// Keywords
const FUNCTION: TokenType = "FUNCTION";
const LET: TokenType = "LET";

const keywords: Record<string, TokenType> = {
    fn: FUNCTION,
    let: LET,
};

function LookupIdent(ident: string): TokenType {
    const tok = keywords[ident];
    if (tok) {
        return tok;
    }
    return IDENT;
}

export {
    ILLEGAL,
    EOF,
    IDENT,
    INT,
    ASSIGN,
    PLUS,
    COMMA,
    SEMICOLON,
    LPAREN,
    RPAREN,
    LBRACE,
    RBRACE,
    FUNCTION,
    LET,
};

export type { TokenType, Token };
