import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'Test Server'

  constructor() { 
    setTimeout(() => {
      this.allowNewServers = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!!! Name is' + this.serverName
  }

  onUpdateServerName(event: any) {
    console.log(event)
    this.serverName = event.target.value
  }

}