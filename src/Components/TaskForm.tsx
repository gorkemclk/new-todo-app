import { useState, useEffect } from "react";
import type { Task } from "../Interfaces/Task";

interface TaskFormProps {
    onAddTask: (task: Omit<Task, "id" | "createdAt" | "completed">) => void;
    onUpdateTask: (task: Task) => void;
    editingTask: Task | null;
    onCancelEdit: () => void;
}

function TaskForm({ onAddTask, onUpdateTask, editingTask, onCancelEdit }: TaskFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<"dusuk" | "orta" | "yuksek">("orta");

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description);
            setPriority(editingTask.priority);
        } else {
            setTitle("");
            setDescription("");
            setPriority("orta");
        }
    }, [editingTask]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) {
            alert("Görev başlığı boş olamaz!");
            return;
        }

        if (editingTask) {
            onUpdateTask({
                ...editingTask,
                title: title.trim(),
                description: description.trim(),
                priority,
            });
        } else {
            onAddTask({
                title: title.trim(),
                description: description.trim(),
                priority,
            });
        }

        setTitle("");
        setDescription("");
        setPriority("orta");
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4" style={{ color: "#5b6abf" }}>
                {editingTask ? "✏️ Görevi Düzenle" : "➕ Yeni Görev Ekle"}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Görev Başlığı
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Görev başlığını girin..."
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-indigo-400 transition-colors"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Açıklama
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Görev açıklamasını girin..."
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-indigo-400 transition-colors resize-vertical"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                        Öncelik
                    </label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value as "dusuk" | "orta" | "yuksek")}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-indigo-400 transition-colors bg-white"
                    >
                        <option value="dusuk">🟢 Düşük</option>
                        <option value="orta">🟡 Orta</option>
                        <option value="yuksek">🔴 Yüksek</option>
                    </select>
                </div>
                <div className="flex gap-3">
                    <button
                        type="submit"
                        className="px-6 py-3 text-white rounded-lg text-base cursor-pointer font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
                    >
                        {editingTask ? "Kaydet" : "Ekle"}
                    </button>
                    {editingTask && (
                        <button
                            type="button"
                            onClick={onCancelEdit}
                            className="px-6 py-3 bg-gray-400 text-white rounded-lg text-base cursor-pointer font-medium transition-all hover:bg-gray-500"
                        >
                            İptal
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default TaskForm;
