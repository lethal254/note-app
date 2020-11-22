import { v4 as uuid } from 'uuid';

export const AddNotes = ({ description = "", note = "" }) => ({
  type: "ADD_NOTES",
  note: {
    id:uuid(),
    description,
    note,
  },
});
export const RemoveNotes = (id) =>({
  type:"REMOVE_NOTE",
  id,
})

export const EditNotes = (id, changes)=>({
  type:"EDIT_NOTE",
  changes,
})
