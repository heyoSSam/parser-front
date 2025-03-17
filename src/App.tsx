import './App.css'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Dropfile from "@/components/dropfile"


function App() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <div className="my-3">
          <Select>
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
          <Dropfile/>
        </div>

        <div className="my-3">
          <Button>Parse</Button> 
        </div>
      </div>
    </>
  )
}

export default App
