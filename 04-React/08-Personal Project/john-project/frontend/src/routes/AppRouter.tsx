import { Routes, Route } from "react-router-dom"
import { HistoriesPage } from "../pages/Histories/index"
import { TasksPage } from "../pages/Tasks/index"

export const AppRouter = () => {
    return <Routes>
    <Route path="/" element={<>Home</>} />
    <Route path="/tasks" element={<TasksPage />} />
    <Route path="/history" element={<HistoriesPage />} />
  </Routes>
}