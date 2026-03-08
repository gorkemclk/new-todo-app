import type { Task } from "../Interfaces/Task";
import TaskCard from "./TaskCard";

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: string) => void;
    onEdit: (task: Task) => void;
    onToggleComplete: (id: string) => void;
}

function TaskList({ tasks, onDelete, onEdit, onToggleComplete }: TaskListProps) {
    if (tasks.length === 0) {
        return (
            <div className="text-center py-12 text-gray-400">
                <div className="text-5xl mb-4">📋</div>
                <p className="text-lg">Henüz görev eklenmemiş.</p>
                <p className="text-sm mt-1">Yukarıdaki formu kullanarak yeni bir görev ekleyebilirsiniz.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </div>
    );
}

export default TaskList;
