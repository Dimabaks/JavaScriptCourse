"use strict";

class Article {
    constructor(title, data) {
        this.title = title;
        this.data = data;
    }
    static createTodays() {
        return new Article("Some article", new Date());
    }
}

console.log(Article.createTodays());

const article = new Article("dsadas", 2024);
/* article.createTodays(); */ // не сработает