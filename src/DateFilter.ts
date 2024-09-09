import { AdvancedFilter } from './AdvancedFilter';
import { AutoModel, DayjsField } from 'react-3layer-decorators';
import { Dayjs } from 'dayjs';

@AutoModel()
export class DateFilter
  extends AdvancedFilter
  implements AdvancedFilter.NumberFilter<Dayjs>
{
  // @MomentField()
  // public equal?: Moment;

  // @MomentField()
  // public greater?: Moment;

  // @MomentField()
  // public greaterEqual?: Moment;

  // @MomentField()
  // public less?: Moment;

  // @MomentField()
  // public lessEqual?: Moment;

  // @MomentField()
  // public notEqual?: Moment;


  @DayjsField()
  public equal?: Dayjs;

  @DayjsField()
  public greater?: Dayjs;

  @DayjsField()
  public greaterEqual?: Dayjs;

  @DayjsField()
  public less?: Dayjs;

  @DayjsField()
  public lessEqual?: Dayjs;

  @DayjsField()
  public notEqual?: Dayjs;

  

  constructor(fields?: Partial<DateFilter> | undefined) {
    super();
    if (typeof fields === 'object') {
      Object.assign<DateFilter, Partial<DateFilter>>(this, fields);
    }
  }
}
