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
      <div className="h-screen flex flex-col items-center justify-center">
        <div>
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
        <div>
          <Dropfile/>
        </div>
        <div>
          <Button>Parse</Button> 
        </div>
      </div>
    </>
  )
}

export default App
