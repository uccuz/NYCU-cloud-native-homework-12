export class Potter {
    static readonly num_of_books: number = 5;
    private books_dic: {[key: number]: number} = {};

    constructor() {
        for(let i=0; i<Potter.num_of_books; i++) {
            this.books_dic[i] = 0;
        }
    }

    buyBook(books: number[]) {
        for(let book of books) {
            if(this.books_dic[book] !== undefined) {
                this.books_dic[book] += 1;
            }
        }
        console.log(this.books_dic);
    }

    get calPrice() {
        let price = 0;
        for(let i=0; i<Potter.num_of_books; i++) {
            price += this.books_dic[i]*8;
        }
        return price;
    }
}
