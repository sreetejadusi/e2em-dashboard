import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-gray-50 w-64 p-4 text-black">
          <nav>
            <ul className="space-y-4">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">Settings</li>
              <li className="hover:text-black cursor-pointer">About</li>
            </ul>
          </nav>
        </aside>
        <main className="flex flex-col w-full">
          <h1 className="text-5xl font-bold bg-gray-50 text-black">Dashboard</h1>
          {/* Main Content Area */}
          <div className="flex-1 grid grid-cols-2 gap-4 py-6 bg-gray-50">
            <div className="bg-white shadow rounded p-6 flex items-center justify-center">
              Borrowers by State
            </div>
            <div className="bg-white shadow rounded p-6 flex items-center justify-center">
              Map Preview
            </div>
            <div className="bg-white shadow rounded p-6 flex items-center justify-center">
              Details
            </div>
            <div className="bg-white shadow rounded p-6 flex items-center justify-center">
              New Request Trend
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
