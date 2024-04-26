import { useEffect, useMemo, useState } from 'react'
// import axios from 'axios';
import './App.css'
import {useRecoilValue, RecoilRoot, useRecoilState} from 'recoil'
import {totalNotificationSelector , notifications} from './store/atom';0


function App() {
   
return  <>
       <RecoilRoot>
       <LinkedinHeader />
       </RecoilRoot> 
 
 </>
   
 
}



function LinkedinHeader(){
  
 
  // const[ totalnetworkCount , settotalnetworkCount] = useRecoilState(networkCount)
  // const totalMessageCount  = useRecoilValue(messageCount)
  // const totalNotificationCount = useRecoilValue(notificationCount);

  // const overAllCount = useRecoilValue(totalNotificationSelector);


const networkCount = useRecoilValue(notifications)

   





  return <div>

       <button>Home</button>
        <button>My Network ({networkCount.network >= 100 ? "99+" : networkCount.network })</button>
        <button>Job ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>notifications ({networkCount.notifications >= 100 ? "99+" : networkCount.notifications})</button>
      {/* <button>Me* ({totalNotificationCount})</button> */}
  </div>

}




export default App
