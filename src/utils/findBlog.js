import BlogPosts from '../data/blog/posts/posts.json'

const findBlog = (id) => BlogPosts.find(post => post.id === id)

export default findBlog
