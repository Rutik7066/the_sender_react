import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const app = initializeApp({
  apiKey: "AIzaSyAA236w4KDzONa3hKpmAoIrafNA_8cSyjU",
  authDomain: "thesender-6d3a3.firebaseapp.com",
  projectId: "thesender-6d3a3",
  storageBucket: "thesender-6d3a3.appspot.com",
  messagingSenderId: "202665284161",
  appId: "1:202665284161:web:7b6383eb20aa16c80becc0",
  measurementId: "G-TMBZSZ36FT"
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


