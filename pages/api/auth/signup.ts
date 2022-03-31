import User from "../../../models/User";
import { hash } from 'bcryptjs';
import app from "../../../lib/app";

export default app.post(async (req, res) => {
    const password = await hash(req.body.password, 12);
    const user = await User.create({ ...req.body, password });
    res.status(201).json(user)
})