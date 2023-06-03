import * as token from "../token/token";

export class Lexer {
    input: string;
    position: number;
    readPosition: number;
    ch: string;

    constructor(input: string) {
        this.readPosition = 0;
        this.position = 0;
        this.ch = "";
        this.input = input;
        this.ReadChar();
    }

    ReadChar(): void {
        if (this.readPosition >= this.input.length) {
            this.ch = "";
        } else {
            this.ch = this.input[this.readPosition];
        }

        this.position = this.readPosition;
        this.readPosition += 1;
    }

    NextToken(): token.Token {
        let tok: token.Token | null = null;

        this.SkipWhitespace();

        switch (this.ch) {
            case "=":
                tok = this.NewToken(token.ASSIGN, this.ch);
                break;
            case ";":
                tok = this.NewToken(token.SEMICOLON, this.ch);
                break;
            case "(":
                tok = this.NewToken(token.LPAREN, this.ch);
                break;
            case ")":
                tok = this.NewToken(token.RPAREN, this.ch);
                break;
            case ",":
                tok = this.NewToken(token.COMMA, this.ch);
                break;
            case "+":
                tok = this.NewToken(token.PLUS, this.ch);
                break;
            case "{":
                tok = this.NewToken(token.LBRACE, this.ch);
                break;
            case "}":
                tok = this.NewToken(token.RBRACE, this.ch);
                break;
            case null:
                tok = this.NewToken(token.EOF, "");
                break;
            default:
                if (this.IsLetter(this.ch)) {
                    const literal = this.ReadIdentifier();
                    const type = token.LookupIdent(literal);
                    tok = this.NewToken(type, literal);
                    return tok;
                } else if (this.IsDigit(this.ch)) {
                    const literal = this.ReadNumber();
                    tok = this.NewToken(token.INT, literal);
                    return tok;
                } else {
                    tok = this.NewToken(token.ILLEGAL, "");
                }
        }

        this.ReadChar();

        return tok;
    }

    ReadIdentifier(): string {
        const position = this.position;
        while (this.IsLetter(this.ch)) {
            this.ReadChar();
        }
        return this.input.slice(position, this.position);
    }

    ReadNumber(): string {
        const position = this.position;
        while (this.IsDigit(this.ch)) {
            this.ReadChar();
        }
        return this.input.slice(position, this.position);
    }

    IsLetter(ch: string): boolean {
        return (
            ("a" <= ch && ch <= "z") || ("A" <= ch && ch <= "Z") || ch === "_"
        );
    }

    IsDigit(ch: string): boolean {
        return "0" <= ch && ch <= "9";
    }

    NewToken(tokenType: token.TokenType, ch: string): token.Token {
        return { Type: tokenType, Literal: ch };
    }

    SkipWhitespace(): void {
        while (
            this.ch === " " ||
            this.ch === "\t" ||
            this.ch === "\n" ||
            this.ch === "\r"
        ) {
            this.ReadChar();
        }
    }
}
