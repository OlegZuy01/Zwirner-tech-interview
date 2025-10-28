import React, { useState, useEffect } from "react";
import { client } from "./sanity-client";
import Post from "./Post";

// GROQ query
export const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  featuredImage
}`;

// interface Post {
// 	title: String,
// 	body?:  Array,
// 	featuredImage?: String,
// }


function App() {
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				
				const result = await client.fetch(postQuery, { slug: "post-slug" });

				if(result.status === '200') {

					const data = Response.json()

					// data.fields.



				} else if(result.status === '404') {
					setPost(null);

				}
				 else {
					setError(result.error);
				}


				console.log(result);
				setPost(result);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchPost();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!post) {
		return <div>No post found</div>;
	}

	return <Post post={post} />;
}

export default App;
