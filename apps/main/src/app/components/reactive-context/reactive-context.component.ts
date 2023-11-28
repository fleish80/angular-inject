import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { useReactiveContext } from '../../utils/use-reactive-context.util';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'df-reactive-context',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      unsubscribe works!
    </p>
  `,
  styles: []
})
export class ReactiveContextComponent implements OnInit {

  context$ = useReactiveContext();

  constructor() {
    useReactiveContext(fromEvent(document.body, 'click')).subscribe();
  }

  ngOnInit(): void {
    this.context$.connect(fromEvent(document.body, 'click')).subscribe();
  }

}
