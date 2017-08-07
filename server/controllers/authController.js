import User from '../models/user';

export const signup = (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, existingUser) => {
        if (err) { return err; }
        if (existingUser) {
            return res.status(422).send({ error: 'Email уже зарегестрирован' });
        }
        const user = new User({ email, password });
        user.save();
    });
};

export const login = (req, res) => {
    const { email, role } = req.user;
    res.json({ token: getToken(req.user), email, role });
};
