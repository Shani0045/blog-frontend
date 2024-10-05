import Header from "../header/Header"
import Footer from "../footer/Footer"

function Layout({children}) {
    return (
        <div className="wrapper">
          <Header/>
            {children}
          <Footer/>
        </div>
    )
  }
  
  export default Layout
