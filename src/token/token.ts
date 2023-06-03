type TokenType = string;

type Token = {
    Type: TokenType,
    Literal: string,
}

const ILLEGAL = "ILLEGAL";
const EOF = "EOF";

// Identifiers + literals
const IDENT = "IDENT"; // add, foobar, x, y, ...
const INT = "INT"; // 1343456

// Operators
const ASSIGN = "=";
const PLUS = "+";

// Delimiters
const COMMA = ",";
const SEMICOLON = ";";

const LPAREN = "(";
const RPAREN = ")";
const LBRACE = "{";
const RBRACE = "}";

// Keywords
const FUNCTION = "FUNCTION";
const LET = "LET";

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
}

export type {
    TokenType,
    Token,
}