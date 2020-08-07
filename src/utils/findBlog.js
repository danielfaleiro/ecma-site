import BlogPosts from '../data/blog/posts/posts.json'

const findBlog = (title) => BlogPosts.find(post => post.title === title)

export default findBlog
