export type UserType={
  _id:string
   email: string;
 
   password: string;
   firstname:string;
   lastname:string;
 
 }
 export type BookType={
  _id:string
  userId:string,
name:string,
city:string,
country:string,
description:string,
type:string,
adultCount:number,
childCount:number,
imageUrl:string[],
lastUpdated:Date,
priceperTrip:number,
rating:number,




}
export type Tour={
  data:BookType[];
  pagination:{
    total:number,
    page:number;
    pages:number
  }


}