// create 1 note
// get all notes
// delete a note
// edit a note
// delete all notes
// get 1 note

import { insertDb } from "./db.js";

export const createNote = async (content, tags) => {
  const formattedNote = {
    id: Date.now(),
    title: content,
    tags: tags,
  };
  console.log("content......", content, "\n", "tags.......");
  const result = await insertDb(formattedNote);
  return formattedNote;
};
