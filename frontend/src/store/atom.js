
// export const networkCount = atom({
//      key: "networkCount",
//      default: 12
// })

import axios from "axios";
import { atom, selector } from "recoil";


// export const networkCount  = atom({
//     key: "networkCount",
//     default: 103
// })

// export const messageCount = atom({
//     key: "messageCount",
//     default: 12
// })

// export const notificationCount= atom({
//     key: "notificationCount",
//     default: 188
// })



export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            try {
                const res = await axios.get("http://localhost:8080/notification");
                return res.data;
            } catch (error) {
                console.error('Error fetching notifications:', error);
                throw error;
            }
        } 
    })
});


  

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
       const allNotifications = get(notifications);

       return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messaging;

     }
 })

// export const totalNotificationSelector = selector({
//      key: "totalNotificationSelector",
//      get: ({get}) => {
//          const totalNetworkCount = get(networkCount)
//          const totalMessageCount = get(messageCount)
//          const totalNotificationnCount = get(notificationCount)

//          return totalNetworkCount + totalMessageCount + totalNotificationnCount;       
         
//      }
// })