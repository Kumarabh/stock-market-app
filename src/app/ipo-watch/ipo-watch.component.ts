import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ipo-watch',
  templateUrl: './ipo-watch.component.html',
  styleUrls: ['./ipo-watch.component.css']
})
export class IpoWatchComponent implements OnInit {

  upcomingIPO = []
  upcomingNCD = []
  upcomingRightsIssue = []
  upcomingSMEipo = []
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getUpcomingIPO().subscribe(snapshots => {
    //   snapshots.docs.map(doc => {
    //     this.upcomingIPO.push(doc.data())
    //     console.log('1',this.upcomingIPO);
    // })
    this.upcomingIPO.push(snapshots.data())
    console.log('upcoming  ipo', snapshots.data())

    });

    this.service.getUpcomingNCD().subscribe(snapshots => {
    //   snapshots.docs.map(doc => {
    //     this.upcomingNCD.push(doc.data())
    //     console.log('2',this.upcomingNCD);
    // })
    this.upcomingNCD.push(snapshots.data())
    });

    this.service.getUpcomingRightsIssue().subscribe(snapshots => {
    //   snapshots.docs.map(doc => {
    //     this.upcomingRightsIssue.push(doc.data())
    //     console.log('3',this.upcomingRightsIssue);
    // })
    this.upcomingRightsIssue.push(snapshots.data())
    });

    this.service.getUpcomingSMEipo().subscribe(snapshots => {
    //   snapshots.docs.map(doc => {
    //     this.upcomingSMEipo.push(doc.data());
    //     console.log('4', doc.data());
        
    // })
          this.upcomingSMEipo.push(snapshots.data());
    });

  }

}
