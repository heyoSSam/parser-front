import './App.css'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div>
          <Button>Click here</Button> 
        </div>

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
      </div>
    </>
  )
}

export default App
