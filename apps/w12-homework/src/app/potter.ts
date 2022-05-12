export class Potter {
    static readonly num_of_books: number = 5;
    static readonly book_price: number = 8;
    static readonly discount: {[key: number]: number} = { 
            1: 1.00, 2: 0.95, 3: 0.90, 4: 0.80, 5: 0.75 };
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
        while(this.get_number_of_books(this.books_dic) !== 0){
            let number_of_distinct_book = this.get_number_of_distinct_books(this.books_dic);
            price += Potter.book_price * Potter.discount[number_of_distinct_book] * number_of_distinct_book;
            this.remove_one_of_each_book(this.books_dic);
        }

        return price;
    }

    private get_number_of_books(books: {[key: number]: number}) {
        let sum = 0;
        for(let i=0; i<Potter.num_of_books; i++) {
            sum += this.books_dic[i];
        }
        return sum;
    }

    private remove_one_of_each_book(books: {[key: number]: number}) {
        for(let i=0; i<Potter.num_of_books; i++) {
            if(this.books_dic[i] !== 0) {
                this.books_dic[i] -= 1;
            }
        }
	}

    private get_number_of_distinct_books(books: {[key: number]: number}) {
        let num = 0;
        for(let i=0; i<Potter.num_of_books; i++) {
            if(this.books_dic[i] !== 0) {
                num += 1;
            }
        }
        return num;
	}
}
