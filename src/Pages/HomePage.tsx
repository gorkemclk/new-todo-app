import { useState, useEffect } from "react";
import type { Task } from "../Interfaces/Task";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";

const STORAGE_KEY = "gorev-yonetici-tasks";

function loadTasksFromStorage(): Task[] {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
            return JSON.parse(data);
        }
    } catch (err) {
        console.error("LocalStorage okuma hatası:", err);
    }
    return [];
}

function saveTasksToStorage(tasks: Task[]) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (err) {
        console.error("LocalStorage yazma hatası:", err);
    }
}

function HomePage() {
    const [tasks, setTasks] = useState<Task[]>(() => loadTasksFromStorage());
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    useEffect(() => {
        saveTasksToStorage(tasks);
    }, [tasks]);

    // Ekleme islemi
    const handleAddTask = (taskData: Omit<Task, "id" | "createdAt" | "completed">) => {
        const newTask: Task = {
            ...taskData,
            id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTasks((prev) => [newTask, ...prev]);
    };

    // Guncelleme islemi
    const handleUpdateTask = (updatedTask: Task) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
        );
        setEditingTask(null);
    };

    // Silme islemi
    const handleDeleteTask = (id: string) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
        if (editingTask?.id === id) {
            setEditingTask(null);
        }
    };

    // Tamamlanma durumunu degistir
    const handleToggleComplete = (id: string) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        );
    };

    // Duzenleme modunu baslat
    const handleStartEdit = (task: Task) => {
        setEditingTask(task);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Duzenleme modunu iptal et
    const handleCancelEdit = () => {
        setEditingTask(null);
    };

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t) => t.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    return (
        <div className="max-w-3xl mx-auto px-5 py-6">
            {/* Header */}
            <div
                className="text-center mb-8 p-6 text-white rounded-xl"
                style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
            >
                <h1 className="text-3xl font-bold mb-2">📝 Görev Yöneticisi</h1>
                <p className="opacity-90">
                    Görevlerinizi kolayca ekleyin, düzenleyin ve yönetin.
                </p>
            </div>

            {/* Istatistik Kartlari */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-md p-5 text-center">
                    <div className="text-3xl font-bold" style={{ color: "#667eea" }}>
                        {totalTasks}
                    </div>
                    <div className="text-gray-500 text-sm mt-1">Toplam Görev</div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 text-center">
                    <div className="text-3xl font-bold text-green-500">
                        {completedTasks}
                    </div>
                    <div className="text-gray-500 text-sm mt-1">Tamamlanan</div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 text-center">
                    <div className="text-3xl font-bold text-yellow-500">
                        {pendingTasks}
                    </div>
                    <div className="text-gray-500 text-sm mt-1">Bekleyen</div>
                </div>
            </div>

            {/* Form */}
            <TaskForm
                onAddTask={handleAddTask}
                onUpdateTask={handleUpdateTask}
                editingTask={editingTask}
                onCancelEdit={handleCancelEdit}
            />

            {/* Gorev Listesi Basligi */}
            <div className="mb-4">
                <h2
                    className="text-xl font-semibold"
                    style={{ color: "#5b6abf" }}
                >
                    📋 Görevler ({totalTasks})
                </h2>
            </div>

            {/* Liste */}
            <TaskList
                tasks={tasks}
                onDelete={handleDeleteTask}
                onEdit={handleStartEdit}
                onToggleComplete={handleToggleComplete}
            />
        </div>
    );
}

export default HomePage;
