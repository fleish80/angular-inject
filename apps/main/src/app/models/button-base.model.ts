import {usePreventEvents} from '../utils/use-prevent-events.util';

export class ButtonBase {
  protected preventEvents = usePreventEvents();
}
