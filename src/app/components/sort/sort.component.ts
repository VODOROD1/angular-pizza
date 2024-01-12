import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Sort as SortType, SortPropertyEnum } from '../../types/sortTypes';
import { TuiDataListModule, TuiHostedDropdownComponent, TuiHostedDropdownModule, TuiSvgModule } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

type SortPopupProps = {
  value: SortType;
};

export const sortList: SortItem[] = [
  { name: 'популярности (DESC)', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'популярности (ASC)', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'цене (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'алфавиту (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'алфавиту (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC },
];

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [
    CommonModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
    TuiDataListModule
  ],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SortComponent {
  // const dispatch = useDispatch();
  // const sortRef = React.useRef<HTMLDivElement>(null);

  // const [open, setOpen] = React.useState(false);

  // const onClickListItem = (obj: SortItem) => {
  //   dispatch(setSort(obj));
  //   setOpen(false);
  // };

  open = false;
 
  // readonly items = [
  //     ['By interest', 'By genre', 'By release year', 'By subject'],
  //     ['Ascending', 'Descending'],
  // ];

  readonly items = [
    'By interest', 'By genre', 'By release year', 'By subject'
  ];

  primary = 'By genre';

  ascending = true;

  onClick(item: string): void {
      // if (this.items[0].includes(item)) {
      //     this.primary = item;

      //     return;
      // }
      debugger
      if (this.items.includes(item)) {
        this.primary = item;

        return;
      }

      // this.ascending = item === this.items[1][0];
  }

  itemIsActive(item: string): boolean {
    // debugger
    return (
        item === this.primary
    );
  }
}
