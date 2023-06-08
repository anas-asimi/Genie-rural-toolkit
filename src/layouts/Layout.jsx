import Header from '../components/Header'
import { Outlet } from "react-router-dom";
import { Spacer } from "@chakra-ui/react";
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Spacer />
      <Footer />
    </>
  )
}
