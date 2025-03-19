import { useState } from "react";
import './App.css';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Dropfile from "@/components/dropfile";

function App() {
  const [format, setFormat] = useState(""); // Store format selection

  const handleFormatChange = (value: any) => setFormat(value);

  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <div className="my-3">
          <Select onValueChange={handleFormatChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CSV">CSV</SelectItem>
              <SelectItem value="MSSQL">MSSQL</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="my-3">
          <Dropfile format={format} />
        </div>
      </div>
    </>
  );
}

export default App;
