import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { platform } from '@constants/constant';
@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() appName = platform;
}
@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
