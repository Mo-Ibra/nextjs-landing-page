import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Steps from '../sections/steps/Steps';
import Traffic from '../sections/traffic/Traffic';
import Testimonials from '../sections/testimonials/Testimonials';
import Team from '../sections/team/Team';
import Plans from '../sections/plans/Plans';
import News from '../sections/news/News';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='description' content='Landing Page with React And Nextjs' />
        <title>Next Js | Landing Page</title>
      </Head>
      <Navbar />
      <Header />
      <Steps />
      <Traffic />
      <Testimonials />
      <Team />
      <Plans />
      <News />
      <Footer />
    </>
  )
}

export default Home;