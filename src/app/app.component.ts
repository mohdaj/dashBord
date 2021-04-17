import {Component, OnInit} from '@angular/core';
import data from '../assets/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'untitled';

  data = data;
  hasvalue = false;

  ngOnInit(): void {
    this.hasdat(data);
  }


  hasdata() {
    var data = this.data;
    var res;
    for (let i = 0; i < data.length; i++) {
      if (data[i].services) {
        console.log(data[i].services);
      }
      //
      // console.log(res);
      // console.log(res[i]);


    }


  }

  hasdat(data) {
    var keys = [];
    for (var k in data.services) {
      keys.push(k);
    }
    console.log(keys);
  }


}
