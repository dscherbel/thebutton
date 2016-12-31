import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    public helpRequested:boolean;

    public onTap () {
        this.helpRequested = true;
    }
}
