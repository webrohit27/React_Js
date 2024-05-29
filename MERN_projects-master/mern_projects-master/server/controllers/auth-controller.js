const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// home logic---------------------------------------------------------------------------
const home = async (req, res) => {
  try {
    res.status(200).send("auth router using controlers");
  } catch (error) {
    console.log(error);
  }
};

// registration logic ---------------------------------------------------------------------------

const registration = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ message: "User already exist" });
    }

    //hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);
    const userCreated = await User.create({ username, email, phone, password });

    // res.status(201).json({ message: "User registered successfully" });
    res.status(201).json({ msg: userCreated });
    
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};



// login logic ---------------------------------------------------------------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // const userFound = await User.findByEmailAndPassword(email, password);
    const userExist = await User.findOne({email});
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({message : " email already exists"});
    }

    //add the jwt token to header of response
    // const user = await  bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);
    if (user) {
      res
      .status(200)
      .json({
        // msg: userCreated,
        msg: "login successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }else{
      res.status(401).json('invalid password');
      console.log("'invalid password'");
    }

  } catch (error) {
    res.status(500).json("internal server error");
  }
}



// user logic ........................................

const user = async(req, res)=>{

  try {
    const userData = req.user;
    console.log(userData);
    res.status(200).json({ userData});

  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
}


module.exports = { home, registration, login, user };
