export function getAllNotes(req,res){
    res.status(200).send("You have 10 notes")
}; 

export function createNote(req,res){
    res.status(201).json({ message: "Note created successfully!"})
}; 
export function updatreNote(req,res){
    res.status(201).json({ message: "Note updated successfully!"})
}; 
export function deleteNote(req,res){
    res.status(201).json({ message: "Note delete successfully!"})
}; 

