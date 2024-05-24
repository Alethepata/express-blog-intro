const {posts} = require('../posts.js');

module.exports = {
    controllerPosts: (req, res) => { 
        res.format({
            html: () => {
                let html;
                posts.forEach(post => html += `<h1>${post.title}</h1>`)
                res.send(html);
            },
            json: () => {
                res.json(posts);
            }
        })
    }
}