import { Component } from '@angular/core';
import { TuiCheckboxLabeledModule, TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [TuiIslandModule, TuiCheckboxLabeledModule, TuiInputModule],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent {
  constructor() {

  }

  skeletonVisible = true;
  lightMode = false;
}
