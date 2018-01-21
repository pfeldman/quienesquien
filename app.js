import express from 'express';
const app = express();

class App {
    constructor(db) {
        this.dbo = db
    }

    getCatgories(gameId) {
        return new Promise(resolve => {
            const categories = this.dbo.collection('category');
            const options = this.dbo.collection('option');
            const finalCategories = [];

            categories.find({'gameID': gameId}).toArray()
                .then(categories => {
                    categories.forEach((category, index) => {
                        return options.find({'categoryId': category.id}).toArray()
                            .then(options => {
                                category.options = options;
                                finalCategories.push(category);
                                if (index === categories.length - 1) resolve(finalCategories);
                            });
                    });
                });
        })
    }

    game() {
        return new Promise(resolve => {
            const query = {};
            const game = this.dbo.collection('game');
            const index = Math.floor(Math.random() * game.count(query));
            const gameFound = game.find(query).limit(1).skip(index);
            gameFound.toArray()
                .then(items => {
                    const item = items[0] || {};
                    this.getCatgories(item.id)
                        .then(categories => {
                            item.categories = categories;
                            resolve(item);
                        })
                });
        })
    }

    boot() {
        app.get('/game', (req, res) => {
            this.game()
                .then(game => res.send(JSON.stringify(game)))
        })
        app.listen(process.env.PORT || 4000, () => { console.log('App is up') });
    }
}

export default App;