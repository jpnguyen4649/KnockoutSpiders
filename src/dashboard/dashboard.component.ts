import {Component, OnInit} from '@angular/core';
import {createVendiaClient} from "@vendia/client";

//This should allow for the vendia client to work
//in this component. Change apikey to correct one.
const client = createVendiaClient({
  apiUrl: "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/graphql/",
  websocketUrl: "wss://xxxxxxx.execute-api.us-west-1.amazonaws.com/graphql",
  apiKey: "M9YffZc6jK3Jj8uHz68fNGWuEhfjrXiThqqsPzSjqWQg3",
});

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../assets/fonts/fontawesome-free-6.1.1-web/css/all.min.css']

})





export class DashboardComponent implements OnInit
{

  //The following arrays are placeholders for when the Vendia
  //client is up and running. Once it is we remove
  //these hard calls and replace with Vendia API calls.
  names: string[] = ['Elizabeth Swann', 'Hector Barbossa', 'Joshamee Gibbs', 'Will Turner', 'Tia Dalma', 'Angelica Beard', 'Shirley Jennings', 'Georgia Brown'];
  ages: number[] = [28, 45, 52, 31, 27, 28, 29, 29];
  genders: string[] = ['female', 'male', 'male', 'male', 'non-binary', 'female', 'non-binary', 'prefer not to answer'];
  heights: number[] = [61, 73, 68, 70, 63, 57, 62, 59];
  temperatures: number[] = [98.7, 98.0, 98.6, 98.6, 97.6, 100.0, 98.7, 98.4];
  pulses: number[] = [80, 100, 70, 83, 60, 79, 77, 82];
  bloodPressures: string[] = ['120/80', '140/60', '138/72', '124/75', '110/70', '120/78', '119/80', '120/81'];
  breaths: number[] = [12, 16, 12, 16, 13, 11, 12, 14];
  weight: number[] = [110, 165, 189, 140, 121, 115, 135, 112];
  exerciseHours: number[] = [8, 2, 0, 12, 3, 5, 2, 4];
  vacationHours: number[] = [5, 3, 10, 10, 20, 0, 7, 3];
  workHours: number[] = [50, 40, 32, 40, 50, 20, 38, 40];

  ngOnInit()
  {
  }

  //Author: Ariel Camargo
  //Given an array, the standard deviation is returned.
  getStandardDeviation(data:number[])
  {
    let average = this.getAverage(data);
    let standardDeviation = 0.0;
    for(let i = 0; i < data.length; i++)
    {
      standardDeviation += Math.pow((data[i] - average), 2);
    }
    standardDeviation /= data.length;
    standardDeviation = Math.sqrt(standardDeviation);
    return standardDeviation;
  }

  //Author: Ariel Camargo
  //Given an array, the average is returned.
  getAverage(data:number[])
  {
    let average = 0.0;
    for(let i = 0; i < data.length; i++)
    {
      average += data[i];
    }
    average /= data.length;
    return average;
  }

  //Author: Ariel Camargo
  //Given an array and a term, calculate how many instances
  //that term occurs in said array.
  //Return a string in XX.X% format.
  getPercentage(searchedValue: string, data:string[])
  {
    let returnedValue = 0.0;
    let counter = 0;
    let returnedValueString = '';
    for(let i = 0; i  < data.length; i++)
    {
      if(data[i] == searchedValue)
        counter++;
    }
    returnedValue = (counter * 1.0) / (data.length * 1.0);
    returnedValue *= 100.0;
    returnedValueString = returnedValue.toFixed(1) + '%';
    return returnedValueString;
  }

  getMedian(data:number[])
  {
    let orderedArr: number[] = this.sortNumArrAsc(data);
    if(orderedArr.length % 2 == 1)
    {
      return orderedArr[((orderedArr.length - 1) / 2)];
    }
    else
    {
      return (orderedArr[orderedArr.length / 2] + orderedArr[(orderedArr.length / 2) - 1]) / 2;
    }
  }

  getMode(data: any[])
  {
    let tempArr: any[] = data.sort();

  }

  sortNumArrAsc(data:number[])
  {
    let orderedArr: number[] = data;
    for(let i = 0; i < orderedArr.length; i++)
    {
      for(let j = 1; j < orderedArr.length; j++)
      {
        if(orderedArr[i] > orderedArr[j])
        {
          let temp = orderedArr[j];
          orderedArr[j] = orderedArr[i];
          orderedArr[i] = temp;
        }
      }
    }
    return orderedArr;
  }
}
