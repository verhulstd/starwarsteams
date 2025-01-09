import express from "express";
import cors from "cors";
const server = express();
server.use(cors());
server.use(express.json());

const team = {
  student1: [],
  student2: [],
  student3: [],
  student4: [],
  student5: [],
  student6: [],
  student7: [],
  student8: [],
  student9: [],
  student10: [],
  student11: [],
  student12: [],
  student13: [],
  student14: [],
  student15: [],
  student16: [],
  student17: [],
  student18: [],
  student19: [],
  student20: [],
  student21: [],
  student22: [],
  student23: [],
  student24: [],
  student25: [],
  student26: [],
  student27: [],
  student28: [],
  student29: [],
  student30: [],
};

server.get("/api/teams/", (req, res) => {
  res.send(team);
});

server.get("/api/:student/team/", (req, res) => {
  res.send(team[req.params.student]);
});

server.post("/api/:student/team", (req, res) => {
  if (isNaN(req.body.id)) {
    res.status(500).send({
      message: "invalid data",
    });
    return null;
  }
  if (team[req.params.student].length === 5) {
    res.status(500).send({
      message: "team is full",
    });
    return null;
  }
  if (team[req.params.student].includes(req.body.id)) {
    res.status(500).send({
      message: "character already added",
    });
    return null;
  }

  team[req.params.student].push(parseInt(req.body.id));
  res.send({
    message: "character added",
  });
});

server.delete("/api/:student/team/:id", (req, res) => {
  if (team[req.params.student].indexOf(parseInt(req.params.id)) === -1) {
    res.status(500).send({
      message: "character is not part of team",
    });
    return null;
  }
  team[req.params.student].splice(
    team[req.params.student].indexOf(parseInt(req.params.id)),
    1
  );
  res.send({ message: "member removed" });
});

server.listen("1234");
