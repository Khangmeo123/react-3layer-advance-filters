import type { Moment } from 'moment';
import { AdvancedFilter } from './AdvancedFilter';
import { AutoModel, MomentField } from 'react-3layer-decorators';

@AutoModel()
export class DateFilter
  extends AdvancedFilter
  implements AdvancedFilter.NumberFilter<Moment>
{
  @MomentField()
  public equal?: Moment;

  @MomentField()
  public greater?: Moment;

  @MomentField()
  public greaterEqual?: Moment;

  @MomentField()
  public less?: Moment;

  @MomentField()
  public lessEqual?: Moment;

  @MomentField()
  public notEqual?: Moment;

  constructor(fields?: Partial<DateFilter> | undefined) {
    super();
    if (typeof fields === 'object') {
      Object.assign<DateFilter, Partial<DateFilter>>(this, fields);
    }
  }
}
