import { useDeleteTodos, useEditTodos } from "../api/react-query";

export const Todo = ({ todo, deleteExistingTodo, editExistingTodo }) => {
  const { mutate : deleteMutate, isPending : isDeletePending } = useDeleteTodos();
  const { mutate : editMutate, isPending : isEditPending } = useEditTodos();
  return (
    <div className="flex items-center">
      <input
        checked={todo.done}
        type="checkbox"
        onChange={(e) => editMutate({ ...todo, done: e.target.checked })}
      />
      <span className="flex-grow">{todo.task}</span>
      <button
        onClick={() => deleteMutate(todo)}
        className="color-danger"
        disabled={isDeletePending}
      >
        {isDeletePending? 'Deleting' : 'Delete'}
      </button>
    </div>
  );
};
