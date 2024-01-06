
import Dungeon from './assets/dungeon-fort.gif'
import Castle from './assets/castle-fort.gif'
import Conflux from './assets/conflux-fort.png'
import Cove from './assets/cove-fort.png'
import Fortress from './assets/fortress-fort.png'
import Tower from './assets/tower-fort.png'
import Stronghold from './assets/stronghold-fort.png'
import Rampart from './assets/rampart-fort.png'
import Necropolis from './assets/necropolis-fort.png'
import Inferno from './assets/inferno-fort.png'
import Factory from './assets/factory-fort.png'
import {useState} from 'react'
import SideBarButton from './SideBarButton'
import Body from './Body'


function SideBar(){
    
    const [currentImage, setCurrentImage] = useState(null)

    const castle = (Image) => {
        setCurrentImage(Image)
        console.log("castle")
        
    };

    const rampart = (Image) => {
        setCurrentImage(Image)
        console.log("rampart")
        
    };

    const tower = (Image) => {
        setCurrentImage(Image)
        console.log("tower")
        
    };

    const inferno = (Image) => {
        setCurrentImage(Image)
        console.log("inferno")
        
    };

    const necropolis = (Image) => {
        setCurrentImage(Image)
        console.log("necropolis")
        
    };

    const dungeon = (Image) => {
        setCurrentImage(Image)
        console.log("dungeon")
        
    };

    const stronghold = (Image) => {
        setCurrentImage(Image)
        console.log("stronghold")
        
    };

    const fortress = (Image) => {
        setCurrentImage(Image)
        console.log("fortress")
        
    };

    const conflux = (Image) => {
        setCurrentImage(Image)
        console.log("conflux")
        
    };

    const cove = (Image) => {
        setCurrentImage(Image)
        console.log("cove")
        
    };

    const factory = (Image) => {
        setCurrentImage(Image)
        console.log("factory")
        
    };

    return(
        <>
                <div class="sidebar">

                <SideBarButton onClick={() => castle(Castle)} class="castle-button sidebar-button"/>
            
                <SideBarButton onClick={() => rampart(Rampart)} class="rampart-button sidebar-button"/>

                <SideBarButton onClick={() => tower(Tower)} class="sidebar-button tower-button"/>
            
                <SideBarButton onClick={() => inferno(Inferno)} class="sidebar-button inferno-button"/>
            
                <SideBarButton onClick={() => necropolis(Necropolis)} class="sidebar-button necropolis-button"/>
            
                <SideBarButton onClick={() => dungeon(Dungeon)} class="sidebar-button dungeon-button"/>
            
                <SideBarButton onClick={() => stronghold(Stronghold)} class="sidebar-button stronghold-button"/>
    
                <SideBarButton onClick={() => fortress(Fortress)} class="sidebar-button fortress-button"/>
            
                <SideBarButton onClick={() => conflux(Conflux)} class="sidebar-button conflux-button"/>
            
                <SideBarButton onClick={() => cove(Cove)} class="sidebar-button cove-button"/>

                <SideBarButton onClick={() => factory(Factory)} class="sidebar-button factory-button"/>
            
        </div>

        <Body  setcurrentImage={setCurrentImage} currentImage={currentImage}/>

        </>

    );
}
export default SideBar