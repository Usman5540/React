/* eslint-disable no-unused-vars */
import { Databases, Client, Storage, ID, Query } from 'appwrite';
import conf from '../Conf/conf';

export class Service {
  // create client
  client = new Client(); // client creates without type
  databases;
  storage;
  // instead making endpoints for each we will create constructor to perform all work once
  constructor() { // when ever object of this class wil created constructor will create database
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteId);
    this.storage = new Storage(this.client);
    this.databases = new Databases(this.client); // i think so this client is passed to appwrite ohhh to create databases
  } // here above i created database object in appwrite
  // everthing will pass through using ui and appwrite behind the secne will handle this
  async createPost({ title, content, status, featuredimage, usrid,slug }) {
    // eslint-disable-next-line no-useless-catch
    try {
      // using db object i call createdocument method to create post in appwrite
      return await this.databases.createDocument(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        slug,

        {
          status,
          featuredimage,
          title,
          content,
          usrid,
        },
      );
      // using documentation
    } catch (error) {
      throw error;
    }
  }
  async updatePost(slug, { title, content, status, featuredimage }) {
    // i took one risk hare let us see ---> did not used slug
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.databases.updateDocument(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        slug,

        {
          content,
          title,
          featuredimage,
          status,
        },
        // attributes which we want to change
      );
    } catch (error) {
      throw error;
    }
  }
  async deletePost() { // perameters area
    // eslint-disable-next-line no-useless-catch
    try {
      // purpose to create async instead of promise is that we will wait untill this process of deletion completed
      // or any other process . await will wait until deletion of the post and then will return the result
      await this.databases.deleteDocument(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        ID.unique(),
      );
      return true; //successfully deleted
    } catch (error) {
      throw error;
    }
  }
  async getonePost(slug) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.databases.getDocument(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        slug,
      );
    } catch (error) {
      throw error;
    }
  }
  async getPosts(
    queries = [Query.equal[('status', 'active')]], //parameters ---> give me all posts those have active status ---> status i basically a key
  ) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.databases.listDocuments(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      throw error;
    }
  }

  // upload file

  async createFile(file) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      throw error;
    }
  }
  async getfile(fileid) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.storage.getFile(conf.appwriteBucketId, fileid);
    } catch (error) {
      throw error;
    }
  }
  async updatefile(fileid) {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.storage.updateFile(conf.appwriteBucketId, fileid);
    } catch (error) {
      throw error;
    }
  }
  async deletefile(fileid) {
    // eslint-disable-next-line no-useless-catch
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileid);
      return true;
    } catch (error) {
      throw error;
    }
  }
  getfilepreview(fileid) {
    // eslint-disable-next-line no-useless-catch
    try {
      return this.storage.getFilePreview(conf.appwriteBucketId, fileid);
    } catch (error) {
      throw error;
    }
  }
}
const service = new Service();
export default service; // as we know now we can access all methods of  Service class by using objects
/* 

tell me the difference between file and post in the context of appwrite
ChatGPT
In the context of Appwrite, "file" and "post" represent different types of data entities, typically used in content management or similar systems. Here's a breakdown of the differences between the two:

File:

In Appwrite, a "file" typically refers to any binary data uploaded to the Appwrite server, such as images, documents, videos, etc.
Files are often used to store media assets or other types of documents that need to be stored and managed.
Appwrite provides functionality for uploading, managing, and manipulating files, including features like uploading files, retrieving file metadata, and deleting files.
Post:

A "post" is a higher-level concept typically used in content management systems or blogging platforms.
It represents a piece of content, such as an article, blog post, forum post, etc., along with its associated metadata like title, content, author, publication date, etc.
Posts often include text content along with optional media attachments, such as images or files.
Appwrite can be used to manage posts by storing their data and associated metadata, providing CRUD (Create, Read, Update, Delete) operations for managing posts in an application.
In summary, while a "file" represents binary data uploaded to the server, a "post" represents a structured piece of content along with its associated metadata. They serve different purposes but can be used together in applications where posts may contain attachments such as images or documents (which are represented as files).









*/
