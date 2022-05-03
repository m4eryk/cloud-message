import { Repository } from 'typeorm';
import {
  Observable,
  from,
  map,
  mergeMap,
} from 'rxjs';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseEntity } from '../entity';

export abstract class BaseRepository<T extends NonNullable<BaseEntity>> {
  private constructor(private readonly repository: Repository<T>) {}

  create(model: T): Observable<T> {
    return this.save(model);
  }

  findOne(id: string): Observable<T> {
    const result = this.repository.findOneBy({ id });

    return from(result);
  }

  findAll(): Observable<T[]> {
    const result = this.repository.find();

    return from(result);
  }

  update(model: T): Observable<T> {
    return this.save(model);
  }

  updateAttrs(id: string, model: QueryDeepPartialEntity<T>): Observable<T> {
    const result = this.repository.update(id, model);

    return from(result).pipe(mergeMap(() => this.findOne(id)));
  }

  delete(id: string): Observable<boolean> {
    const result = this.repository.delete(id);

    return from(result).pipe(
      map(deletedItem => (typeof deletedItem.affected === 'number' ? !!deletedItem.affected : !!deletedItem.raw)),
    );
  }

  private save(model: T): Observable<T> {
    const result = this.repository.save(model);

    return from(result);
  }
}
