// "use client";

import React from 'react'
// import { useEffect, useState } from 'react'

export default function Blog() {
  return (
    <div>Blog</div>
  )
}

// // Example Blog page fetching posts from PayloadCMS REST API


// type Post = {
//   id: string
//   title: string
//   slug: string
//   publishedDate?: string
//   excerpt?: string
// }

// export function BlogPosts() {
//   const [posts, setPosts] = useState<Post[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     async function fetchPosts() {
//       try {
//         const res = await fetch('https://your-payloadcms-domain.com/api/posts')
//         const data = await res.json()
//         setPosts(data.docs || [])
//       } catch (err) {
//         setPosts([])
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchPosts()
//   }, [])

//   if (loading) return <div>Loading...</div>
//   if (!posts.length) return <div>No blog posts found.</div>

//   return (
//     <ul>
//       {posts.map(post => (
//         <li key={post.id}>
//           <a href={`/blog/${post.slug}`}>
//             <h2>{post.title}</h2>
//             {post.excerpt && <p>{post.excerpt}</p>}
//             {post.publishedDate && <small>{new Date(post.publishedDate).toLocaleDateString()}</small>}
//           </a>
//         </li>
//       ))}
//     </ul>
//   )
// }