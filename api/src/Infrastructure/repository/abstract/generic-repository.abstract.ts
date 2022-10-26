export abstract class GenericRepository<T> {
  abstract findOneById(id: string): Promise<T>;
  abstract findOneByCondition(filter: any): Promise<T>;
  abstract findOne(key: string, value: any): Promise<T>;
  abstract find(filter?: any, options?: any): Promise<T[]>;
  abstract create(data: T | any): Promise<void>;
  abstract update(id: string, item: T): Promise<void>;
}
