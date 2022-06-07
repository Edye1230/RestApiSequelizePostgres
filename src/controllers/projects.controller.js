import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    //throw new Error('query failed');
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id,
      },
    });

    if (!project)
      return res.status(404).json({ message: "El proyecto no existe" });

    res.json(project);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createProject = async (req, res) => {
  const { nombre, prioridad, descripcion } = req.body;
  try {
    const newProject = await Project.create({
      nombre,
      descripcion,
      prioridad,
    });

    res.json(newProject);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, prioridad, descripcion } = req.body;
    const project = await Project.findByPk(id);
    project.nombre = nombre;
    project.prioridad = prioridad;
    project.descripcion = descripcion;
    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getProjectTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findAll({where: {projectId: id}});
    res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
