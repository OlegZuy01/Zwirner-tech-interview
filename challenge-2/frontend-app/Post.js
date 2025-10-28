export default function Post({ post }) {
	return (
		<article>
			<h1>{post.title}</h1>
			{post.image ? <Image src={post.image} alt={post.title} /> : ""}
			<div>
				{ post.body.map((block, i) => (
					block.children && block.children[0] ? <p key={i}>{block.children[0].text}</p> : ""
				)) }
			</div>
		</article>
	);
}