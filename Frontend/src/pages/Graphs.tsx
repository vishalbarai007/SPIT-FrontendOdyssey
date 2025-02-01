import { SidebarDemo } from "../components/AceternityComponents/main/SideBar"
import { TabsDemo } from "../components/AceternityComponents/main/Tabs"

const Graphs = () => {
  return (
    <div className="h-screen w-full p-10">
      <SidebarDemo/>
      <h1 className="text-center text-5xl text-white font-extrabold">Graphs</h1>
        <TabsDemo/>
      
    </div>
  )
}

export default Graphs
