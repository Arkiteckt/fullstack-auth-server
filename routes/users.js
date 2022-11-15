var express = require('express');
const { uuid } = require('uuidv4');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



/* GET users listing. */
router.post("/register", async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const saltRounds = 5; // For prod apps, saltRounds are going to be between 5 and 10
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  user = {
    email,
    password: hash,
    id: uuid()
  };

});

router.post("/login", async (req, res) => {
  const exp = Math.floor(Date.now() / 1000) + 60 * 60;
const payload = {
	userData,
	exp
}

const jwtSecretKey = process.env.JWT_SECRET_KEY;
const token = jwt.sign(payload, jwtSecretKey);
  const email = req.body.email;
  const password = req.body.password;

  res.json({ success: true, token, email });

  // const hashedUserPassword = user.password;
  const user = await db().collection("users").findOne({
    email,
  });

  // console.log(password, hashedUserPassword);

  const match = await bcrypt.compare(password, user.password);
  
  console.log(passwordMatch);

  if (!user) {
    res.json({ success: false, message: "Could not find user." }).status(204);
    return;
  }
  if (!match) {
    res
      .json({ success: false, message: "Password was incorrect." })
      .status(204);
    return;
  }

  const userType = email.includes("codeimmersives.com") ? "admin" : "user";

const userData = {
	date: new Date(),
	userId: user.id, 
	scope: userType,
};

router.post("/message", async (req, res) => {
  router.post("/login", async (req, res) => {
    const exp = Math.floor(Date.now() / 1000) + 60 * 60;
  const payload = {
    userData,
    exp
  }
});

if (!verifiedToken) {
	return res.json({
		success: false,
		message: "ID Token could not be verified",
	});
}

if (userData && userData.scope === "user") {
	return res.json({
		success: true,
		message: "I am a normal user",
	});
}

if (userData && userData.scope === "admin") {
	return res.json({
		success: true,
		message: "I am an admin user",
	});
}


module.exports = router;

  