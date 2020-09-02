require("../src/db/mongoose");

const Task = require("../src/models/task");

// Task.findByIdAndDelete("5f2c56321209ac30f8a3d363")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5f2c2d08f5044e32e83a1447")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
