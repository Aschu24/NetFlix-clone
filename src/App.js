
import './App.css';
import Bunner from './Bunner';
import Footer from './Footer';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Bunner />
      <Row Title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row Title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row Title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies}/>
      <Row Title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row Title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row Title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row Title="Romance Movies " fetchUrl={requests.fetchRomanceMovies}/>
      <Row Title="Documentary Movies" fetchUrl={requests.fetchDocumentaryMovies}/>
      <Footer />
    </div>
  );
}

export default App;
