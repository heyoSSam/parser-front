import { useState } from "react";
import "./App.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Dropfile from "@/components/dropfile";

const documents = {
  "T2200000002": "КОММЕНТАРИЙ К КОДЕКСУ РЕСПУБЛИКИ КАЗАХСТАН \"О НЕДРАХ И НЕДРОПОЛЬЗОВАНИИ\"",
  "K030000481_": "Водный кодекс Республики Казахстан",
  "K1400000234": "Уголовно-исполнительный кодекс Республики Казахстан",
  "K030000477_": "Лесной кодекс Республики Казахстан",
  "K940001000_": "О недрах и недропользовании",
  "K080000095_": "Гражданский кодекс Республики Казахстан",
  "K1700000125": "Бюджетный кодекс Республики Казахстан",
  "K1500000414": "Земельный кодекс Республики Казахстан",
  "K030000442_": "О налогах и других обязательных платежах в бюджет (Налоговый кодекс)",
  "K1700000120": "О таможенном регулировании в Республике Казахстан",
  "K1700000123": "СОЦИАЛЬНЫЙ КОДЕКС РЕСПУБЛИКИ КАЗАХСТАН",
  "K2300000224": "Трудовой кодекс Республики Казахстан",
  "K1100000518": "О браке (супружестве) и семье",
  "K1500000375": "Предпринимательский кодекс Республики Казахстан",
  "K1400000226": "Уголовный кодекс Республики Казахстан",
  "K1400000231": "Уголовно-процессуальный кодекс Республики Казахстан",
  "K1500000377": "Гражданский процессуальный кодекс Республики Казахстан",
  "K990000409_": "Гражданский кодекс Республики Казахстан (Особенная часть)",
  "K2000000350": "АДМИНИСТРАТИВНЫЙ ПРОЦЕДУРНО-ПРОЦЕССУАЛЬНЫЙ КОДЕКС РЕСПУБЛИКИ КАЗАХСТАН",
  "K2000000360": "О ЗДОРОВЬЕ НАРОДА И СИСТЕМЕ ЗДРАВООХРАНЕНИЯ",
  "K1400000235": "ЭКОЛОГИЧЕСКИЙ КОДЕКС РЕСПУБЛИКИ КАЗАХСТАН",
  "K2100000400": "Об административных правонарушениях",
};

function App() {
  const [docno, setSelectedId] = useState("");
  const [format, setFormat] = useState("");
  
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <Select onValueChange={setSelectedId}>
        <SelectTrigger className="w-[300px]">
          <SelectValue placeholder="Выберите документ" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(documents).map(([id, title]) => (
            <SelectItem key={id} value={id}>{title}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Select onValueChange={setFormat}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Формат" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="CSV">CSV</SelectItem>
          <SelectItem value="SQL">SQL</SelectItem>
        </SelectContent>
      </Select>

      <Dropfile format={format} docno={docno} />
    </div>
  );
}

export default App;