import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AccountService} from "../../shared/services/account.service";
import {ToastrService} from "ngx-toastr";
import {map} from "rxjs/operators";

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toasts = inject(ToastrService);
  return accountService.currentUser$.pipe(
    map(user => {
      if (user) return true;
      toasts.error('You shall not pass!');
      return false;
    })
  );
};
