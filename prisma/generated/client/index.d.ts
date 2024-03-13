
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model formPembelian
 * 
 */
export type formPembelian = $Result.DefaultSelection<Prisma.$formPembelianPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs>;

  /**
   * `prisma.formPembelian`: Exposes CRUD operations for the **formPembelian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormPembelians
    * const formPembelians = await prisma.formPembelian.findMany()
    * ```
    */
  get formPembelian(): Prisma.formPembelianDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    admin: 'admin',
    formPembelian: 'formPembelian'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'admin' | 'formPembelian'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      formPembelian: {
        payload: Prisma.$formPembelianPayload<ExtArgs>
        fields: Prisma.formPembelianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formPembelianFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formPembelianFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          findFirst: {
            args: Prisma.formPembelianFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formPembelianFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          findMany: {
            args: Prisma.formPembelianFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>[]
          }
          create: {
            args: Prisma.formPembelianCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          createMany: {
            args: Prisma.formPembelianCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.formPembelianDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          update: {
            args: Prisma.formPembelianUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          deleteMany: {
            args: Prisma.formPembelianDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.formPembelianUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.formPembelianUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          aggregate: {
            args: Prisma.FormPembelianAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFormPembelian>
          }
          groupBy: {
            args: Prisma.formPembelianGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FormPembelianGroupByOutputType>[]
          }
          count: {
            args: Prisma.formPembelianCountArgs<ExtArgs>,
            result: $Utils.Optional<FormPembelianCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    harga_barang: number | null
    diskon_barang: number | null
    rating_barang: number | null
    jumlah_barang: number | null
    total_penjualan_barang: number | null
    view_barang: number | null
    like_barang: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    harga_barang: number | null
    diskon_barang: number | null
    rating_barang: number | null
    jumlah_barang: number | null
    total_penjualan_barang: number | null
    view_barang: number | null
    like_barang: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    btoa: string | null
    start: Date | null
    end: Date | null
    nama_barang: string | null
    kategori_barang: string | null
    tag_barang: string | null
    harga_barang: number | null
    diskon_barang: number | null
    kondisi_diskon_barang: boolean | null
    rating_barang: number | null
    jumlah_barang: number | null
    total_penjualan_barang: number | null
    diskripsi_barang: string | null
    gambar_barang: string | null
    slug_barang: string | null
    kupon_barang: string | null
    view_barang: number | null
    like_barang: number | null
    link_barang: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    btoa: string | null
    start: Date | null
    end: Date | null
    nama_barang: string | null
    kategori_barang: string | null
    tag_barang: string | null
    harga_barang: number | null
    diskon_barang: number | null
    kondisi_diskon_barang: boolean | null
    rating_barang: number | null
    jumlah_barang: number | null
    total_penjualan_barang: number | null
    diskripsi_barang: string | null
    gambar_barang: string | null
    slug_barang: string | null
    kupon_barang: string | null
    view_barang: number | null
    like_barang: number | null
    link_barang: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    btoa: number
    start: number
    end: number
    nama_barang: number
    kategori_barang: number
    tag_barang: number
    harga_barang: number
    diskon_barang: number
    kondisi_diskon_barang: number
    rating_barang: number
    jumlah_barang: number
    total_penjualan_barang: number
    diskripsi_barang: number
    detail_deskripsi_barang: number
    gambar_barang: number
    slug_barang: number
    kupon_barang: number
    view_barang: number
    like_barang: number
    link_barang: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    harga_barang?: true
    diskon_barang?: true
    rating_barang?: true
    jumlah_barang?: true
    total_penjualan_barang?: true
    view_barang?: true
    like_barang?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    harga_barang?: true
    diskon_barang?: true
    rating_barang?: true
    jumlah_barang?: true
    total_penjualan_barang?: true
    view_barang?: true
    like_barang?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    btoa?: true
    start?: true
    end?: true
    nama_barang?: true
    kategori_barang?: true
    tag_barang?: true
    harga_barang?: true
    diskon_barang?: true
    kondisi_diskon_barang?: true
    rating_barang?: true
    jumlah_barang?: true
    total_penjualan_barang?: true
    diskripsi_barang?: true
    gambar_barang?: true
    slug_barang?: true
    kupon_barang?: true
    view_barang?: true
    like_barang?: true
    link_barang?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    btoa?: true
    start?: true
    end?: true
    nama_barang?: true
    kategori_barang?: true
    tag_barang?: true
    harga_barang?: true
    diskon_barang?: true
    kondisi_diskon_barang?: true
    rating_barang?: true
    jumlah_barang?: true
    total_penjualan_barang?: true
    diskripsi_barang?: true
    gambar_barang?: true
    slug_barang?: true
    kupon_barang?: true
    view_barang?: true
    like_barang?: true
    link_barang?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    btoa?: true
    start?: true
    end?: true
    nama_barang?: true
    kategori_barang?: true
    tag_barang?: true
    harga_barang?: true
    diskon_barang?: true
    kondisi_diskon_barang?: true
    rating_barang?: true
    jumlah_barang?: true
    total_penjualan_barang?: true
    diskripsi_barang?: true
    detail_deskripsi_barang?: true
    gambar_barang?: true
    slug_barang?: true
    kupon_barang?: true
    view_barang?: true
    like_barang?: true
    link_barang?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationAndSearchRelevanceInput | adminOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    btoa: string | null
    start: Date
    end: Date | null
    nama_barang: string | null
    kategori_barang: string | null
    tag_barang: string | null
    harga_barang: number | null
    diskon_barang: number | null
    kondisi_diskon_barang: boolean
    rating_barang: number | null
    jumlah_barang: number | null
    total_penjualan_barang: number | null
    diskripsi_barang: string | null
    detail_deskripsi_barang: JsonValue | null
    gambar_barang: string | null
    slug_barang: string | null
    kupon_barang: string | null
    view_barang: number | null
    like_barang: number | null
    link_barang: string | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    btoa?: boolean
    start?: boolean
    end?: boolean
    nama_barang?: boolean
    kategori_barang?: boolean
    tag_barang?: boolean
    harga_barang?: boolean
    diskon_barang?: boolean
    kondisi_diskon_barang?: boolean
    rating_barang?: boolean
    jumlah_barang?: boolean
    total_penjualan_barang?: boolean
    diskripsi_barang?: boolean
    detail_deskripsi_barang?: boolean
    gambar_barang?: boolean
    slug_barang?: boolean
    kupon_barang?: boolean
    view_barang?: boolean
    like_barang?: boolean
    link_barang?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    btoa?: boolean
    start?: boolean
    end?: boolean
    nama_barang?: boolean
    kategori_barang?: boolean
    tag_barang?: boolean
    harga_barang?: boolean
    diskon_barang?: boolean
    kondisi_diskon_barang?: boolean
    rating_barang?: boolean
    jumlah_barang?: boolean
    total_penjualan_barang?: boolean
    diskripsi_barang?: boolean
    detail_deskripsi_barang?: boolean
    gambar_barang?: boolean
    slug_barang?: boolean
    kupon_barang?: boolean
    view_barang?: boolean
    like_barang?: boolean
    link_barang?: boolean
  }


  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      btoa: string | null
      start: Date
      end: Date | null
      nama_barang: string | null
      kategori_barang: string | null
      tag_barang: string | null
      harga_barang: number | null
      diskon_barang: number | null
      kondisi_diskon_barang: boolean
      rating_barang: number | null
      jumlah_barang: number | null
      total_penjualan_barang: number | null
      diskripsi_barang: string | null
      detail_deskripsi_barang: Prisma.JsonValue | null
      gambar_barang: string | null
      slug_barang: string | null
      kupon_barang: string | null
      view_barang: number | null
      like_barang: number | null
      link_barang: string | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends adminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends adminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adminCreateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {adminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends adminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adminDeleteArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends adminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adminUpsertArgs<ExtArgs>>
    ): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the admin model
   */ 
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly btoa: FieldRef<"admin", 'String'>
    readonly start: FieldRef<"admin", 'DateTime'>
    readonly end: FieldRef<"admin", 'DateTime'>
    readonly nama_barang: FieldRef<"admin", 'String'>
    readonly kategori_barang: FieldRef<"admin", 'String'>
    readonly tag_barang: FieldRef<"admin", 'String'>
    readonly harga_barang: FieldRef<"admin", 'Int'>
    readonly diskon_barang: FieldRef<"admin", 'Int'>
    readonly kondisi_diskon_barang: FieldRef<"admin", 'Boolean'>
    readonly rating_barang: FieldRef<"admin", 'Int'>
    readonly jumlah_barang: FieldRef<"admin", 'Int'>
    readonly total_penjualan_barang: FieldRef<"admin", 'Int'>
    readonly diskripsi_barang: FieldRef<"admin", 'String'>
    readonly detail_deskripsi_barang: FieldRef<"admin", 'Json'>
    readonly gambar_barang: FieldRef<"admin", 'String'>
    readonly slug_barang: FieldRef<"admin", 'String'>
    readonly kupon_barang: FieldRef<"admin", 'String'>
    readonly view_barang: FieldRef<"admin", 'Int'>
    readonly like_barang: FieldRef<"admin", 'Int'>
    readonly link_barang: FieldRef<"admin", 'String'>
  }
    

  // Custom InputTypes

  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationAndSearchRelevanceInput | adminOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationAndSearchRelevanceInput | adminOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationAndSearchRelevanceInput | adminOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data?: XOR<adminCreateInput, adminUncheckedCreateInput>
  }


  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
  }


  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }


  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
  }


  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
  }



  /**
   * Model formPembelian
   */

  export type AggregateFormPembelian = {
    _count: FormPembelianCountAggregateOutputType | null
    _avg: FormPembelianAvgAggregateOutputType | null
    _sum: FormPembelianSumAggregateOutputType | null
    _min: FormPembelianMinAggregateOutputType | null
    _max: FormPembelianMaxAggregateOutputType | null
  }

  export type FormPembelianAvgAggregateOutputType = {
    id: number | null
    kode_pos_user: number | null
    no_hp_user: number | null
  }

  export type FormPembelianSumAggregateOutputType = {
    id: number | null
    kode_pos_user: number | null
    no_hp_user: bigint | null
  }

  export type FormPembelianMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    nota_user: string | null
    nama_lengkap_user: string | null
    alamat_lengkap_user: string | null
    kode_pos_user: number | null
    no_hp_user: bigint | null
    catatan_user: string | null
    status_pesanan: string | null
    payment: boolean | null
  }

  export type FormPembelianMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    nota_user: string | null
    nama_lengkap_user: string | null
    alamat_lengkap_user: string | null
    kode_pos_user: number | null
    no_hp_user: bigint | null
    catatan_user: string | null
    status_pesanan: string | null
    payment: boolean | null
  }

  export type FormPembelianCountAggregateOutputType = {
    id: number
    start: number
    end: number
    nota_user: number
    nama_lengkap_user: number
    alamat_lengkap_user: number
    kode_pos_user: number
    no_hp_user: number
    catatan_user: number
    status_pesanan: number
    dataPesanan: number
    payment: number
    _all: number
  }


  export type FormPembelianAvgAggregateInputType = {
    id?: true
    kode_pos_user?: true
    no_hp_user?: true
  }

  export type FormPembelianSumAggregateInputType = {
    id?: true
    kode_pos_user?: true
    no_hp_user?: true
  }

  export type FormPembelianMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    nota_user?: true
    nama_lengkap_user?: true
    alamat_lengkap_user?: true
    kode_pos_user?: true
    no_hp_user?: true
    catatan_user?: true
    status_pesanan?: true
    payment?: true
  }

  export type FormPembelianMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    nota_user?: true
    nama_lengkap_user?: true
    alamat_lengkap_user?: true
    kode_pos_user?: true
    no_hp_user?: true
    catatan_user?: true
    status_pesanan?: true
    payment?: true
  }

  export type FormPembelianCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    nota_user?: true
    nama_lengkap_user?: true
    alamat_lengkap_user?: true
    kode_pos_user?: true
    no_hp_user?: true
    catatan_user?: true
    status_pesanan?: true
    dataPesanan?: true
    payment?: true
    _all?: true
  }

  export type FormPembelianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formPembelian to aggregate.
     */
    where?: formPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formPembelians to fetch.
     */
    orderBy?: formPembelianOrderByWithRelationAndSearchRelevanceInput | formPembelianOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formPembelians
    **/
    _count?: true | FormPembelianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormPembelianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormPembelianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormPembelianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormPembelianMaxAggregateInputType
  }

  export type GetFormPembelianAggregateType<T extends FormPembelianAggregateArgs> = {
        [P in keyof T & keyof AggregateFormPembelian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormPembelian[P]>
      : GetScalarType<T[P], AggregateFormPembelian[P]>
  }




  export type formPembelianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formPembelianWhereInput
    orderBy?: formPembelianOrderByWithAggregationInput | formPembelianOrderByWithAggregationInput[]
    by: FormPembelianScalarFieldEnum[] | FormPembelianScalarFieldEnum
    having?: formPembelianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormPembelianCountAggregateInputType | true
    _avg?: FormPembelianAvgAggregateInputType
    _sum?: FormPembelianSumAggregateInputType
    _min?: FormPembelianMinAggregateInputType
    _max?: FormPembelianMaxAggregateInputType
  }

  export type FormPembelianGroupByOutputType = {
    id: number
    start: Date
    end: Date | null
    nota_user: string | null
    nama_lengkap_user: string | null
    alamat_lengkap_user: string | null
    kode_pos_user: number | null
    no_hp_user: bigint | null
    catatan_user: string | null
    status_pesanan: string | null
    dataPesanan: JsonValue | null
    payment: boolean
    _count: FormPembelianCountAggregateOutputType | null
    _avg: FormPembelianAvgAggregateOutputType | null
    _sum: FormPembelianSumAggregateOutputType | null
    _min: FormPembelianMinAggregateOutputType | null
    _max: FormPembelianMaxAggregateOutputType | null
  }

  type GetFormPembelianGroupByPayload<T extends formPembelianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormPembelianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormPembelianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormPembelianGroupByOutputType[P]>
            : GetScalarType<T[P], FormPembelianGroupByOutputType[P]>
        }
      >
    >


  export type formPembelianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    nota_user?: boolean
    nama_lengkap_user?: boolean
    alamat_lengkap_user?: boolean
    kode_pos_user?: boolean
    no_hp_user?: boolean
    catatan_user?: boolean
    status_pesanan?: boolean
    dataPesanan?: boolean
    payment?: boolean
  }, ExtArgs["result"]["formPembelian"]>

  export type formPembelianSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    nota_user?: boolean
    nama_lengkap_user?: boolean
    alamat_lengkap_user?: boolean
    kode_pos_user?: boolean
    no_hp_user?: boolean
    catatan_user?: boolean
    status_pesanan?: boolean
    dataPesanan?: boolean
    payment?: boolean
  }


  export type $formPembelianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formPembelian"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date | null
      nota_user: string | null
      nama_lengkap_user: string | null
      alamat_lengkap_user: string | null
      kode_pos_user: number | null
      no_hp_user: bigint | null
      catatan_user: string | null
      status_pesanan: string | null
      dataPesanan: Prisma.JsonValue | null
      payment: boolean
    }, ExtArgs["result"]["formPembelian"]>
    composites: {}
  }


  type formPembelianGetPayload<S extends boolean | null | undefined | formPembelianDefaultArgs> = $Result.GetResult<Prisma.$formPembelianPayload, S>

  type formPembelianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<formPembelianFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FormPembelianCountAggregateInputType | true
    }

  export interface formPembelianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formPembelian'], meta: { name: 'formPembelian' } }
    /**
     * Find zero or one FormPembelian that matches the filter.
     * @param {formPembelianFindUniqueArgs} args - Arguments to find a FormPembelian
     * @example
     * // Get one FormPembelian
     * const formPembelian = await prisma.formPembelian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends formPembelianFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, formPembelianFindUniqueArgs<ExtArgs>>
    ): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FormPembelian that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {formPembelianFindUniqueOrThrowArgs} args - Arguments to find a FormPembelian
     * @example
     * // Get one FormPembelian
     * const formPembelian = await prisma.formPembelian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends formPembelianFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, formPembelianFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FormPembelian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianFindFirstArgs} args - Arguments to find a FormPembelian
     * @example
     * // Get one FormPembelian
     * const formPembelian = await prisma.formPembelian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends formPembelianFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, formPembelianFindFirstArgs<ExtArgs>>
    ): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FormPembelian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianFindFirstOrThrowArgs} args - Arguments to find a FormPembelian
     * @example
     * // Get one FormPembelian
     * const formPembelian = await prisma.formPembelian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends formPembelianFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, formPembelianFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FormPembelians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormPembelians
     * const formPembelians = await prisma.formPembelian.findMany()
     * 
     * // Get first 10 FormPembelians
     * const formPembelians = await prisma.formPembelian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formPembelianWithIdOnly = await prisma.formPembelian.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends formPembelianFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, formPembelianFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FormPembelian.
     * @param {formPembelianCreateArgs} args - Arguments to create a FormPembelian.
     * @example
     * // Create one FormPembelian
     * const FormPembelian = await prisma.formPembelian.create({
     *   data: {
     *     // ... data to create a FormPembelian
     *   }
     * })
     * 
    **/
    create<T extends formPembelianCreateArgs<ExtArgs>>(
      args: SelectSubset<T, formPembelianCreateArgs<ExtArgs>>
    ): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FormPembelians.
     *     @param {formPembelianCreateManyArgs} args - Arguments to create many FormPembelians.
     *     @example
     *     // Create many FormPembelians
     *     const formPembelian = await prisma.formPembelian.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends formPembelianCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, formPembelianCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FormPembelian.
     * @param {formPembelianDeleteArgs} args - Arguments to delete one FormPembelian.
     * @example
     * // Delete one FormPembelian
     * const FormPembelian = await prisma.formPembelian.delete({
     *   where: {
     *     // ... filter to delete one FormPembelian
     *   }
     * })
     * 
    **/
    delete<T extends formPembelianDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, formPembelianDeleteArgs<ExtArgs>>
    ): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FormPembelian.
     * @param {formPembelianUpdateArgs} args - Arguments to update one FormPembelian.
     * @example
     * // Update one FormPembelian
     * const formPembelian = await prisma.formPembelian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends formPembelianUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, formPembelianUpdateArgs<ExtArgs>>
    ): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FormPembelians.
     * @param {formPembelianDeleteManyArgs} args - Arguments to filter FormPembelians to delete.
     * @example
     * // Delete a few FormPembelians
     * const { count } = await prisma.formPembelian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends formPembelianDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, formPembelianDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormPembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormPembelians
     * const formPembelian = await prisma.formPembelian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends formPembelianUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, formPembelianUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FormPembelian.
     * @param {formPembelianUpsertArgs} args - Arguments to update or create a FormPembelian.
     * @example
     * // Update or create a FormPembelian
     * const formPembelian = await prisma.formPembelian.upsert({
     *   create: {
     *     // ... data to create a FormPembelian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormPembelian we want to update
     *   }
     * })
    **/
    upsert<T extends formPembelianUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, formPembelianUpsertArgs<ExtArgs>>
    ): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FormPembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianCountArgs} args - Arguments to filter FormPembelians to count.
     * @example
     * // Count the number of FormPembelians
     * const count = await prisma.formPembelian.count({
     *   where: {
     *     // ... the filter for the FormPembelians we want to count
     *   }
     * })
    **/
    count<T extends formPembelianCountArgs>(
      args?: Subset<T, formPembelianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormPembelianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormPembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormPembelianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormPembelianAggregateArgs>(args: Subset<T, FormPembelianAggregateArgs>): Prisma.PrismaPromise<GetFormPembelianAggregateType<T>>

    /**
     * Group by FormPembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formPembelianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formPembelianGroupByArgs['orderBy'] }
        : { orderBy?: formPembelianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formPembelianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormPembelianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formPembelian model
   */
  readonly fields: formPembelianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formPembelian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formPembelianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the formPembelian model
   */ 
  interface formPembelianFieldRefs {
    readonly id: FieldRef<"formPembelian", 'Int'>
    readonly start: FieldRef<"formPembelian", 'DateTime'>
    readonly end: FieldRef<"formPembelian", 'DateTime'>
    readonly nota_user: FieldRef<"formPembelian", 'String'>
    readonly nama_lengkap_user: FieldRef<"formPembelian", 'String'>
    readonly alamat_lengkap_user: FieldRef<"formPembelian", 'String'>
    readonly kode_pos_user: FieldRef<"formPembelian", 'Int'>
    readonly no_hp_user: FieldRef<"formPembelian", 'BigInt'>
    readonly catatan_user: FieldRef<"formPembelian", 'String'>
    readonly status_pesanan: FieldRef<"formPembelian", 'String'>
    readonly dataPesanan: FieldRef<"formPembelian", 'Json'>
    readonly payment: FieldRef<"formPembelian", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * formPembelian findUnique
   */
  export type formPembelianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Filter, which formPembelian to fetch.
     */
    where: formPembelianWhereUniqueInput
  }


  /**
   * formPembelian findUniqueOrThrow
   */
  export type formPembelianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Filter, which formPembelian to fetch.
     */
    where: formPembelianWhereUniqueInput
  }


  /**
   * formPembelian findFirst
   */
  export type formPembelianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Filter, which formPembelian to fetch.
     */
    where?: formPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formPembelians to fetch.
     */
    orderBy?: formPembelianOrderByWithRelationAndSearchRelevanceInput | formPembelianOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formPembelians.
     */
    cursor?: formPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formPembelians.
     */
    distinct?: FormPembelianScalarFieldEnum | FormPembelianScalarFieldEnum[]
  }


  /**
   * formPembelian findFirstOrThrow
   */
  export type formPembelianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Filter, which formPembelian to fetch.
     */
    where?: formPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formPembelians to fetch.
     */
    orderBy?: formPembelianOrderByWithRelationAndSearchRelevanceInput | formPembelianOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formPembelians.
     */
    cursor?: formPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formPembelians.
     */
    distinct?: FormPembelianScalarFieldEnum | FormPembelianScalarFieldEnum[]
  }


  /**
   * formPembelian findMany
   */
  export type formPembelianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Filter, which formPembelians to fetch.
     */
    where?: formPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formPembelians to fetch.
     */
    orderBy?: formPembelianOrderByWithRelationAndSearchRelevanceInput | formPembelianOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formPembelians.
     */
    cursor?: formPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formPembelians.
     */
    skip?: number
    distinct?: FormPembelianScalarFieldEnum | FormPembelianScalarFieldEnum[]
  }


  /**
   * formPembelian create
   */
  export type formPembelianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * The data needed to create a formPembelian.
     */
    data?: XOR<formPembelianCreateInput, formPembelianUncheckedCreateInput>
  }


  /**
   * formPembelian createMany
   */
  export type formPembelianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formPembelians.
     */
    data: formPembelianCreateManyInput | formPembelianCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * formPembelian update
   */
  export type formPembelianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * The data needed to update a formPembelian.
     */
    data: XOR<formPembelianUpdateInput, formPembelianUncheckedUpdateInput>
    /**
     * Choose, which formPembelian to update.
     */
    where: formPembelianWhereUniqueInput
  }


  /**
   * formPembelian updateMany
   */
  export type formPembelianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formPembelians.
     */
    data: XOR<formPembelianUpdateManyMutationInput, formPembelianUncheckedUpdateManyInput>
    /**
     * Filter which formPembelians to update
     */
    where?: formPembelianWhereInput
  }


  /**
   * formPembelian upsert
   */
  export type formPembelianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * The filter to search for the formPembelian to update in case it exists.
     */
    where: formPembelianWhereUniqueInput
    /**
     * In case the formPembelian found by the `where` argument doesn't exist, create a new formPembelian with this data.
     */
    create: XOR<formPembelianCreateInput, formPembelianUncheckedCreateInput>
    /**
     * In case the formPembelian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formPembelianUpdateInput, formPembelianUncheckedUpdateInput>
  }


  /**
   * formPembelian delete
   */
  export type formPembelianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Filter which formPembelian to delete.
     */
    where: formPembelianWhereUniqueInput
  }


  /**
   * formPembelian deleteMany
   */
  export type formPembelianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formPembelians to delete
     */
    where?: formPembelianWhereInput
  }


  /**
   * formPembelian without action
   */
  export type formPembelianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    btoa: 'btoa',
    start: 'start',
    end: 'end',
    nama_barang: 'nama_barang',
    kategori_barang: 'kategori_barang',
    tag_barang: 'tag_barang',
    harga_barang: 'harga_barang',
    diskon_barang: 'diskon_barang',
    kondisi_diskon_barang: 'kondisi_diskon_barang',
    rating_barang: 'rating_barang',
    jumlah_barang: 'jumlah_barang',
    total_penjualan_barang: 'total_penjualan_barang',
    diskripsi_barang: 'diskripsi_barang',
    detail_deskripsi_barang: 'detail_deskripsi_barang',
    gambar_barang: 'gambar_barang',
    slug_barang: 'slug_barang',
    kupon_barang: 'kupon_barang',
    view_barang: 'view_barang',
    like_barang: 'like_barang',
    link_barang: 'link_barang'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const FormPembelianScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    nota_user: 'nota_user',
    nama_lengkap_user: 'nama_lengkap_user',
    alamat_lengkap_user: 'alamat_lengkap_user',
    kode_pos_user: 'kode_pos_user',
    no_hp_user: 'no_hp_user',
    catatan_user: 'catatan_user',
    status_pesanan: 'status_pesanan',
    dataPesanan: 'dataPesanan',
    payment: 'payment'
  };

  export type FormPembelianScalarFieldEnum = (typeof FormPembelianScalarFieldEnum)[keyof typeof FormPembelianScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const adminOrderByRelevanceFieldEnum: {
    btoa: 'btoa',
    nama_barang: 'nama_barang',
    kategori_barang: 'kategori_barang',
    tag_barang: 'tag_barang',
    diskripsi_barang: 'diskripsi_barang',
    gambar_barang: 'gambar_barang',
    slug_barang: 'slug_barang',
    kupon_barang: 'kupon_barang',
    link_barang: 'link_barang'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const formPembelianOrderByRelevanceFieldEnum: {
    nota_user: 'nota_user',
    nama_lengkap_user: 'nama_lengkap_user',
    alamat_lengkap_user: 'alamat_lengkap_user',
    catatan_user: 'catatan_user',
    status_pesanan: 'status_pesanan'
  };

  export type formPembelianOrderByRelevanceFieldEnum = (typeof formPembelianOrderByRelevanceFieldEnum)[keyof typeof formPembelianOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    btoa?: StringNullableFilter<"admin"> | string | null
    start?: DateTimeFilter<"admin"> | Date | string
    end?: DateTimeNullableFilter<"admin"> | Date | string | null
    nama_barang?: StringNullableFilter<"admin"> | string | null
    kategori_barang?: StringNullableFilter<"admin"> | string | null
    tag_barang?: StringNullableFilter<"admin"> | string | null
    harga_barang?: IntNullableFilter<"admin"> | number | null
    diskon_barang?: IntNullableFilter<"admin"> | number | null
    kondisi_diskon_barang?: BoolFilter<"admin"> | boolean
    rating_barang?: IntNullableFilter<"admin"> | number | null
    jumlah_barang?: IntNullableFilter<"admin"> | number | null
    total_penjualan_barang?: IntNullableFilter<"admin"> | number | null
    diskripsi_barang?: StringNullableFilter<"admin"> | string | null
    detail_deskripsi_barang?: JsonNullableFilter<"admin">
    gambar_barang?: StringNullableFilter<"admin"> | string | null
    slug_barang?: StringNullableFilter<"admin"> | string | null
    kupon_barang?: StringNullableFilter<"admin"> | string | null
    view_barang?: IntNullableFilter<"admin"> | number | null
    like_barang?: IntNullableFilter<"admin"> | number | null
    link_barang?: StringNullableFilter<"admin"> | string | null
  }

  export type adminOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    btoa?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    nama_barang?: SortOrderInput | SortOrder
    kategori_barang?: SortOrderInput | SortOrder
    tag_barang?: SortOrderInput | SortOrder
    harga_barang?: SortOrderInput | SortOrder
    diskon_barang?: SortOrderInput | SortOrder
    kondisi_diskon_barang?: SortOrder
    rating_barang?: SortOrderInput | SortOrder
    jumlah_barang?: SortOrderInput | SortOrder
    total_penjualan_barang?: SortOrderInput | SortOrder
    diskripsi_barang?: SortOrderInput | SortOrder
    detail_deskripsi_barang?: SortOrderInput | SortOrder
    gambar_barang?: SortOrderInput | SortOrder
    slug_barang?: SortOrderInput | SortOrder
    kupon_barang?: SortOrderInput | SortOrder
    view_barang?: SortOrderInput | SortOrder
    like_barang?: SortOrderInput | SortOrder
    link_barang?: SortOrderInput | SortOrder
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    btoa?: string
    slug_barang?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    start?: DateTimeFilter<"admin"> | Date | string
    end?: DateTimeNullableFilter<"admin"> | Date | string | null
    nama_barang?: StringNullableFilter<"admin"> | string | null
    kategori_barang?: StringNullableFilter<"admin"> | string | null
    tag_barang?: StringNullableFilter<"admin"> | string | null
    harga_barang?: IntNullableFilter<"admin"> | number | null
    diskon_barang?: IntNullableFilter<"admin"> | number | null
    kondisi_diskon_barang?: BoolFilter<"admin"> | boolean
    rating_barang?: IntNullableFilter<"admin"> | number | null
    jumlah_barang?: IntNullableFilter<"admin"> | number | null
    total_penjualan_barang?: IntNullableFilter<"admin"> | number | null
    diskripsi_barang?: StringNullableFilter<"admin"> | string | null
    detail_deskripsi_barang?: JsonNullableFilter<"admin">
    gambar_barang?: StringNullableFilter<"admin"> | string | null
    kupon_barang?: StringNullableFilter<"admin"> | string | null
    view_barang?: IntNullableFilter<"admin"> | number | null
    like_barang?: IntNullableFilter<"admin"> | number | null
    link_barang?: StringNullableFilter<"admin"> | string | null
  }, "id" | "btoa" | "slug_barang">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    btoa?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    nama_barang?: SortOrderInput | SortOrder
    kategori_barang?: SortOrderInput | SortOrder
    tag_barang?: SortOrderInput | SortOrder
    harga_barang?: SortOrderInput | SortOrder
    diskon_barang?: SortOrderInput | SortOrder
    kondisi_diskon_barang?: SortOrder
    rating_barang?: SortOrderInput | SortOrder
    jumlah_barang?: SortOrderInput | SortOrder
    total_penjualan_barang?: SortOrderInput | SortOrder
    diskripsi_barang?: SortOrderInput | SortOrder
    detail_deskripsi_barang?: SortOrderInput | SortOrder
    gambar_barang?: SortOrderInput | SortOrder
    slug_barang?: SortOrderInput | SortOrder
    kupon_barang?: SortOrderInput | SortOrder
    view_barang?: SortOrderInput | SortOrder
    like_barang?: SortOrderInput | SortOrder
    link_barang?: SortOrderInput | SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    btoa?: StringNullableWithAggregatesFilter<"admin"> | string | null
    start?: DateTimeWithAggregatesFilter<"admin"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"admin"> | Date | string | null
    nama_barang?: StringNullableWithAggregatesFilter<"admin"> | string | null
    kategori_barang?: StringNullableWithAggregatesFilter<"admin"> | string | null
    tag_barang?: StringNullableWithAggregatesFilter<"admin"> | string | null
    harga_barang?: IntNullableWithAggregatesFilter<"admin"> | number | null
    diskon_barang?: IntNullableWithAggregatesFilter<"admin"> | number | null
    kondisi_diskon_barang?: BoolWithAggregatesFilter<"admin"> | boolean
    rating_barang?: IntNullableWithAggregatesFilter<"admin"> | number | null
    jumlah_barang?: IntNullableWithAggregatesFilter<"admin"> | number | null
    total_penjualan_barang?: IntNullableWithAggregatesFilter<"admin"> | number | null
    diskripsi_barang?: StringNullableWithAggregatesFilter<"admin"> | string | null
    detail_deskripsi_barang?: JsonNullableWithAggregatesFilter<"admin">
    gambar_barang?: StringNullableWithAggregatesFilter<"admin"> | string | null
    slug_barang?: StringNullableWithAggregatesFilter<"admin"> | string | null
    kupon_barang?: StringNullableWithAggregatesFilter<"admin"> | string | null
    view_barang?: IntNullableWithAggregatesFilter<"admin"> | number | null
    like_barang?: IntNullableWithAggregatesFilter<"admin"> | number | null
    link_barang?: StringNullableWithAggregatesFilter<"admin"> | string | null
  }

  export type formPembelianWhereInput = {
    AND?: formPembelianWhereInput | formPembelianWhereInput[]
    OR?: formPembelianWhereInput[]
    NOT?: formPembelianWhereInput | formPembelianWhereInput[]
    id?: IntFilter<"formPembelian"> | number
    start?: DateTimeFilter<"formPembelian"> | Date | string
    end?: DateTimeNullableFilter<"formPembelian"> | Date | string | null
    nota_user?: StringNullableFilter<"formPembelian"> | string | null
    nama_lengkap_user?: StringNullableFilter<"formPembelian"> | string | null
    alamat_lengkap_user?: StringNullableFilter<"formPembelian"> | string | null
    kode_pos_user?: IntNullableFilter<"formPembelian"> | number | null
    no_hp_user?: BigIntNullableFilter<"formPembelian"> | bigint | number | null
    catatan_user?: StringNullableFilter<"formPembelian"> | string | null
    status_pesanan?: StringNullableFilter<"formPembelian"> | string | null
    dataPesanan?: JsonNullableFilter<"formPembelian">
    payment?: BoolFilter<"formPembelian"> | boolean
  }

  export type formPembelianOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    nota_user?: SortOrderInput | SortOrder
    nama_lengkap_user?: SortOrderInput | SortOrder
    alamat_lengkap_user?: SortOrderInput | SortOrder
    kode_pos_user?: SortOrderInput | SortOrder
    no_hp_user?: SortOrderInput | SortOrder
    catatan_user?: SortOrderInput | SortOrder
    status_pesanan?: SortOrderInput | SortOrder
    dataPesanan?: SortOrderInput | SortOrder
    payment?: SortOrder
    _relevance?: formPembelianOrderByRelevanceInput
  }

  export type formPembelianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nota_user?: string
    AND?: formPembelianWhereInput | formPembelianWhereInput[]
    OR?: formPembelianWhereInput[]
    NOT?: formPembelianWhereInput | formPembelianWhereInput[]
    start?: DateTimeFilter<"formPembelian"> | Date | string
    end?: DateTimeNullableFilter<"formPembelian"> | Date | string | null
    nama_lengkap_user?: StringNullableFilter<"formPembelian"> | string | null
    alamat_lengkap_user?: StringNullableFilter<"formPembelian"> | string | null
    kode_pos_user?: IntNullableFilter<"formPembelian"> | number | null
    no_hp_user?: BigIntNullableFilter<"formPembelian"> | bigint | number | null
    catatan_user?: StringNullableFilter<"formPembelian"> | string | null
    status_pesanan?: StringNullableFilter<"formPembelian"> | string | null
    dataPesanan?: JsonNullableFilter<"formPembelian">
    payment?: BoolFilter<"formPembelian"> | boolean
  }, "id" | "nota_user">

  export type formPembelianOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    nota_user?: SortOrderInput | SortOrder
    nama_lengkap_user?: SortOrderInput | SortOrder
    alamat_lengkap_user?: SortOrderInput | SortOrder
    kode_pos_user?: SortOrderInput | SortOrder
    no_hp_user?: SortOrderInput | SortOrder
    catatan_user?: SortOrderInput | SortOrder
    status_pesanan?: SortOrderInput | SortOrder
    dataPesanan?: SortOrderInput | SortOrder
    payment?: SortOrder
    _count?: formPembelianCountOrderByAggregateInput
    _avg?: formPembelianAvgOrderByAggregateInput
    _max?: formPembelianMaxOrderByAggregateInput
    _min?: formPembelianMinOrderByAggregateInput
    _sum?: formPembelianSumOrderByAggregateInput
  }

  export type formPembelianScalarWhereWithAggregatesInput = {
    AND?: formPembelianScalarWhereWithAggregatesInput | formPembelianScalarWhereWithAggregatesInput[]
    OR?: formPembelianScalarWhereWithAggregatesInput[]
    NOT?: formPembelianScalarWhereWithAggregatesInput | formPembelianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"formPembelian"> | number
    start?: DateTimeWithAggregatesFilter<"formPembelian"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"formPembelian"> | Date | string | null
    nota_user?: StringNullableWithAggregatesFilter<"formPembelian"> | string | null
    nama_lengkap_user?: StringNullableWithAggregatesFilter<"formPembelian"> | string | null
    alamat_lengkap_user?: StringNullableWithAggregatesFilter<"formPembelian"> | string | null
    kode_pos_user?: IntNullableWithAggregatesFilter<"formPembelian"> | number | null
    no_hp_user?: BigIntNullableWithAggregatesFilter<"formPembelian"> | bigint | number | null
    catatan_user?: StringNullableWithAggregatesFilter<"formPembelian"> | string | null
    status_pesanan?: StringNullableWithAggregatesFilter<"formPembelian"> | string | null
    dataPesanan?: JsonNullableWithAggregatesFilter<"formPembelian">
    payment?: BoolWithAggregatesFilter<"formPembelian"> | boolean
  }

  export type adminCreateInput = {
    btoa?: string | null
    start?: Date | string
    end?: Date | string | null
    nama_barang?: string | null
    kategori_barang?: string | null
    tag_barang?: string | null
    harga_barang?: number | null
    diskon_barang?: number | null
    kondisi_diskon_barang?: boolean
    rating_barang?: number | null
    jumlah_barang?: number | null
    total_penjualan_barang?: number | null
    diskripsi_barang?: string | null
    detail_deskripsi_barang?: NullableJsonNullValueInput | InputJsonValue
    gambar_barang?: string | null
    slug_barang?: string | null
    kupon_barang?: string | null
    view_barang?: number | null
    like_barang?: number | null
    link_barang?: string | null
  }

  export type adminUncheckedCreateInput = {
    id?: number
    btoa?: string | null
    start?: Date | string
    end?: Date | string | null
    nama_barang?: string | null
    kategori_barang?: string | null
    tag_barang?: string | null
    harga_barang?: number | null
    diskon_barang?: number | null
    kondisi_diskon_barang?: boolean
    rating_barang?: number | null
    jumlah_barang?: number | null
    total_penjualan_barang?: number | null
    diskripsi_barang?: string | null
    detail_deskripsi_barang?: NullableJsonNullValueInput | InputJsonValue
    gambar_barang?: string | null
    slug_barang?: string | null
    kupon_barang?: string | null
    view_barang?: number | null
    like_barang?: number | null
    link_barang?: string | null
  }

  export type adminUpdateInput = {
    btoa?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_barang?: NullableStringFieldUpdateOperationsInput | string | null
    tag_barang?: NullableStringFieldUpdateOperationsInput | string | null
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    diskon_barang?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi_diskon_barang?: BoolFieldUpdateOperationsInput | boolean
    rating_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    total_penjualan_barang?: NullableIntFieldUpdateOperationsInput | number | null
    diskripsi_barang?: NullableStringFieldUpdateOperationsInput | string | null
    detail_deskripsi_barang?: NullableJsonNullValueInput | InputJsonValue
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    slug_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kupon_barang?: NullableStringFieldUpdateOperationsInput | string | null
    view_barang?: NullableIntFieldUpdateOperationsInput | number | null
    like_barang?: NullableIntFieldUpdateOperationsInput | number | null
    link_barang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    btoa?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_barang?: NullableStringFieldUpdateOperationsInput | string | null
    tag_barang?: NullableStringFieldUpdateOperationsInput | string | null
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    diskon_barang?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi_diskon_barang?: BoolFieldUpdateOperationsInput | boolean
    rating_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    total_penjualan_barang?: NullableIntFieldUpdateOperationsInput | number | null
    diskripsi_barang?: NullableStringFieldUpdateOperationsInput | string | null
    detail_deskripsi_barang?: NullableJsonNullValueInput | InputJsonValue
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    slug_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kupon_barang?: NullableStringFieldUpdateOperationsInput | string | null
    view_barang?: NullableIntFieldUpdateOperationsInput | number | null
    like_barang?: NullableIntFieldUpdateOperationsInput | number | null
    link_barang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adminCreateManyInput = {
    id?: number
    btoa?: string | null
    start?: Date | string
    end?: Date | string | null
    nama_barang?: string | null
    kategori_barang?: string | null
    tag_barang?: string | null
    harga_barang?: number | null
    diskon_barang?: number | null
    kondisi_diskon_barang?: boolean
    rating_barang?: number | null
    jumlah_barang?: number | null
    total_penjualan_barang?: number | null
    diskripsi_barang?: string | null
    detail_deskripsi_barang?: NullableJsonNullValueInput | InputJsonValue
    gambar_barang?: string | null
    slug_barang?: string | null
    kupon_barang?: string | null
    view_barang?: number | null
    like_barang?: number | null
    link_barang?: string | null
  }

  export type adminUpdateManyMutationInput = {
    btoa?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_barang?: NullableStringFieldUpdateOperationsInput | string | null
    tag_barang?: NullableStringFieldUpdateOperationsInput | string | null
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    diskon_barang?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi_diskon_barang?: BoolFieldUpdateOperationsInput | boolean
    rating_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    total_penjualan_barang?: NullableIntFieldUpdateOperationsInput | number | null
    diskripsi_barang?: NullableStringFieldUpdateOperationsInput | string | null
    detail_deskripsi_barang?: NullableJsonNullValueInput | InputJsonValue
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    slug_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kupon_barang?: NullableStringFieldUpdateOperationsInput | string | null
    view_barang?: NullableIntFieldUpdateOperationsInput | number | null
    like_barang?: NullableIntFieldUpdateOperationsInput | number | null
    link_barang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    btoa?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kategori_barang?: NullableStringFieldUpdateOperationsInput | string | null
    tag_barang?: NullableStringFieldUpdateOperationsInput | string | null
    harga_barang?: NullableIntFieldUpdateOperationsInput | number | null
    diskon_barang?: NullableIntFieldUpdateOperationsInput | number | null
    kondisi_diskon_barang?: BoolFieldUpdateOperationsInput | boolean
    rating_barang?: NullableIntFieldUpdateOperationsInput | number | null
    jumlah_barang?: NullableIntFieldUpdateOperationsInput | number | null
    total_penjualan_barang?: NullableIntFieldUpdateOperationsInput | number | null
    diskripsi_barang?: NullableStringFieldUpdateOperationsInput | string | null
    detail_deskripsi_barang?: NullableJsonNullValueInput | InputJsonValue
    gambar_barang?: NullableStringFieldUpdateOperationsInput | string | null
    slug_barang?: NullableStringFieldUpdateOperationsInput | string | null
    kupon_barang?: NullableStringFieldUpdateOperationsInput | string | null
    view_barang?: NullableIntFieldUpdateOperationsInput | number | null
    like_barang?: NullableIntFieldUpdateOperationsInput | number | null
    link_barang?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type formPembelianCreateInput = {
    start?: Date | string
    end?: Date | string | null
    nota_user?: string | null
    nama_lengkap_user?: string | null
    alamat_lengkap_user?: string | null
    kode_pos_user?: number | null
    no_hp_user?: bigint | number | null
    catatan_user?: string | null
    status_pesanan?: string | null
    dataPesanan?: NullableJsonNullValueInput | InputJsonValue
    payment?: boolean
  }

  export type formPembelianUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    nota_user?: string | null
    nama_lengkap_user?: string | null
    alamat_lengkap_user?: string | null
    kode_pos_user?: number | null
    no_hp_user?: bigint | number | null
    catatan_user?: string | null
    status_pesanan?: string | null
    dataPesanan?: NullableJsonNullValueInput | InputJsonValue
    payment?: boolean
  }

  export type formPembelianUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota_user?: NullableStringFieldUpdateOperationsInput | string | null
    nama_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos_user?: NullableIntFieldUpdateOperationsInput | number | null
    no_hp_user?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    catatan_user?: NullableStringFieldUpdateOperationsInput | string | null
    status_pesanan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPesanan?: NullableJsonNullValueInput | InputJsonValue
    payment?: BoolFieldUpdateOperationsInput | boolean
  }

  export type formPembelianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota_user?: NullableStringFieldUpdateOperationsInput | string | null
    nama_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos_user?: NullableIntFieldUpdateOperationsInput | number | null
    no_hp_user?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    catatan_user?: NullableStringFieldUpdateOperationsInput | string | null
    status_pesanan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPesanan?: NullableJsonNullValueInput | InputJsonValue
    payment?: BoolFieldUpdateOperationsInput | boolean
  }

  export type formPembelianCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    nota_user?: string | null
    nama_lengkap_user?: string | null
    alamat_lengkap_user?: string | null
    kode_pos_user?: number | null
    no_hp_user?: bigint | number | null
    catatan_user?: string | null
    status_pesanan?: string | null
    dataPesanan?: NullableJsonNullValueInput | InputJsonValue
    payment?: boolean
  }

  export type formPembelianUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota_user?: NullableStringFieldUpdateOperationsInput | string | null
    nama_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos_user?: NullableIntFieldUpdateOperationsInput | number | null
    no_hp_user?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    catatan_user?: NullableStringFieldUpdateOperationsInput | string | null
    status_pesanan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPesanan?: NullableJsonNullValueInput | InputJsonValue
    payment?: BoolFieldUpdateOperationsInput | boolean
  }

  export type formPembelianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota_user?: NullableStringFieldUpdateOperationsInput | string | null
    nama_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos_user?: NullableIntFieldUpdateOperationsInput | number | null
    no_hp_user?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    catatan_user?: NullableStringFieldUpdateOperationsInput | string | null
    status_pesanan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPesanan?: NullableJsonNullValueInput | InputJsonValue
    payment?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    btoa?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nama_barang?: SortOrder
    kategori_barang?: SortOrder
    tag_barang?: SortOrder
    harga_barang?: SortOrder
    diskon_barang?: SortOrder
    kondisi_diskon_barang?: SortOrder
    rating_barang?: SortOrder
    jumlah_barang?: SortOrder
    total_penjualan_barang?: SortOrder
    diskripsi_barang?: SortOrder
    detail_deskripsi_barang?: SortOrder
    gambar_barang?: SortOrder
    slug_barang?: SortOrder
    kupon_barang?: SortOrder
    view_barang?: SortOrder
    like_barang?: SortOrder
    link_barang?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
    harga_barang?: SortOrder
    diskon_barang?: SortOrder
    rating_barang?: SortOrder
    jumlah_barang?: SortOrder
    total_penjualan_barang?: SortOrder
    view_barang?: SortOrder
    like_barang?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    btoa?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nama_barang?: SortOrder
    kategori_barang?: SortOrder
    tag_barang?: SortOrder
    harga_barang?: SortOrder
    diskon_barang?: SortOrder
    kondisi_diskon_barang?: SortOrder
    rating_barang?: SortOrder
    jumlah_barang?: SortOrder
    total_penjualan_barang?: SortOrder
    diskripsi_barang?: SortOrder
    gambar_barang?: SortOrder
    slug_barang?: SortOrder
    kupon_barang?: SortOrder
    view_barang?: SortOrder
    like_barang?: SortOrder
    link_barang?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    btoa?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nama_barang?: SortOrder
    kategori_barang?: SortOrder
    tag_barang?: SortOrder
    harga_barang?: SortOrder
    diskon_barang?: SortOrder
    kondisi_diskon_barang?: SortOrder
    rating_barang?: SortOrder
    jumlah_barang?: SortOrder
    total_penjualan_barang?: SortOrder
    diskripsi_barang?: SortOrder
    gambar_barang?: SortOrder
    slug_barang?: SortOrder
    kupon_barang?: SortOrder
    view_barang?: SortOrder
    like_barang?: SortOrder
    link_barang?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
    harga_barang?: SortOrder
    diskon_barang?: SortOrder
    rating_barang?: SortOrder
    jumlah_barang?: SortOrder
    total_penjualan_barang?: SortOrder
    view_barang?: SortOrder
    like_barang?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type formPembelianOrderByRelevanceInput = {
    fields: formPembelianOrderByRelevanceFieldEnum | formPembelianOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formPembelianCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nota_user?: SortOrder
    nama_lengkap_user?: SortOrder
    alamat_lengkap_user?: SortOrder
    kode_pos_user?: SortOrder
    no_hp_user?: SortOrder
    catatan_user?: SortOrder
    status_pesanan?: SortOrder
    dataPesanan?: SortOrder
    payment?: SortOrder
  }

  export type formPembelianAvgOrderByAggregateInput = {
    id?: SortOrder
    kode_pos_user?: SortOrder
    no_hp_user?: SortOrder
  }

  export type formPembelianMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nota_user?: SortOrder
    nama_lengkap_user?: SortOrder
    alamat_lengkap_user?: SortOrder
    kode_pos_user?: SortOrder
    no_hp_user?: SortOrder
    catatan_user?: SortOrder
    status_pesanan?: SortOrder
    payment?: SortOrder
  }

  export type formPembelianMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nota_user?: SortOrder
    nama_lengkap_user?: SortOrder
    alamat_lengkap_user?: SortOrder
    kode_pos_user?: SortOrder
    no_hp_user?: SortOrder
    catatan_user?: SortOrder
    status_pesanan?: SortOrder
    payment?: SortOrder
  }

  export type formPembelianSumOrderByAggregateInput = {
    id?: SortOrder
    kode_pos_user?: SortOrder
    no_hp_user?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use adminDefaultArgs instead
     */
    export type adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use formPembelianDefaultArgs instead
     */
    export type formPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = formPembelianDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}