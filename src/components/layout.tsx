import Header from './header'
import Footer from './footer'
import { ModalContextProvider } from './modal/context'
 

export default function Layout({ children, showHeaderMenu }: { children: any, showHeaderMenu?: boolean }) {
  return (
    <div className="layout">
      <Header showHeaderMenu={showHeaderMenu} />

      <ModalContextProvider>
        <main className="layout__c">
          { children } 
        </main>
      </ModalContextProvider>

      <Footer />
    </div>
    )
}