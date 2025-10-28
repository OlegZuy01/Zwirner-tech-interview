export default function handler(req, res) {
	const mockUsers = [
		{ id: 1, name: "Alice", email: "ALICE@example.com" },
		{ id: 2, name: "Bob", email: null },
	];

	res.status(200).json(mockUsers);
}
