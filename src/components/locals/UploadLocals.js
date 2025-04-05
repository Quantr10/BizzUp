import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';
import LocalsData from '../locals/LocalsData';
import { useEffect } from 'react';

const UploadLocals = () => {
  useEffect(() => {
    const uploadData = async () => {
      try {
        const localsRef = collection(db, 'Locals');

        for (const local of LocalsData) {
          await addDoc(localsRef, local);
          console.log(`Uploaded: ${local.name}`);
        }

        console.log("All data uploaded successfully!");
      } catch (error) {
        console.error("Error uploading data: ", error);
      }
    };

    uploadData();
  }, []);

  return <div>Uploading LocalsData to Firestore... Check console logs.</div>;
};

export default UploadLocals;
