const conf = {
  appwriteUrl: String(import.meta.env.VITE_REACT_APPWRITE_URL),
  appwriteId: String(import.meta.env.VITE_REACT_APPWRITE_RPOJECT_ID),
  appwriteDbId: String(import.meta.env.VITE_REACT_APPWRITE_DB_ID),
  appwriteCollectionId: String(
    import.meta.env.VITE_REACT_APPWRITE_COLLECTION_ID,
  ),
  appwriteBucketId: String(import.meta.env.VITE_REACT_APPWRITE_BUCKET_ID),
};

export default conf;
// in .env file you need to add VITE with each name and also import using import.meta.complete name
//  wherever you want to import
// must convert into sting broooooo otherwise you fell down in hell
