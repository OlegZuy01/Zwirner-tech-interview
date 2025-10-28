import { useState, useEffect } from "react";

export default function Home() {
	const [users, setUsers] = useState([]);
	const [loading, setLoadinh] = useState([]);

	useEffect(() => {
		try {
			setLoading(true);
			
			fetch("/api/users")
			.then((res) => {
				res.json()
			})
			.then((data) => {
				setUsers(data)
				setLoading(false);
			});


		} catch(e) {
			console.error(e);
		}
	}, []);

	return (
		<div>
			<h1>Users</h1>
			{loading ? 'Loading...' : ''}
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} {user.email ? ' - ' : ''} {user.email.toLowerCase()}
					</li>
				))}
			</ul>
		</div>
	);
}
