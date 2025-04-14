import Header from './header'
import Footer from './footer'
import { ModalContextProvider } from './modal/context'
 

export default function Layout({ children }: any) {
  return (
    <div className="layout">
      <Header />

      <ModalContextProvider>
        <main className="layout__c">
          { children } 
        </main>
      </ModalContextProvider>

      <Footer />
    </div>
    )
}