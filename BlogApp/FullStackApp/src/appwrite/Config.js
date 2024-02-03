import { Service } from "appwrite/types/service";
import conf from "../Conf/Conf";
import { Client, Databases,Storage,Query,ID } from "appwrite";


export class service{
    client   =   new Client()
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteId)
        this.account=new Databases(this.client)
        this.account=new Storage(this.client)
      }
      async getPost(slug){
              try {
                return await this.databases.getDocument(conf.appwriteCollectoin,conf.appwriteDbId,slug)
              } catch (error) {
                throw error
                console.log("appwrite service :: getPost()" , error)
              }
      }
      async getPosts(quaries=[Query.equal("status","active")]){
          try {
            return await this.databases.listDocuments(conf.appwriteDbId,appwriteCollectoin,quaries)
            
        } catch (error) {
            throw error
            console.log("appwrite service :: getPosts()" , error)
        }
      }
      async CreatePost({Title,Content,Slug,FeaturedIamge,Status,UserId}){
        try {
            return await this.databases.createDocument(conf.appwriteDbId,conf.appwriteCollectoin,Slug
                
                ,{
                  Title,Content ,FeaturedIamge,UserId,Status,Content
                }
        )

        } catch (error) {
            throw error 
            console.log("appwrite service :: CreatePost()")
        }
      }
      async updatePost(slug,{Title,FeaturedIamge,Status,Content}){
        try {
                 return await this.databases.updateDocument(conf.appwriteDbId,conf.appwriteCollectoin,slug
                  ,
                  {
                    Title,Content ,FeaturedIamge,Status,Content
                  }
                  )
        } catch (error) {
          throw error
          console.log("appwrite service :: updatePost()")
        }
      }

      async deletePost(slug){
        try {
                  await this.databases.deleteDocument(conf.appwriteDbId,conf.appwriteCollectoin,slug)
                 return true
        } 
        
        
        catch (error) {
          throw error
          console.log("appwrite service :: deletePost()")
          return false
        }
      }

      async uploadFile(file){

        try {
          return await this.bucket.crateFile(conf.appwriteBucketId,
            
            ID.unique(),file
            )
          
        } catch (error) {
          throw error
          
          console.log("appwrite service :: uploadFile()")
        }
      }

      async deleteFile(fieldid){

        try {
          return await this.bucket.deleteFile(conf.appwriteBucketId,
          fieldid)  
          } catch (error) {
          throw error
          
          console.log("appwrite service :: deleteFile()")
        }
      }

      async getpreviewFile(fileid){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileid).href

      }




}
const service=new Service()
export default service


// const client = new Client();

// const databases = new Databases(client);

// client
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('5df5acd0d48c2') // Your project ID
// ;