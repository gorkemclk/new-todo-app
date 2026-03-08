export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    priority: "dusuk" | "orta" | "yuksek";
    createdAt: string;
}
