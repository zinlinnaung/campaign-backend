
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
 * Model Code
 * 
 */
export type Code = $Result.DefaultSelection<Prisma.$CodePayload>
/**
 * Model CustomerRecord
 * 
 */
export type CustomerRecord = $Result.DefaultSelection<Prisma.$CustomerRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Codes
 * const codes = await prisma.code.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Codes
   * const codes = await prisma.code.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.code`: Exposes CRUD operations for the **Code** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Codes
    * const codes = await prisma.code.findMany()
    * ```
    */
  get code(): Prisma.CodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerRecord`: Exposes CRUD operations for the **CustomerRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerRecords
    * const customerRecords = await prisma.customerRecord.findMany()
    * ```
    */
  get customerRecord(): Prisma.CustomerRecordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Code: 'Code',
    CustomerRecord: 'CustomerRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "code" | "customerRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Code: {
        payload: Prisma.$CodePayload<ExtArgs>
        fields: Prisma.CodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          findFirst: {
            args: Prisma.CodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          findMany: {
            args: Prisma.CodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>[]
          }
          create: {
            args: Prisma.CodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          createMany: {
            args: Prisma.CodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          update: {
            args: Prisma.CodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          deleteMany: {
            args: Prisma.CodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          aggregate: {
            args: Prisma.CodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCode>
          }
          groupBy: {
            args: Prisma.CodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeCountArgs<ExtArgs>
            result: $Utils.Optional<CodeCountAggregateOutputType> | number
          }
        }
      }
      CustomerRecord: {
        payload: Prisma.$CustomerRecordPayload<ExtArgs>
        fields: Prisma.CustomerRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRecordPayload>
          }
          findFirst: {
            args: Prisma.CustomerRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRecordPayload>
          }
          findMany: {
            args: Prisma.CustomerRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRecordPayload>[]
          }
          create: {
            args: Prisma.CustomerRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRecordPayload>
          }
          createMany: {
            args: Prisma.CustomerRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRecordPayload>
          }
          update: {
            args: Prisma.CustomerRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRecordPayload>
          }
          deleteMany: {
            args: Prisma.CustomerRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRecordPayload>
          }
          aggregate: {
            args: Prisma.CustomerRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerRecord>
          }
          groupBy: {
            args: Prisma.CustomerRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerRecordCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    code?: CodeOmit
    customerRecord?: CustomerRecordOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type CodeCountOutputType
   */

  export type CodeCountOutputType = {
    CustomerRecord: number
  }

  export type CodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerRecord?: boolean | CodeCountOutputTypeCountCustomerRecordArgs
  }

  // Custom InputTypes
  /**
   * CodeCountOutputType without action
   */
  export type CodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeCountOutputType
     */
    select?: CodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CodeCountOutputType without action
   */
  export type CodeCountOutputTypeCountCustomerRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Code
   */

  export type AggregateCode = {
    _count: CodeCountAggregateOutputType | null
    _avg: CodeAvgAggregateOutputType | null
    _sum: CodeSumAggregateOutputType | null
    _min: CodeMinAggregateOutputType | null
    _max: CodeMaxAggregateOutputType | null
  }

  export type CodeAvgAggregateOutputType = {
    id: number | null
  }

  export type CodeSumAggregateOutputType = {
    id: number | null
  }

  export type CodeMinAggregateOutputType = {
    id: number | null
    prizeName: string | null
    code: string | null
    used: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodeMaxAggregateOutputType = {
    id: number | null
    prizeName: string | null
    code: string | null
    used: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodeCountAggregateOutputType = {
    id: number
    prizeName: number
    code: number
    used: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CodeAvgAggregateInputType = {
    id?: true
  }

  export type CodeSumAggregateInputType = {
    id?: true
  }

  export type CodeMinAggregateInputType = {
    id?: true
    prizeName?: true
    code?: true
    used?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodeMaxAggregateInputType = {
    id?: true
    prizeName?: true
    code?: true
    used?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodeCountAggregateInputType = {
    id?: true
    prizeName?: true
    code?: true
    used?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Code to aggregate.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Codes
    **/
    _count?: true | CodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeMaxAggregateInputType
  }

  export type GetCodeAggregateType<T extends CodeAggregateArgs> = {
        [P in keyof T & keyof AggregateCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCode[P]>
      : GetScalarType<T[P], AggregateCode[P]>
  }




  export type CodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeWhereInput
    orderBy?: CodeOrderByWithAggregationInput | CodeOrderByWithAggregationInput[]
    by: CodeScalarFieldEnum[] | CodeScalarFieldEnum
    having?: CodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeCountAggregateInputType | true
    _avg?: CodeAvgAggregateInputType
    _sum?: CodeSumAggregateInputType
    _min?: CodeMinAggregateInputType
    _max?: CodeMaxAggregateInputType
  }

  export type CodeGroupByOutputType = {
    id: number
    prizeName: string
    code: string
    used: boolean
    createdAt: Date
    updatedAt: Date
    _count: CodeCountAggregateOutputType | null
    _avg: CodeAvgAggregateOutputType | null
    _sum: CodeSumAggregateOutputType | null
    _min: CodeMinAggregateOutputType | null
    _max: CodeMaxAggregateOutputType | null
  }

  type GetCodeGroupByPayload<T extends CodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeGroupByOutputType[P]>
            : GetScalarType<T[P], CodeGroupByOutputType[P]>
        }
      >
    >


  export type CodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prizeName?: boolean
    code?: boolean
    used?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CustomerRecord?: boolean | Code$CustomerRecordArgs<ExtArgs>
    _count?: boolean | CodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["code"]>



  export type CodeSelectScalar = {
    id?: boolean
    prizeName?: boolean
    code?: boolean
    used?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prizeName" | "code" | "used" | "createdAt" | "updatedAt", ExtArgs["result"]["code"]>
  export type CodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CustomerRecord?: boolean | Code$CustomerRecordArgs<ExtArgs>
    _count?: boolean | CodeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Code"
    objects: {
      CustomerRecord: Prisma.$CustomerRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prizeName: string
      code: string
      used: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["code"]>
    composites: {}
  }

  type CodeGetPayload<S extends boolean | null | undefined | CodeDefaultArgs> = $Result.GetResult<Prisma.$CodePayload, S>

  type CodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeCountAggregateInputType | true
    }

  export interface CodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Code'], meta: { name: 'Code' } }
    /**
     * Find zero or one Code that matches the filter.
     * @param {CodeFindUniqueArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeFindUniqueArgs>(args: SelectSubset<T, CodeFindUniqueArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Code that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeFindUniqueOrThrowArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Code that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindFirstArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeFindFirstArgs>(args?: SelectSubset<T, CodeFindFirstArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Code that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindFirstOrThrowArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Codes
     * const codes = await prisma.code.findMany()
     * 
     * // Get first 10 Codes
     * const codes = await prisma.code.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeWithIdOnly = await prisma.code.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeFindManyArgs>(args?: SelectSubset<T, CodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Code.
     * @param {CodeCreateArgs} args - Arguments to create a Code.
     * @example
     * // Create one Code
     * const Code = await prisma.code.create({
     *   data: {
     *     // ... data to create a Code
     *   }
     * })
     * 
     */
    create<T extends CodeCreateArgs>(args: SelectSubset<T, CodeCreateArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Codes.
     * @param {CodeCreateManyArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const code = await prisma.code.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeCreateManyArgs>(args?: SelectSubset<T, CodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Code.
     * @param {CodeDeleteArgs} args - Arguments to delete one Code.
     * @example
     * // Delete one Code
     * const Code = await prisma.code.delete({
     *   where: {
     *     // ... filter to delete one Code
     *   }
     * })
     * 
     */
    delete<T extends CodeDeleteArgs>(args: SelectSubset<T, CodeDeleteArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Code.
     * @param {CodeUpdateArgs} args - Arguments to update one Code.
     * @example
     * // Update one Code
     * const code = await prisma.code.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeUpdateArgs>(args: SelectSubset<T, CodeUpdateArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Codes.
     * @param {CodeDeleteManyArgs} args - Arguments to filter Codes to delete.
     * @example
     * // Delete a few Codes
     * const { count } = await prisma.code.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeDeleteManyArgs>(args?: SelectSubset<T, CodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Codes
     * const code = await prisma.code.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeUpdateManyArgs>(args: SelectSubset<T, CodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Code.
     * @param {CodeUpsertArgs} args - Arguments to update or create a Code.
     * @example
     * // Update or create a Code
     * const code = await prisma.code.upsert({
     *   create: {
     *     // ... data to create a Code
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Code we want to update
     *   }
     * })
     */
    upsert<T extends CodeUpsertArgs>(args: SelectSubset<T, CodeUpsertArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeCountArgs} args - Arguments to filter Codes to count.
     * @example
     * // Count the number of Codes
     * const count = await prisma.code.count({
     *   where: {
     *     // ... the filter for the Codes we want to count
     *   }
     * })
    **/
    count<T extends CodeCountArgs>(
      args?: Subset<T, CodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeAggregateArgs>(args: Subset<T, CodeAggregateArgs>): Prisma.PrismaPromise<GetCodeAggregateType<T>>

    /**
     * Group by Code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeGroupByArgs} args - Group by arguments.
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
      T extends CodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeGroupByArgs['orderBy'] }
        : { orderBy?: CodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Code model
   */
  readonly fields: CodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Code.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CustomerRecord<T extends Code$CustomerRecordArgs<ExtArgs> = {}>(args?: Subset<T, Code$CustomerRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Code model
   */
  interface CodeFieldRefs {
    readonly id: FieldRef<"Code", 'Int'>
    readonly prizeName: FieldRef<"Code", 'String'>
    readonly code: FieldRef<"Code", 'String'>
    readonly used: FieldRef<"Code", 'Boolean'>
    readonly createdAt: FieldRef<"Code", 'DateTime'>
    readonly updatedAt: FieldRef<"Code", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Code findUnique
   */
  export type CodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code findUniqueOrThrow
   */
  export type CodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code findFirst
   */
  export type CodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code findFirstOrThrow
   */
  export type CodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code findMany
   */
  export type CodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code create
   */
  export type CodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Code.
     */
    data: XOR<CodeCreateInput, CodeUncheckedCreateInput>
  }

  /**
   * Code createMany
   */
  export type CodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Codes.
     */
    data: CodeCreateManyInput | CodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Code update
   */
  export type CodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Code.
     */
    data: XOR<CodeUpdateInput, CodeUncheckedUpdateInput>
    /**
     * Choose, which Code to update.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code updateMany
   */
  export type CodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Codes.
     */
    data: XOR<CodeUpdateManyMutationInput, CodeUncheckedUpdateManyInput>
    /**
     * Filter which Codes to update
     */
    where?: CodeWhereInput
    /**
     * Limit how many Codes to update.
     */
    limit?: number
  }

  /**
   * Code upsert
   */
  export type CodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Code to update in case it exists.
     */
    where: CodeWhereUniqueInput
    /**
     * In case the Code found by the `where` argument doesn't exist, create a new Code with this data.
     */
    create: XOR<CodeCreateInput, CodeUncheckedCreateInput>
    /**
     * In case the Code was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeUpdateInput, CodeUncheckedUpdateInput>
  }

  /**
   * Code delete
   */
  export type CodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter which Code to delete.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code deleteMany
   */
  export type CodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Codes to delete
     */
    where?: CodeWhereInput
    /**
     * Limit how many Codes to delete.
     */
    limit?: number
  }

  /**
   * Code.CustomerRecord
   */
  export type Code$CustomerRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRecord
     */
    select?: CustomerRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRecord
     */
    omit?: CustomerRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRecordInclude<ExtArgs> | null
    where?: CustomerRecordWhereInput
    orderBy?: CustomerRecordOrderByWithRelationInput | CustomerRecordOrderByWithRelationInput[]
    cursor?: CustomerRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerRecordScalarFieldEnum | CustomerRecordScalarFieldEnum[]
  }

  /**
   * Code without action
   */
  export type CodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
  }


  /**
   * Model CustomerRecord
   */

  export type AggregateCustomerRecord = {
    _count: CustomerRecordCountAggregateOutputType | null
    _avg: CustomerRecordAvgAggregateOutputType | null
    _sum: CustomerRecordSumAggregateOutputType | null
    _min: CustomerRecordMinAggregateOutputType | null
    _max: CustomerRecordMaxAggregateOutputType | null
  }

  export type CustomerRecordAvgAggregateOutputType = {
    id: number | null
    codeId: number | null
  }

  export type CustomerRecordSumAggregateOutputType = {
    id: number | null
    codeId: number | null
  }

  export type CustomerRecordMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    codeId: number | null
    outletName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerRecordMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    codeId: number | null
    outletName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerRecordCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    codeId: number
    outletName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerRecordAvgAggregateInputType = {
    id?: true
    codeId?: true
  }

  export type CustomerRecordSumAggregateInputType = {
    id?: true
    codeId?: true
  }

  export type CustomerRecordMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    codeId?: true
    outletName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerRecordMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    codeId?: true
    outletName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerRecordCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    codeId?: true
    outletName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerRecord to aggregate.
     */
    where?: CustomerRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerRecords to fetch.
     */
    orderBy?: CustomerRecordOrderByWithRelationInput | CustomerRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerRecords
    **/
    _count?: true | CustomerRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerRecordMaxAggregateInputType
  }

  export type GetCustomerRecordAggregateType<T extends CustomerRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerRecord[P]>
      : GetScalarType<T[P], AggregateCustomerRecord[P]>
  }




  export type CustomerRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerRecordWhereInput
    orderBy?: CustomerRecordOrderByWithAggregationInput | CustomerRecordOrderByWithAggregationInput[]
    by: CustomerRecordScalarFieldEnum[] | CustomerRecordScalarFieldEnum
    having?: CustomerRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerRecordCountAggregateInputType | true
    _avg?: CustomerRecordAvgAggregateInputType
    _sum?: CustomerRecordSumAggregateInputType
    _min?: CustomerRecordMinAggregateInputType
    _max?: CustomerRecordMaxAggregateInputType
  }

  export type CustomerRecordGroupByOutputType = {
    id: number
    name: string
    phone: string
    codeId: number
    outletName: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerRecordCountAggregateOutputType | null
    _avg: CustomerRecordAvgAggregateOutputType | null
    _sum: CustomerRecordSumAggregateOutputType | null
    _min: CustomerRecordMinAggregateOutputType | null
    _max: CustomerRecordMaxAggregateOutputType | null
  }

  type GetCustomerRecordGroupByPayload<T extends CustomerRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerRecordGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerRecordGroupByOutputType[P]>
        }
      >
    >


  export type CustomerRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    codeId?: boolean
    outletName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    code?: boolean | CodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerRecord"]>



  export type CustomerRecordSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    codeId?: boolean
    outletName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "codeId" | "outletName" | "createdAt" | "updatedAt", ExtArgs["result"]["customerRecord"]>
  export type CustomerRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    code?: boolean | CodeDefaultArgs<ExtArgs>
  }

  export type $CustomerRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerRecord"
    objects: {
      code: Prisma.$CodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      codeId: number
      outletName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerRecord"]>
    composites: {}
  }

  type CustomerRecordGetPayload<S extends boolean | null | undefined | CustomerRecordDefaultArgs> = $Result.GetResult<Prisma.$CustomerRecordPayload, S>

  type CustomerRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerRecordCountAggregateInputType | true
    }

  export interface CustomerRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerRecord'], meta: { name: 'CustomerRecord' } }
    /**
     * Find zero or one CustomerRecord that matches the filter.
     * @param {CustomerRecordFindUniqueArgs} args - Arguments to find a CustomerRecord
     * @example
     * // Get one CustomerRecord
     * const customerRecord = await prisma.customerRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerRecordFindUniqueArgs>(args: SelectSubset<T, CustomerRecordFindUniqueArgs<ExtArgs>>): Prisma__CustomerRecordClient<$Result.GetResult<Prisma.$CustomerRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerRecordFindUniqueOrThrowArgs} args - Arguments to find a CustomerRecord
     * @example
     * // Get one CustomerRecord
     * const customerRecord = await prisma.customerRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerRecordClient<$Result.GetResult<Prisma.$CustomerRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRecordFindFirstArgs} args - Arguments to find a CustomerRecord
     * @example
     * // Get one CustomerRecord
     * const customerRecord = await prisma.customerRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerRecordFindFirstArgs>(args?: SelectSubset<T, CustomerRecordFindFirstArgs<ExtArgs>>): Prisma__CustomerRecordClient<$Result.GetResult<Prisma.$CustomerRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRecordFindFirstOrThrowArgs} args - Arguments to find a CustomerRecord
     * @example
     * // Get one CustomerRecord
     * const customerRecord = await prisma.customerRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerRecordClient<$Result.GetResult<Prisma.$CustomerRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerRecords
     * const customerRecords = await prisma.customerRecord.findMany()
     * 
     * // Get first 10 CustomerRecords
     * const customerRecords = await prisma.customerRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerRecordWithIdOnly = await prisma.customerRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerRecordFindManyArgs>(args?: SelectSubset<T, CustomerRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerRecord.
     * @param {CustomerRecordCreateArgs} args - Arguments to create a CustomerRecord.
     * @example
     * // Create one CustomerRecord
     * const CustomerRecord = await prisma.customerRecord.create({
     *   data: {
     *     // ... data to create a CustomerRecord
     *   }
     * })
     * 
     */
    create<T extends CustomerRecordCreateArgs>(args: SelectSubset<T, CustomerRecordCreateArgs<ExtArgs>>): Prisma__CustomerRecordClient<$Result.GetResult<Prisma.$CustomerRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerRecords.
     * @param {CustomerRecordCreateManyArgs} args - Arguments to create many CustomerRecords.
     * @example
     * // Create many CustomerRecords
     * const customerRecord = await prisma.customerRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerRecordCreateManyArgs>(args?: SelectSubset<T, CustomerRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomerRecord.
     * @param {CustomerRecordDeleteArgs} args - Arguments to delete one CustomerRecord.
     * @example
     * // Delete one CustomerRecord
     * const CustomerRecord = await prisma.customerRecord.delete({
     *   where: {
     *     // ... filter to delete one CustomerRecord
     *   }
     * })
     * 
     */
    delete<T extends CustomerRecordDeleteArgs>(args: SelectSubset<T, CustomerRecordDeleteArgs<ExtArgs>>): Prisma__CustomerRecordClient<$Result.GetResult<Prisma.$CustomerRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerRecord.
     * @param {CustomerRecordUpdateArgs} args - Arguments to update one CustomerRecord.
     * @example
     * // Update one CustomerRecord
     * const customerRecord = await prisma.customerRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerRecordUpdateArgs>(args: SelectSubset<T, CustomerRecordUpdateArgs<ExtArgs>>): Prisma__CustomerRecordClient<$Result.GetResult<Prisma.$CustomerRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerRecords.
     * @param {CustomerRecordDeleteManyArgs} args - Arguments to filter CustomerRecords to delete.
     * @example
     * // Delete a few CustomerRecords
     * const { count } = await prisma.customerRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerRecordDeleteManyArgs>(args?: SelectSubset<T, CustomerRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerRecords
     * const customerRecord = await prisma.customerRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerRecordUpdateManyArgs>(args: SelectSubset<T, CustomerRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerRecord.
     * @param {CustomerRecordUpsertArgs} args - Arguments to update or create a CustomerRecord.
     * @example
     * // Update or create a CustomerRecord
     * const customerRecord = await prisma.customerRecord.upsert({
     *   create: {
     *     // ... data to create a CustomerRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerRecord we want to update
     *   }
     * })
     */
    upsert<T extends CustomerRecordUpsertArgs>(args: SelectSubset<T, CustomerRecordUpsertArgs<ExtArgs>>): Prisma__CustomerRecordClient<$Result.GetResult<Prisma.$CustomerRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRecordCountArgs} args - Arguments to filter CustomerRecords to count.
     * @example
     * // Count the number of CustomerRecords
     * const count = await prisma.customerRecord.count({
     *   where: {
     *     // ... the filter for the CustomerRecords we want to count
     *   }
     * })
    **/
    count<T extends CustomerRecordCountArgs>(
      args?: Subset<T, CustomerRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerRecordAggregateArgs>(args: Subset<T, CustomerRecordAggregateArgs>): Prisma.PrismaPromise<GetCustomerRecordAggregateType<T>>

    /**
     * Group by CustomerRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRecordGroupByArgs} args - Group by arguments.
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
      T extends CustomerRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerRecordGroupByArgs['orderBy'] }
        : { orderBy?: CustomerRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerRecord model
   */
  readonly fields: CustomerRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    code<T extends CodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CodeDefaultArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerRecord model
   */
  interface CustomerRecordFieldRefs {
    readonly id: FieldRef<"CustomerRecord", 'Int'>
    readonly name: FieldRef<"CustomerRecord", 'String'>
    readonly phone: FieldRef<"CustomerRecord", 'String'>
    readonly codeId: FieldRef<"CustomerRecord", 'Int'>
    readonly outletName: FieldRef<"CustomerRecord", 'String'>
    readonly createdAt: FieldRef<"CustomerRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerRecord findUnique
   */
  export type CustomerRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRecord
     */
    select?: CustomerRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRecord
     */
    omit?: CustomerRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRecordInclude<ExtArgs> | null
    /**
     * Filter, which CustomerRecord to fetch.
     */
    where: CustomerRecordWhereUniqueInput
  }

  /**
   * CustomerRecord findUniqueOrThrow
   */
  export type CustomerRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRecord
     */
    select?: CustomerRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRecord
     */
    omit?: CustomerRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRecordInclude<ExtArgs> | null
    /**
     * Filter, which CustomerRecord to fetch.
     */
    where: CustomerRecordWhereUniqueInput
  }

  /**
   * CustomerRecord findFirst
   */
  export type CustomerRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRecord
     */
    select?: CustomerRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRecord
     */
    omit?: CustomerRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRecordInclude<ExtArgs> | null
    /**
     * Filter, which CustomerRecord to fetch.
     */
    where?: CustomerRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerRecords to fetch.
     */
    orderBy?: CustomerRecordOrderByWithRelationInput | CustomerRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerRecords.
     */
    cursor?: CustomerRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerRecords.
     */
    distinct?: CustomerRecordScalarFieldEnum | CustomerRecordScalarFieldEnum[]
  }

  /**
   * CustomerRecord findFirstOrThrow
   */
  export type CustomerRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRecord
     */
    select?: CustomerRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRecord
     */
    omit?: CustomerRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRecordInclude<ExtArgs> | null
    /**
     * Filter, which CustomerRecord to fetch.
     */
    where?: CustomerRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerRecords to fetch.
     */
    orderBy?: CustomerRecordOrderByWithRelationInput | CustomerRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerRecords.
     */
    cursor?: CustomerRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerRecords.
     */
    distinct?: CustomerRecordScalarFieldEnum | CustomerRecordScalarFieldEnum[]
  }

  /**
   * CustomerRecord findMany
   */
  export type CustomerRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRecord
     */
    select?: CustomerRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRecord
     */
    omit?: CustomerRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRecordInclude<ExtArgs> | null
    /**
     * Filter, which CustomerRecords to fetch.
     */
    where?: CustomerRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerRecords to fetch.
     */
    orderBy?: CustomerRecordOrderByWithRelationInput | CustomerRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerRecords.
     */
    cursor?: CustomerRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerRecords.
     */
    skip?: number
    distinct?: CustomerRecordScalarFieldEnum | CustomerRecordScalarFieldEnum[]
  }

  /**
   * CustomerRecord create
   */
  export type CustomerRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRecord
     */
    select?: CustomerRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRecord
     */
    omit?: CustomerRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerRecord.
     */
    data: XOR<CustomerRecordCreateInput, CustomerRecordUncheckedCreateInput>
  }

  /**
   * CustomerRecord createMany
   */
  export type CustomerRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerRecords.
     */
    data: CustomerRecordCreateManyInput | CustomerRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerRecord update
   */
  export type CustomerRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRecord
     */
    select?: CustomerRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRecord
     */
    omit?: CustomerRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerRecord.
     */
    data: XOR<CustomerRecordUpdateInput, CustomerRecordUncheckedUpdateInput>
    /**
     * Choose, which CustomerRecord to update.
     */
    where: CustomerRecordWhereUniqueInput
  }

  /**
   * CustomerRecord updateMany
   */
  export type CustomerRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerRecords.
     */
    data: XOR<CustomerRecordUpdateManyMutationInput, CustomerRecordUncheckedUpdateManyInput>
    /**
     * Filter which CustomerRecords to update
     */
    where?: CustomerRecordWhereInput
    /**
     * Limit how many CustomerRecords to update.
     */
    limit?: number
  }

  /**
   * CustomerRecord upsert
   */
  export type CustomerRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRecord
     */
    select?: CustomerRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRecord
     */
    omit?: CustomerRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerRecord to update in case it exists.
     */
    where: CustomerRecordWhereUniqueInput
    /**
     * In case the CustomerRecord found by the `where` argument doesn't exist, create a new CustomerRecord with this data.
     */
    create: XOR<CustomerRecordCreateInput, CustomerRecordUncheckedCreateInput>
    /**
     * In case the CustomerRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerRecordUpdateInput, CustomerRecordUncheckedUpdateInput>
  }

  /**
   * CustomerRecord delete
   */
  export type CustomerRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRecord
     */
    select?: CustomerRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRecord
     */
    omit?: CustomerRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRecordInclude<ExtArgs> | null
    /**
     * Filter which CustomerRecord to delete.
     */
    where: CustomerRecordWhereUniqueInput
  }

  /**
   * CustomerRecord deleteMany
   */
  export type CustomerRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerRecords to delete
     */
    where?: CustomerRecordWhereInput
    /**
     * Limit how many CustomerRecords to delete.
     */
    limit?: number
  }

  /**
   * CustomerRecord without action
   */
  export type CustomerRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRecord
     */
    select?: CustomerRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRecord
     */
    omit?: CustomerRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRecordInclude<ExtArgs> | null
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


  export const CodeScalarFieldEnum: {
    id: 'id',
    prizeName: 'prizeName',
    code: 'code',
    used: 'used',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CodeScalarFieldEnum = (typeof CodeScalarFieldEnum)[keyof typeof CodeScalarFieldEnum]


  export const CustomerRecordScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    codeId: 'codeId',
    outletName: 'outletName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerRecordScalarFieldEnum = (typeof CustomerRecordScalarFieldEnum)[keyof typeof CustomerRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const CodeOrderByRelevanceFieldEnum: {
    prizeName: 'prizeName',
    code: 'code'
  };

  export type CodeOrderByRelevanceFieldEnum = (typeof CodeOrderByRelevanceFieldEnum)[keyof typeof CodeOrderByRelevanceFieldEnum]


  export const CustomerRecordOrderByRelevanceFieldEnum: {
    name: 'name',
    phone: 'phone',
    outletName: 'outletName'
  };

  export type CustomerRecordOrderByRelevanceFieldEnum = (typeof CustomerRecordOrderByRelevanceFieldEnum)[keyof typeof CustomerRecordOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CodeWhereInput = {
    AND?: CodeWhereInput | CodeWhereInput[]
    OR?: CodeWhereInput[]
    NOT?: CodeWhereInput | CodeWhereInput[]
    id?: IntFilter<"Code"> | number
    prizeName?: StringFilter<"Code"> | string
    code?: StringFilter<"Code"> | string
    used?: BoolFilter<"Code"> | boolean
    createdAt?: DateTimeFilter<"Code"> | Date | string
    updatedAt?: DateTimeFilter<"Code"> | Date | string
    CustomerRecord?: CustomerRecordListRelationFilter
  }

  export type CodeOrderByWithRelationInput = {
    id?: SortOrder
    prizeName?: SortOrder
    code?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    CustomerRecord?: CustomerRecordOrderByRelationAggregateInput
    _relevance?: CodeOrderByRelevanceInput
  }

  export type CodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: CodeWhereInput | CodeWhereInput[]
    OR?: CodeWhereInput[]
    NOT?: CodeWhereInput | CodeWhereInput[]
    prizeName?: StringFilter<"Code"> | string
    used?: BoolFilter<"Code"> | boolean
    createdAt?: DateTimeFilter<"Code"> | Date | string
    updatedAt?: DateTimeFilter<"Code"> | Date | string
    CustomerRecord?: CustomerRecordListRelationFilter
  }, "id" | "code">

  export type CodeOrderByWithAggregationInput = {
    id?: SortOrder
    prizeName?: SortOrder
    code?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CodeCountOrderByAggregateInput
    _avg?: CodeAvgOrderByAggregateInput
    _max?: CodeMaxOrderByAggregateInput
    _min?: CodeMinOrderByAggregateInput
    _sum?: CodeSumOrderByAggregateInput
  }

  export type CodeScalarWhereWithAggregatesInput = {
    AND?: CodeScalarWhereWithAggregatesInput | CodeScalarWhereWithAggregatesInput[]
    OR?: CodeScalarWhereWithAggregatesInput[]
    NOT?: CodeScalarWhereWithAggregatesInput | CodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Code"> | number
    prizeName?: StringWithAggregatesFilter<"Code"> | string
    code?: StringWithAggregatesFilter<"Code"> | string
    used?: BoolWithAggregatesFilter<"Code"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Code"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Code"> | Date | string
  }

  export type CustomerRecordWhereInput = {
    AND?: CustomerRecordWhereInput | CustomerRecordWhereInput[]
    OR?: CustomerRecordWhereInput[]
    NOT?: CustomerRecordWhereInput | CustomerRecordWhereInput[]
    id?: IntFilter<"CustomerRecord"> | number
    name?: StringFilter<"CustomerRecord"> | string
    phone?: StringFilter<"CustomerRecord"> | string
    codeId?: IntFilter<"CustomerRecord"> | number
    outletName?: StringFilter<"CustomerRecord"> | string
    createdAt?: DateTimeFilter<"CustomerRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerRecord"> | Date | string
    code?: XOR<CodeScalarRelationFilter, CodeWhereInput>
  }

  export type CustomerRecordOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    codeId?: SortOrder
    outletName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    code?: CodeOrderByWithRelationInput
    _relevance?: CustomerRecordOrderByRelevanceInput
  }

  export type CustomerRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerRecordWhereInput | CustomerRecordWhereInput[]
    OR?: CustomerRecordWhereInput[]
    NOT?: CustomerRecordWhereInput | CustomerRecordWhereInput[]
    name?: StringFilter<"CustomerRecord"> | string
    phone?: StringFilter<"CustomerRecord"> | string
    codeId?: IntFilter<"CustomerRecord"> | number
    outletName?: StringFilter<"CustomerRecord"> | string
    createdAt?: DateTimeFilter<"CustomerRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerRecord"> | Date | string
    code?: XOR<CodeScalarRelationFilter, CodeWhereInput>
  }, "id">

  export type CustomerRecordOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    codeId?: SortOrder
    outletName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerRecordCountOrderByAggregateInput
    _avg?: CustomerRecordAvgOrderByAggregateInput
    _max?: CustomerRecordMaxOrderByAggregateInput
    _min?: CustomerRecordMinOrderByAggregateInput
    _sum?: CustomerRecordSumOrderByAggregateInput
  }

  export type CustomerRecordScalarWhereWithAggregatesInput = {
    AND?: CustomerRecordScalarWhereWithAggregatesInput | CustomerRecordScalarWhereWithAggregatesInput[]
    OR?: CustomerRecordScalarWhereWithAggregatesInput[]
    NOT?: CustomerRecordScalarWhereWithAggregatesInput | CustomerRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerRecord"> | number
    name?: StringWithAggregatesFilter<"CustomerRecord"> | string
    phone?: StringWithAggregatesFilter<"CustomerRecord"> | string
    codeId?: IntWithAggregatesFilter<"CustomerRecord"> | number
    outletName?: StringWithAggregatesFilter<"CustomerRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CustomerRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerRecord"> | Date | string
  }

  export type CodeCreateInput = {
    prizeName: string
    code: string
    used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerRecord?: CustomerRecordCreateNestedManyWithoutCodeInput
  }

  export type CodeUncheckedCreateInput = {
    id?: number
    prizeName: string
    code: string
    used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    CustomerRecord?: CustomerRecordUncheckedCreateNestedManyWithoutCodeInput
  }

  export type CodeUpdateInput = {
    prizeName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerRecord?: CustomerRecordUpdateManyWithoutCodeNestedInput
  }

  export type CodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prizeName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CustomerRecord?: CustomerRecordUncheckedUpdateManyWithoutCodeNestedInput
  }

  export type CodeCreateManyInput = {
    id?: number
    prizeName: string
    code: string
    used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeUpdateManyMutationInput = {
    prizeName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prizeName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerRecordCreateInput = {
    name: string
    phone: string
    outletName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    code: CodeCreateNestedOneWithoutCustomerRecordInput
  }

  export type CustomerRecordUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    codeId: number
    outletName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerRecordUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: CodeUpdateOneRequiredWithoutCustomerRecordNestedInput
  }

  export type CustomerRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    codeId?: IntFieldUpdateOperationsInput | number
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerRecordCreateManyInput = {
    id?: number
    name: string
    phone: string
    codeId: number
    outletName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerRecordUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    codeId?: IntFieldUpdateOperationsInput | number
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerRecordListRelationFilter = {
    every?: CustomerRecordWhereInput
    some?: CustomerRecordWhereInput
    none?: CustomerRecordWhereInput
  }

  export type CustomerRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodeOrderByRelevanceInput = {
    fields: CodeOrderByRelevanceFieldEnum | CodeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CodeCountOrderByAggregateInput = {
    id?: SortOrder
    prizeName?: SortOrder
    code?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CodeMaxOrderByAggregateInput = {
    id?: SortOrder
    prizeName?: SortOrder
    code?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeMinOrderByAggregateInput = {
    id?: SortOrder
    prizeName?: SortOrder
    code?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CodeScalarRelationFilter = {
    is?: CodeWhereInput
    isNot?: CodeWhereInput
  }

  export type CustomerRecordOrderByRelevanceInput = {
    fields: CustomerRecordOrderByRelevanceFieldEnum | CustomerRecordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerRecordCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    codeId?: SortOrder
    outletName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    codeId?: SortOrder
  }

  export type CustomerRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    codeId?: SortOrder
    outletName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerRecordMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    codeId?: SortOrder
    outletName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerRecordSumOrderByAggregateInput = {
    id?: SortOrder
    codeId?: SortOrder
  }

  export type CustomerRecordCreateNestedManyWithoutCodeInput = {
    create?: XOR<CustomerRecordCreateWithoutCodeInput, CustomerRecordUncheckedCreateWithoutCodeInput> | CustomerRecordCreateWithoutCodeInput[] | CustomerRecordUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: CustomerRecordCreateOrConnectWithoutCodeInput | CustomerRecordCreateOrConnectWithoutCodeInput[]
    createMany?: CustomerRecordCreateManyCodeInputEnvelope
    connect?: CustomerRecordWhereUniqueInput | CustomerRecordWhereUniqueInput[]
  }

  export type CustomerRecordUncheckedCreateNestedManyWithoutCodeInput = {
    create?: XOR<CustomerRecordCreateWithoutCodeInput, CustomerRecordUncheckedCreateWithoutCodeInput> | CustomerRecordCreateWithoutCodeInput[] | CustomerRecordUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: CustomerRecordCreateOrConnectWithoutCodeInput | CustomerRecordCreateOrConnectWithoutCodeInput[]
    createMany?: CustomerRecordCreateManyCodeInputEnvelope
    connect?: CustomerRecordWhereUniqueInput | CustomerRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerRecordUpdateManyWithoutCodeNestedInput = {
    create?: XOR<CustomerRecordCreateWithoutCodeInput, CustomerRecordUncheckedCreateWithoutCodeInput> | CustomerRecordCreateWithoutCodeInput[] | CustomerRecordUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: CustomerRecordCreateOrConnectWithoutCodeInput | CustomerRecordCreateOrConnectWithoutCodeInput[]
    upsert?: CustomerRecordUpsertWithWhereUniqueWithoutCodeInput | CustomerRecordUpsertWithWhereUniqueWithoutCodeInput[]
    createMany?: CustomerRecordCreateManyCodeInputEnvelope
    set?: CustomerRecordWhereUniqueInput | CustomerRecordWhereUniqueInput[]
    disconnect?: CustomerRecordWhereUniqueInput | CustomerRecordWhereUniqueInput[]
    delete?: CustomerRecordWhereUniqueInput | CustomerRecordWhereUniqueInput[]
    connect?: CustomerRecordWhereUniqueInput | CustomerRecordWhereUniqueInput[]
    update?: CustomerRecordUpdateWithWhereUniqueWithoutCodeInput | CustomerRecordUpdateWithWhereUniqueWithoutCodeInput[]
    updateMany?: CustomerRecordUpdateManyWithWhereWithoutCodeInput | CustomerRecordUpdateManyWithWhereWithoutCodeInput[]
    deleteMany?: CustomerRecordScalarWhereInput | CustomerRecordScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerRecordUncheckedUpdateManyWithoutCodeNestedInput = {
    create?: XOR<CustomerRecordCreateWithoutCodeInput, CustomerRecordUncheckedCreateWithoutCodeInput> | CustomerRecordCreateWithoutCodeInput[] | CustomerRecordUncheckedCreateWithoutCodeInput[]
    connectOrCreate?: CustomerRecordCreateOrConnectWithoutCodeInput | CustomerRecordCreateOrConnectWithoutCodeInput[]
    upsert?: CustomerRecordUpsertWithWhereUniqueWithoutCodeInput | CustomerRecordUpsertWithWhereUniqueWithoutCodeInput[]
    createMany?: CustomerRecordCreateManyCodeInputEnvelope
    set?: CustomerRecordWhereUniqueInput | CustomerRecordWhereUniqueInput[]
    disconnect?: CustomerRecordWhereUniqueInput | CustomerRecordWhereUniqueInput[]
    delete?: CustomerRecordWhereUniqueInput | CustomerRecordWhereUniqueInput[]
    connect?: CustomerRecordWhereUniqueInput | CustomerRecordWhereUniqueInput[]
    update?: CustomerRecordUpdateWithWhereUniqueWithoutCodeInput | CustomerRecordUpdateWithWhereUniqueWithoutCodeInput[]
    updateMany?: CustomerRecordUpdateManyWithWhereWithoutCodeInput | CustomerRecordUpdateManyWithWhereWithoutCodeInput[]
    deleteMany?: CustomerRecordScalarWhereInput | CustomerRecordScalarWhereInput[]
  }

  export type CodeCreateNestedOneWithoutCustomerRecordInput = {
    create?: XOR<CodeCreateWithoutCustomerRecordInput, CodeUncheckedCreateWithoutCustomerRecordInput>
    connectOrCreate?: CodeCreateOrConnectWithoutCustomerRecordInput
    connect?: CodeWhereUniqueInput
  }

  export type CodeUpdateOneRequiredWithoutCustomerRecordNestedInput = {
    create?: XOR<CodeCreateWithoutCustomerRecordInput, CodeUncheckedCreateWithoutCustomerRecordInput>
    connectOrCreate?: CodeCreateOrConnectWithoutCustomerRecordInput
    upsert?: CodeUpsertWithoutCustomerRecordInput
    connect?: CodeWhereUniqueInput
    update?: XOR<XOR<CodeUpdateToOneWithWhereWithoutCustomerRecordInput, CodeUpdateWithoutCustomerRecordInput>, CodeUncheckedUpdateWithoutCustomerRecordInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CustomerRecordCreateWithoutCodeInput = {
    name: string
    phone: string
    outletName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerRecordUncheckedCreateWithoutCodeInput = {
    id?: number
    name: string
    phone: string
    outletName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerRecordCreateOrConnectWithoutCodeInput = {
    where: CustomerRecordWhereUniqueInput
    create: XOR<CustomerRecordCreateWithoutCodeInput, CustomerRecordUncheckedCreateWithoutCodeInput>
  }

  export type CustomerRecordCreateManyCodeInputEnvelope = {
    data: CustomerRecordCreateManyCodeInput | CustomerRecordCreateManyCodeInput[]
    skipDuplicates?: boolean
  }

  export type CustomerRecordUpsertWithWhereUniqueWithoutCodeInput = {
    where: CustomerRecordWhereUniqueInput
    update: XOR<CustomerRecordUpdateWithoutCodeInput, CustomerRecordUncheckedUpdateWithoutCodeInput>
    create: XOR<CustomerRecordCreateWithoutCodeInput, CustomerRecordUncheckedCreateWithoutCodeInput>
  }

  export type CustomerRecordUpdateWithWhereUniqueWithoutCodeInput = {
    where: CustomerRecordWhereUniqueInput
    data: XOR<CustomerRecordUpdateWithoutCodeInput, CustomerRecordUncheckedUpdateWithoutCodeInput>
  }

  export type CustomerRecordUpdateManyWithWhereWithoutCodeInput = {
    where: CustomerRecordScalarWhereInput
    data: XOR<CustomerRecordUpdateManyMutationInput, CustomerRecordUncheckedUpdateManyWithoutCodeInput>
  }

  export type CustomerRecordScalarWhereInput = {
    AND?: CustomerRecordScalarWhereInput | CustomerRecordScalarWhereInput[]
    OR?: CustomerRecordScalarWhereInput[]
    NOT?: CustomerRecordScalarWhereInput | CustomerRecordScalarWhereInput[]
    id?: IntFilter<"CustomerRecord"> | number
    name?: StringFilter<"CustomerRecord"> | string
    phone?: StringFilter<"CustomerRecord"> | string
    codeId?: IntFilter<"CustomerRecord"> | number
    outletName?: StringFilter<"CustomerRecord"> | string
    createdAt?: DateTimeFilter<"CustomerRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerRecord"> | Date | string
  }

  export type CodeCreateWithoutCustomerRecordInput = {
    prizeName: string
    code: string
    used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeUncheckedCreateWithoutCustomerRecordInput = {
    id?: number
    prizeName: string
    code: string
    used?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeCreateOrConnectWithoutCustomerRecordInput = {
    where: CodeWhereUniqueInput
    create: XOR<CodeCreateWithoutCustomerRecordInput, CodeUncheckedCreateWithoutCustomerRecordInput>
  }

  export type CodeUpsertWithoutCustomerRecordInput = {
    update: XOR<CodeUpdateWithoutCustomerRecordInput, CodeUncheckedUpdateWithoutCustomerRecordInput>
    create: XOR<CodeCreateWithoutCustomerRecordInput, CodeUncheckedCreateWithoutCustomerRecordInput>
    where?: CodeWhereInput
  }

  export type CodeUpdateToOneWithWhereWithoutCustomerRecordInput = {
    where?: CodeWhereInput
    data: XOR<CodeUpdateWithoutCustomerRecordInput, CodeUncheckedUpdateWithoutCustomerRecordInput>
  }

  export type CodeUpdateWithoutCustomerRecordInput = {
    prizeName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeUncheckedUpdateWithoutCustomerRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    prizeName?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerRecordCreateManyCodeInput = {
    id?: number
    name: string
    phone: string
    outletName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerRecordUpdateWithoutCodeInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerRecordUncheckedUpdateWithoutCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerRecordUncheckedUpdateManyWithoutCodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    outletName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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