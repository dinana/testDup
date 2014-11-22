/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    addcomments: function (req, res) {
        Post.findOne(req.params.postid).populate('comments').exec(function(err, post){
            var now = new Date();
            var jsonDate = now.toJSON()
            post.comments.add({content:"comment[" + jsonDate + "]-1"})
            post.comments.add({content:"comment[" + jsonDate + "]-2"})
            post.comments.add({content:"comment[" + jsonDate + "]-3"})
            post.save(function(err, post){
                if(err) {
                    sails.log.error('Error Saving comments for post:', req.params.postid,'error:',err)
                    res.json(500,err)
                }
                res.json(post);
            })
        })
    }
};

