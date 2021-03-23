# Bindings and String Interpolation

- [disabled]='!allowNewServers' - property binding
- (click)='onCreateServer()' - Event binding
- {{}} - string interpolation
- (input)='onUpdateServerName($event)' - $event, data binding
- [(ngModel)]='serverName' - two-way data binding

# Directives

- Are instructions in the DOM

<button (click)="onToggle()">Toggle Details</button>

<p *ngIf="toggle">Secret Password = tuna</p>
<p 
  *ngFor="let click of clickArray"
  [ngStyle]="{backgroundColor: click >= 5 ? 'blue' : 'transparent'}"
  [ngClass]="{'white-text': click >= 5}"
>{{ click }}</p>

# Binding and Component communication

@Input - lets you bind properties from parent component.
@Output -lets you bind properties to other components.
