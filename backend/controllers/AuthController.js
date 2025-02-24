export const login = async (req, res) => {
    const {email, password } = req.body;
    console.log(email,password);
    try {
        const msg = "connected ka"
        res.status(200).json({ message: msg });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add role', error: error.message });
    }
}




