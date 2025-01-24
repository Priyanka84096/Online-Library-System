import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [
        {
            id: 1,
            title: 'The Hitchhiker\'s Guide to the Galaxy',
            author: 'Douglas Adams',
            category: 'Sci-Fi',
            description: 'A comedic science fiction series about the journey of an ordinary Englishman and an alien through the galaxy.',
            rating: 4.5,
            image: 'https://www.booksatbahri.com/storefiles/productfiles/9780330492041/9780330492041.jpg'
        },
        {
            id: 2,
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            category: 'Romance',
            description: 'A classic novel of manners, which deals with themes of love, marriage, and class distinctions.',
            rating: 4.2,
            image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg'

        },
        {
           id: 3,
           title: "To Kill a Mockingbird",
           author: "Harper Lee",
           category: "Fiction",
           description: "A story about a young girl's moral growth, set against the backdrop of racial injustice in the American South",
           rating: 4.7,
           image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg"
         },
        {
          id: 4,
          title: "1984",
          author: "George Orwell",
          category: "Sci-Fi",
          description: "A dystopian novel exploring the dangers of totalitarianism and mass surveillance.",
          rating: 4.6,
          image: "https://ecsmedia.pl/c/nineteen-eighty-four-penguin-readers-level-7-w-iext163054755.jpg"
        },
        {
            id: 5,
            title: "Psyco",
            author: "Robert Bloch",
            category: "Thriller",
            rating: 4.1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScN0Uio_TaEz3-RCpVxotVJczS9zew7OUvtmlRoO4RsC2tusYlGJOxsNv43iZt1rKyIlA&usqp=CAU",
            description: "The novel tells the story of Norman Bates, a caretaker at an isolated motel who struggles under his domineering mother and becomes embroiled in a series of murders."
        },
        {
            id: 6,
            title: 'The Girl with the Dragon Tattoo',
            author: 'Stieg Larsson',
            category: 'Thriller',
            description: 'A thrilling mystery about a journalist and a hacker investigating a family disappearance.',
            rating: 4.3,
            image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1622820586i/34594249.jpg'
        },

        // ---------------------------
        {
            id: 7,
            title: "Ratan Tata",
            author: "Thomas Mathew",
            category: "Non-Fiction",
            rating: 4.7,
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQSa9fUGsXUhLot7u6XUNgI5NdqRZnUk2kcg3tNKjycoZaqopLvINZXjv6ZZXcNObXlQpypWHqU0ZvrpctODHv7SC0ZB0RgnbsmshVP7McxT1qqegE_-J5_g",
            description: "A detailed biography of Ratan Tata, tracing his life from a young man to the influential leader of the Tata Group, highlighting his leadership, vision, and commitment to social responsibility."
        },
        {
            id: 8,
            title: "The Secret",
            author: "Rhonda Byrne",
            category: "Non-Fiction",
            rating: 4.4,
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTxNdtWRChrn5fuL034QbFUq5XTfIuth4d9wrrhbXof995T4MYuy2zJj92kmLNdcynIN_jmocTFooLl15fDske5gEC4u5B4BVuJA9ILzP1Q&usqp=CAE",
            description: "A self-help book about the Law of Attraction, showing how positive thinking and visualization can help individuals manifest their desires and transform their lives."
        },
        {
            id: 9,
            title: "Verity",
            author: "Colleen Hoover",
            category: 'Thriller',
            rating: 4.1,
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRwfdw49KtQqrEAlB3Jd1MlDJ5cIUlRcDfgi9jGyj-WVLAaAGrtbKESnAyDGRTeRDPmLdqcp28ktXHZEnngtAWg8ZKFlazpi61idxGY4BM&usqp=CAE",
            description: "A psychological thriller about a struggling writer who uncovers shocking secrets in the autobiography of a disabled author, leading to a suspenseful and tense unraveling of truth and lies."
        },
        {
            id: 10,
            title: "Indian Polity",
            author: "M Laxmikanth",
            category: "Non-Fiction",
            rating: 4.5,
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRiN0Sn5da2CSxe7uL3YIfg-ak45fs0sIdXJMwky7AONJqUIFZlcql2UPAcXYzItROamZetbWfhrVi_8zfcmSOnsJ-UjJzDqw9bmgxMHCyZ",
            description: "An essential guide to India's political system, covering the Constitution, governance structures, and key political institutions, making it a vital resource for civil service exam preparation."
        },
        {
            id: 11,
            title: "Still Life",
            author: "Sarah Winman",
            category: "Fiction",
            rating: 4.0,
            image: "https://m.media-amazon.com/images/I/81q9Al6G-PL.jpg",
            description: "A beautifully written novel set during World War II and post-war Italy, following the intertwining lives of individuals whose relationships shape their personal growth and connection to art and memory."
        },
        {
            id: 12,
            title: "War and Peace",
            author: "Leo Tolstroy",
            category: "Fiction",
            rating: 4.2,
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9OXbnw-kx6LIhEYPhpLwQb-Cm_S2qx-OmXVjTpEi7Bj_weRM6asu6iPQI0Dk2hL_8quXXFiVMo-dpvYwCR2mBgBqY-KbH18frvZlBm7cy",
            description: "A sweeping epic set during the Napoleonic Wars, following Russian aristocratic families as they navigate love, war, and personal transformation, while Tolstoy explores deep philosophical questions about history and humanity."
        },
        {
            id: 13,
            title: "Lovely Bones",
            author: "Alice Sebold",
            category: "Fiction",
            rating: 4.7,
            image: "https://books.google.co.in/books/publisher/content?id=Xy3TDgAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE736JukMosMb0qkUowpk-K1pzjWxtiVfmVq34rZzA2K--pXBh5DgcqJ1ikUbNp45fREiWXsrg6DXJHdTAZ4ZUdQzGEQrWoyhmWJB4vnsI-vP0Wq-rr0hjzShDdpwIJ3IhIwAKe6D",
            description: "A haunting novel narrated by a young girl murdered by her neighbor, observing her family’s grief and their struggle to heal while finding her own peace in the afterlife."
        },
        {
            id: 14,
            title: "Something Special",
            author: "S. Massery",
            rating: 4.8,
            image: "https://images-na.ssl-images-amazon.com/images/I/61M9EF41QkL._AC_UL330_SR330,330_.jpg",
            description: "Three coincidental meetings with a handsome stranger convince Charlotte their relationship could be fate—but coincidence and love are two very different things."
        },
        {
            id: 15,
            title: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
            category: "Non-Fiction",
            description: "An exploration of the history of humankind, from the Stone Age to the present.",
            rating: 4.8,
            image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 16,
            title: "The Notebook",
            author: "Nicholas Sparks",
            category: "Romance",
            description: "A touching story of enduring love between Noah and Allie, spanning decades and facing numerous obstacles. It explores the power of love, memory, and commitment.",
            rating: 4.3,
            image: "https://rukminim2.flixcart.com/image/850/1000/kqgyhe80/regionalbooks/9/6/n/the-notebook-english-paperback-sparks-nicholas-original-imag4gyny7u6ghmt.jpeg?q=20&crop=false"
        },
    ],
    
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
    },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;