import React, { useState } from 'react'
import classes from "./birthdayreminder.module.css"
import {birthdayData} from "./data";
function BirthdayReminder() {
    let currentDate = new Date();
    let date = currentDate.getDate()
    let month = currentDate.getMonth()
    let year = currentDate.getFullYear()
    const dateOfBirth=(date,month,year)=>{
      const dob=`${date}/${month}/${year}`
      return(
       dob
      )
      }
  const [people,setPeople]=useState(birthdayData)
  const removeHandler=(id)=>{
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople)
  }
  return (
    <div className={classes.container}>
              <h2 className={classes.text}>Birthday Remainder</h2>
      {people.map((data) => {
        const age = parseInt(year) - data.byear + "years";
        return (
          <div key={data.id} className={classes.card}>
            <p className={classes.para}>{data.name}</p>
            <p className={classes.dob}>{dateOfBirth(data.bdate,data.bmonth,data.byear)}</p>
            <div className={classes.side}>
              <img src={data.img} alt="birthimage" className={classes.image} />
              <p>{age}</p>
              <button type="button" className={classes.btn} onClick={()=>removeHandler(data.id)}>
                remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BirthdayReminder