import type { Task } from "../Interfaces/Task";

interface TaskCardProps {
    task: Task;
    onDelete: (id: string) => void;
    onEdit: (task: Task) => void;
    onToggleComplete: (id: string) => void;
}

function TaskCard({ task, onDelete, onEdit, onToggleComplete }: TaskCardProps) {
    const priorityColors: Record<string, string> = {
        dusuk: "#22c55e",
        orta: "#eab308",
        yuksek: "#ef4444",
    };

    const priorityLabels: Record<string, string> = {
        dusuk: "Düşük",
        orta: "Orta",
        yuksek: "Yüksek",
    };

    const handleDelete = () => {
        const confirmed = window.confirm(
            `"${task.title}" görevini silmek istediğinize emin misiniz?`
        );
        if (confirmed) {
            onDelete(task.id);
        }
    };

    const formattedDate = new Date(task.createdAt).toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div
            className={`bg-white rounded-xl shadow-md p-5 flex justify-between items-center transition-transform hover:translate-x-1 ${task.completed ? "opacity-60" : ""
                }`}
            style={{ borderLeft: `4px solid ${priorityColors[task.priority]}` }}
        >
            <div className="flex items-start gap-3 flex-1">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                    className="mt-1.5 w-5 h-5 cursor-pointer accent-indigo-500"
                />
                <div>
                    <h3
                        className={`text-lg font-semibold mb-1 ${task.completed ? "line-through text-gray-400" : "text-indigo-500"
                            }`}
                    >
                        {task.title}
                    </h3>
                    {task.description && (
                        <p className="text-gray-500 text-sm mb-2">{task.description}</p>
                    )}
                    <div className="flex gap-3 items-center text-xs text-gray-400">
                        <span
                            className="px-2 py-0.5 rounded-full text-white font-medium"
                            style={{ backgroundColor: priorityColors[task.priority] }}
                        >
                            {priorityLabels[task.priority]}
                        </span>
                        <span>📅 {formattedDate}</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 ml-4">
                <button
                    onClick={() => onEdit(task)}
                    className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg text-sm font-medium cursor-pointer transition-colors hover:bg-indigo-200"
                >
                    Düzenle
                </button>
                <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium cursor-pointer transition-colors hover:bg-red-600"
                >
                    Sil
                </button>
            </div>
        </div>
    );
}

export default TaskCard;
