import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    //throw new Error('query failed');
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      where: {
        id,
      },
    });

    if (!task)
      return res.status(404).json({ message: "La tarea no existe" });

    res.json(task);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createTask = async (req, res) => {
  const { nombre, done, projectId } = req.body;
  try {
    const newTask = await Task.create({
      nombre,
      done,
      projectId
    });

    res.json(newTask);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, done, projectId } = req.body;
    const task = await Task.findByPk(id);
    task.nombre = nombre;
    task.done = done;
    task.projectId = projectId;
    await task.save();
    res.json(task);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
