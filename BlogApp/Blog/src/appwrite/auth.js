import { Client, ID, Account } from 'appwrite';
import conf from '../Conf/conf';

export class Authservice {
  client = new Client();
  account;
  constructor() {
    // constructor works with this
    this.client // information about client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteId); // project id
    this.account = new Account(this.client); // jis client ny call kya hai  this.client
  }

  // untill account  created  we does not want to move further that is way i am using async
  // in promise we can do onther stuff simultaniously
  async createAccount(
    { email, password, name }, // destructured values of the passing object those are required us to create account
  ) {
    // method can be crashed that's way used try catch
    // eslint-disable-next-line no-useless-catch
    try {
      // prototype --> this.account.create("user-id",destructured obj)
      const CreateAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      ); // we passed dynamic values instead of harcord values like usman@gmail,3424,usman
      // unique id for each user
      // Account(client) client was created now use vari (this.account)  to create account
      if (CreateAccount) {
        // if sign up process is completed then
        return this.login({ email, password }); // yahi sy pass ho jayen gy sign up hony k baad
      }
    } catch (error) {
      throw error;
    }
  }
  // isko ham required values den gy oor ye khudi behind the scene appwrite men kam kry ga
  // nechy wala bhi same emailsession mean session comes to begin
  async login({ email, password }) {
    // eslint-disable-next-line no-useless-catch
    try {
      // return responsible for creating session
      return await this.account.createEmailsession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getUser() {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.get(); // sab kuch account k pass hai bhai log in users ki baat ho rahi hai
    } catch (error) {
      throw error;
    }
  }
  async logout() {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.account.deleteSessions(); //end sessions of one id from all browser
    } catch (error) {
      throw error;
    }
  }
}
const authservice = new Authservice(); // mistakes missed new and Authservice missed ();
export default authservice; // wherever this class will be used there must  be --->const authservice=Authservice
// so preventing from this repitation we will export object
