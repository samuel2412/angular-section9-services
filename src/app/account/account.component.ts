import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  /* providers: [LoggingService] */
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor (private logginService: LoggingService, private acountsService: AccountsService){}

  onSetTo(status: string) {
    this.acountsService.uppdateStatus(this.id, status)
    this.acountsService.statusUpdated.emit(status)
   /*  this.logginService.logStatusChange(status) */
  }
}
