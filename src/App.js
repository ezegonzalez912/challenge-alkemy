import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { AuthProvider } from './context/auth/AuthContext';
import { HeroesProvider } from './context/heroes/HeroesContext';
import { ModalProvider } from './context/modal/ModalContext';

export const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <HeroesProvider>
          <ModalProvider>
            <AppRouter />
          </ModalProvider>
        </HeroesProvider>
      </AuthProvider>
    </div>
  )
}
