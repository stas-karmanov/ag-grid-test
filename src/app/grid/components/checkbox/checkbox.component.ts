import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'test-checkbox',
    templateUrl: './checkbox.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonCheckboxComponent {
    @Input() selectedState: boolean;
    @Output() selectedStateChange = new EventEmitter<boolean>();

    public onStateChange(isChecked: boolean) {
        this.selectedStateChange.emit(isChecked);
    }
}
