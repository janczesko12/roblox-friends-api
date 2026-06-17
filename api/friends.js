export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    const response = await fetch(
      `https://friends.roblox.com/v1/users/${userId}/friends`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      error: err.toString()
    });
  }
}
