import mongoose from 'mongoose';
import Note from "../model/Note.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    if (notes.length === 0) {
      return res.status(204).json({
        success: true,
        data: null,
        message: "No content available",
      });
    }

    res.status(200).json({
      success: true,
      data: notes,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const getSingleNote = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid note ID",
      });
    }
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(400).json({
        success: false,
        error: "No note found",
      });
    }
    res.status(200).json({
      success:true,
      data:note,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json({
      success: true,
      data: note,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const updateNote = async (req, res) => {
  try {
     // Validate ObjectId
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid note ID",
      });
    }
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "No note found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedNote,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
     // Validate ObjectId
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid note ID",
      });
    }
    const existingNote = await Note.findByIdAndDelete(req.params.id);
    if (!existingNote) {
      return res.status(400).json({
        success: false,
        message: "No note found",
      });
    }
    res.status(200).json({
      success:true,
      data:{},
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      error:error.message,
    })
  }
};
