import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateRoom } from './pages/create-room'
import { RecordRoomAudio } from './pages/create-room-audio'
import { Room } from './pages/room'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/*propriedade index define a rota como a primeira ao acessar o app*/}
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:roomId" />
          <Route element={<RecordRoomAudio />} path="/room/:roomId/audio" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
