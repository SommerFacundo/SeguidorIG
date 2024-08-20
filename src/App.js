import logo from './logo.svg';
import { Navbar } from './components/Navbar/Navbar';
import { FirstSection } from './components/firstSection/FirstSection';
import "./App.css"
import { useEffect, useState } from 'react';
import { LoadArchiveSection } from './components/LoadArchivesSection/LoadArchiveSection';
import { CompareSeguidor } from './components/compararSeguidosSeguidores/compareSeguidor';
import { NavbarMobile } from './components/NavbarMobile/NavbarMobile';
function App() {
  const [mobile,setModeMobile] = useState(false);

  const [start,setStart] = useState(false);
  const [archiveProccess,setArchiveProcess] = useState(false);
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [showModal,setShowModal] = useState(false);
  const [noFollowing,setNoFollowing] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setModeMobile(true);
      } else {
        setModeMobile(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=>{
    if(followings.length > 0){
      setArchiveProcess(true);
    }

  },[followings,followers])
  return (
    <div className="App">
      {mobile ?
        <NavbarMobile/>
        :
        <Navbar/>
      }
        <FirstSection start={start} setStart={setStart}/>
        {start && 
          <LoadArchiveSection followers={followers} setFollowers={setFollowers} followings={followings} setFollowings={setFollowings} showModal={showModal} setShowModal={setShowModal}/>
          
          } 
          {start && archiveProccess && 
          <CompareSeguidor
           followers={followers}
            following={followings} 
            showModal={showModal} 
            setShowModal={setShowModal} 
            noFollower={noFollowing}
            setNoFollowing={setNoFollowing}/>
          }
    </div>
  );
}

export default App;
