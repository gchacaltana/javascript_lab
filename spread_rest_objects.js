let book = {
    title: "Enterprise Agility: Being Agile In a Changing World",
    isbn: "ISBN-13 978-1788990646",
    publicationDate: "June 2018",
    pages: 490,
    editorial: "Packt Publishing"
};

let author = {
    name: "Sunil Mundra",
    twitterAccount: "@sunil_mundra",
    twitterURL: "https://twitter.com/sunil_mundra",
    linkedInURL: "https://www.linkedin.com/in/sunilmundra/"
};
 
let objects = {book, author};
console.log(objects);
let {title, pages} = book;
console.log(title);
