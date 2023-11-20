
import DungeonUpgrade from './assets/dungeon-fort-upgrade.gif'
import Dungeon from './assets/dungeon-fort.gif'
import CastleUpgrade from './assets/castle-fort-upgrade.png'
import Castle from './assets/castle-fort.gif'
import Inferno from './assets/inferno-fort.png'
import InfernoUpgrade from './assets/inferno-fort-upgrade.png'
import Necropolis from './assets/necropolis-fort.png'
import NecropolisUpgrade from './assets/necropolis-fort-upgrade.png'
import Rampart from './assets/rampart-fort.png'
import RampartUpgrade from './assets/rampart-fort-upgrade.png'
import Stronghold from './assets/stronghold-fort.png'
import StrongholdUpgrade from './assets/stronghold-fort-upgrade.png'
import Tower from './assets/tower-fort.png'
import TowerUpgrade from './assets/tower-fort-upgrade.png'
import Fortress from './assets/fortress-fort.png'
import FortressUpgrade from './assets/fortress-fort-upgrade.png'
import Cove from './assets/cove-fort.png'
import CoveUpgrade from './assets/cove-fort-upgrade.png'
import Conflux from './assets/conflux-fort.png'
import ConfluxUpgrade from './assets/conflux-fort-upgrade.png'


function Body({setcurrentImage, currentImage}){


    let bodyImage=currentImage;


    const changeImage = () => {

        switch(bodyImage){
            case Castle: setcurrentImage(CastleUpgrade); break;
            case Rampart: setcurrentImage(RampartUpgrade); break;
            case Tower: setcurrentImage(TowerUpgrade); break;
            case Inferno: setcurrentImage(InfernoUpgrade); break;
            case Necropolis: setcurrentImage(NecropolisUpgrade); break;
            case Dungeon: setcurrentImage(DungeonUpgrade); break;
            case Stronghold: setcurrentImage(StrongholdUpgrade); break;
            case Fortress: setcurrentImage(FortressUpgrade); break;
            case Conflux: setcurrentImage(ConfluxUpgrade); break;
            case Cove: setcurrentImage(CoveUpgrade); break;

        }

    }

    return(
          
        <div class="body">

            <button onClick={changeImage} class="upgrade-button"></button>
            <img src={bodyImage} class="body-image" id="image"></img>
                
        </div>
  

    );  
}
export default Body