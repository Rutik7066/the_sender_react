import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const app = initializeApp({
  apiKey: "AIzaSyCAxgIxxwonb9KDsnl14anK4D40VSHq3TI",
  authDomain: "thesender-f9515.firebaseapp.com",
  projectId: "thesender-f9515",
  storageBucket: "thesender-f9515.appspot.com",
  messagingSenderId: "847096843210",
  appId: "1:847096843210:web:e6a58bd0e856ae1be55d33",
  measurementId: "G-68LMG5SZMH",
});
export const auth = getAuth(app);
export const store = getFirestore(app);
export const storage = getStorage(app);

export async function addCampaignToFirebase(
  title,
  attachment,
  message,
  contact,
  delay
) {
  const attachmentUrl = [];
  attachment.forEach(async (element) => {
    const path = `${auth.currentUser.email}/${title}/${element.name}`;
    const bucketRef = ref(storage, path);
    await uploadBytes(bucketRef, element);
    const url = await getDownloadURL(bucketRef);
    attachmentUrl.push({ name: element.name, url: url });
  });
  const conpath = `${auth.currentUser.email}/${title}/${contact.name}`;
  const conRef = ref(storage, conpath);
  await uploadBytes(conRef, contact);
  const contactUrl = await getDownloadURL(conRef);
  await setDoc(doc(store, "user", auth.currentUser.email, "camp", title), {
    title: title,
    message: message,
    contacturl: contactUrl,
    attachment: attachmentUrl,
    created: new Date(),
    status: "Submited",
    delay: delay,
  });
}




// {
//     id: 1,
//     title: "Offer",
//     datecreated: "01/01/2022",
//     sheduleddate: "01/12/2022",
//     status: "pending",
//     report : "link"
//   },


