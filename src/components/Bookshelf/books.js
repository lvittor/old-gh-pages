import React from "react";
//Help — book API, where r u? GoogleBooks? wip
//Summaries and images from goodreads.com

const books = [
    {
        title: "The C Programming Language",
        author: "Brian Kernighan & Dennis Ritchie",
        finished: false,
        inProgress: false,
        "tags": [
            "non-fiction",
            "Cs. Computación",
        ],
        genre: "Cs. Computación",
        audiobook: false,
        isFiction: false,
        goodreadsUrl: "https://www.goodreads.com/book/show/515601.The_C_Programming_Language",
        coverImg: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391032531l/515601.jpg",
        summary: <div>
            <p>
                The C Programming Language (sometimes termed K&R, after its authors' initials) is a computer programming book written by Brian Kernighan and Dennis Ritchie, the latter of whom originally designed and implemented the language, as well as co-designed the Unix operating system with which development of the language was closely intertwined. 
                The book was central to the development and popularization of the C programming language and is still widely read and used today. 
                Because the book was co-authored by the original language designer, and because the first edition of the book served for many years as the de facto standard for the language, the book was regarded by many to be the authoritative reference on C.
            </p>
        </div>
    },
];

export default books;
