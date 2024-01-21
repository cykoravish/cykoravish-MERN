import { User } from "../models/user-model.js";

// Home Logic

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to world best mern series by thapa technical using router "
      );
  } catch (error) {
    console.log(error);
  }
};

// Registration Logic

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }

    // hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("internal server error");
    console.log(req.body);
    next(error);
  }
};

// In most cases, converting _id to a string is a good practice because it ensures consistency and compatibility across different JWT libraries and systems. It also aligns with the expectation that claims in a JWT are represented as strings.

//* User Login Logic 📝

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials " });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

//* to send user data - User Logic 📝

const user = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

export { home, register, login, user };
