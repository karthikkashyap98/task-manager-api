const app = require("./app");
const port = process.env.PORT;

// Maintainance Mode
// app.use((req, res, next) => {
//   res
//     .status(503)
//     .send("Sorry we are under maintainance! We will be up and running");
// });

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const Task = require("../src/models/task");
// const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById("5f3969dd93fe222dc4b2be91");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById("5f3969ad93fe222dc4b2be8f");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
