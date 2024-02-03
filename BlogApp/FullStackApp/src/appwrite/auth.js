// start appwrite auth service
import conf from "../Conf/Conf";


export class AuthService {


      constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteId)
        this.account=new Account(this.client)
      }
      async CreateAccount({password,email,name}){
        try {
            const UserAccount = await this.account.create(ID.unique(),email,password,name)
            if (UserAccount) {
                return this.login({email,password})
            }
            else
            {
                return console.log('account not created')
            }
        } catch (error) {
            throw error
        }
      }
      async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
      }
      async  getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        console.log("Appwrite service :: getCurrentUser()::",error) 
        }
      }
      async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
            console.log("Appwrite service :: logout()::",error) 
        }
      }
}


const authService=new AuthService()
export default authService
/* advantage of exporting this object is at any  point of time constructor is invoked 
my endpoints are successfully created and eventually since it is an object it can access 
all class objects life is much more easier in this way 
*/

// import { Client, Account } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('5df5acd0d48c2')                 // Your project ID

// const account = new Account(client);