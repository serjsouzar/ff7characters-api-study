const express = require("express");
const router = express.Router();
const Character = require("./models/character");

router.get("/characters", async (req, res) => {
  const characters = await Character.find();
  res.send(characters);
});

router.post("/post", async (req, res) => {
  const newChar = new Character({
    name: req.body.name,
    yearsOld: req.body.yearsOld,
    charImg: req.body.charImg
  });
  await newChar.save();
  res.send(newChar);
});

router.get("/characters/:id", async (req, res) => {
  try {
    const characters = await Character.findOne({ _id: req.params.id });
    res.send(characters);
  } catch (error) {
    res.status(404)
    res.send({error: "Post doesn't exist!"})
  }
});

router.put("/characters/:id", async (req, res) => {
  try {
    const character = await Character.findOne({ _id: req.params.id})

    if(req.body.name){
      character.name = req.body.name
    }

    if(req.body.yearsOld){
      character.yearsOld = req.body.yearsOld
    }

    if(req.body.charImg){
      character.charImg = req.body.charImg
    } 

    await character.save()
    res.send(character)

  } catch (error) {
    res.status(404)
    res.send({error: "Post doesn't exist!"})
  }
})

router.delete("/characters/:id", async (req, res) => {
  try {
    await Character.deleteOne({ _id: req.params.id })
    res.status(204).send()
  } catch (error) {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
  }
})

module.exports = router;
