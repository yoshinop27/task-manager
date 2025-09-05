export const getAllNotes = (req,res) => {
    res.send('you got 5 notes')}
export const createNote = (req, res) => {
    res.status(201).json({message:"Post updated successfully!"})}
export const updateNote = (req, res) => {
    res.status(200).json({message:"Post updated successfully!"})}
export const deleteNote = (req, res) => {
    res.status(200).json({message:"Post updated successfully!"})}