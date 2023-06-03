import * as token from '../token/token';

export class Lexer {
    input: string;
    position: number;
    readPosition: number;
    ch: string | null;

    constructor(input: string) {  
        this.readPosition = 0;
        this.position = 0;
        this.ch = null;
        this.input = input;
        this.readChar();
    }

    readChar(): void {
        if (this.readPosition >= this.input.length) {
            this.ch = null;
        } else {
            this.ch = this.input[this.readPosition];
        }

        this.position = this.readPosition;
        this.readPosition += 1;
    } 

    NextToken(): token.Token {
        let tok: token.Token | null = null;

        switch (this.ch) {
            case "=":
                tok = this.newToken(token.ASSIGN, this.ch);
                break;
            case ";":
                tok = this.newToken(token.SEMICOLON, this.ch);
                break;
            case "(":
                tok = this.newToken(token.LPAREN, this.ch);
                break;
            case ")":
                tok = this.newToken(token.RPAREN, this.ch);
                break;
            case ",":
                tok = this.newToken(token.COMMA, this.ch);
                break;
            case "+":
                tok = this.newToken(token.PLUS, this.ch);
                break;
            case "{":
                tok = this.newToken(token.LBRACE, this.ch);
                break;
            case "}":
                tok = this.newToken(token.RBRACE, this.ch);
                break;
            case null:
                tok = this.newToken(token.EOF, "");
        }

        this.readChar();

        if (tok === null) {
            tok = this.newToken(token.ILLEGAL, "");
        }

        return tok;
    }

    newToken(tokenType: token.TokenType, ch: string): token.Token {
        return {Type: tokenType, Literal: ch};
    }
        
}