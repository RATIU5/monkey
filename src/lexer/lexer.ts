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
}