/**
 * Client
 **/

import * as runtime from "./runtime/library";
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P;
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}`
    ? Tuple[K] extends Prisma.PrismaPromise<infer X>
      ? X
      : UnwrapPromise<Tuple[K]>
    : UnwrapPromise<Tuple[K]>;
};

/**
 * Model Post
 *
 */
export type Post = {
  id: string;
  title: string;
  text: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  content: string | null;
  published: boolean;
  userId: string;
};

/**
 * Model User
 *
 */
export type User = {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
};

/**
 * Model FeedRss
 *
 */
export type FeedRss = {
  id: string;
  title: string | null;
  name: string | null;
  description: string | null;
  img_url: string | null;
  pubDate: string | null;
  media: string | null;
  categories: string[];
  link: string | null;
  source: string | null;
};

/**
 * Model RssNews
 *
 */
export type RssNews = {
  id: string;
  title: string | null;
  name: string | null;
  description: string | null;
  img_url: string | null;
  pubDate: string | null;
  media: string | null;
  categories: string[];
  link: string | null;
  source: string | null;
};

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof T
    ? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T["log"]>
      : never
    : never,
  GlobalReject extends
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined = "rejectOnNotFound" extends keyof T
    ? T["rejectOnNotFound"]
    : false
> {
  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U | "beforeExit">(
    eventType: V,
    callback: (
      event: V extends "query"
        ? Prisma.QueryEvent
        : V extends "beforeExit"
        ? () => Promise<void>
        : Prisma.LogEvent
    ) => void
  ): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P]
  ): Promise<UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<
        this,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use"
      >
    ) => Promise<R>,
    options?: { maxWait?: number; timeout?: number }
  ): Promise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(
    command: Prisma.InputJsonObject
  ): Prisma.PrismaPromise<Prisma.JsonObject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.feedRss`: Exposes CRUD operations for the **FeedRss** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more FeedRsses
   * const feedRsses = await prisma.feedRss.findMany()
   * ```
   */
  get feedRss(): Prisma.FeedRssDelegate<GlobalReject>;

  /**
   * `prisma.rssNews`: Exposes CRUD operations for the **RssNews** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RssNews
   * const rssNews = await prisma.rssNews.findMany()
   * ```
   */
  get rssNews(): Prisma.RssNewsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

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
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };
  type HasSelect = {
    select: any;
  };
  type HasInclude = {
    include: any;
  };
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? "Please either choose `select` or `include`"
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S;

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> =
    PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(
    select: runtime.Types.Utils.LegacyExact<S, V>
  ) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<
    T,
    TupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Post: "Post";
    User: "User";
    FeedRss: "FeedRss";
    RssNews: "RssNews";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  export type DefaultPrismaClient = PrismaClient;
  export type RejectOnNotFound = boolean | ((error: Error) => Error);
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound };
  export type RejectPerOperation = {
    [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound;
  };
  type IsReject<T> = T extends true
    ? True
    : T extends (err: Error) => Error
    ? True
    : False;
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions["rejectOnNotFound"],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null.
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>;
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findMany"
    | "findFirst"
    | "create"
    | "createMany"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>
  ) => Promise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    "$connect" | "$disconnect" | "$on" | "$transaction" | "$use"
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number;
  };

  export type UserCountOutputTypeSelect = {
    posts?: boolean;
  };

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & UserCountOutputTypeArgs
    ? UserCountOutputType
    : S extends { select: any } & UserCountOutputTypeArgs
    ? {
        [P in TruthyKeys<S["select"]>]: P extends keyof UserCountOutputType
          ? UserCountOutputType[P]
          : never;
      }
    : UserCountOutputType;

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null;
  };

  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  export type PostMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    text: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    content: string | null;
    published: boolean | null;
    userId: string | null;
  };

  export type PostMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    text: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    content: string | null;
    published: boolean | null;
    userId: string | null;
  };

  export type PostCountAggregateOutputType = {
    id: number;
    title: number;
    text: number;
    createdAt: number;
    updatedAt: number;
    content: number;
    published: number;
    userId: number;
    _all: number;
  };

  export type PostMinAggregateInputType = {
    id?: true;
    title?: true;
    text?: true;
    createdAt?: true;
    updatedAt?: true;
    content?: true;
    published?: true;
    userId?: true;
  };

  export type PostMaxAggregateInputType = {
    id?: true;
    title?: true;
    text?: true;
    createdAt?: true;
    updatedAt?: true;
    content?: true;
    published?: true;
    userId?: true;
  };

  export type PostCountAggregateInputType = {
    id?: true;
    title?: true;
    text?: true;
    createdAt?: true;
    updatedAt?: true;
    content?: true;
    published?: true;
    userId?: true;
    _all?: true;
  };

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posts
     **/
    _count?: true | PostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PostMaxAggregateInputType;
  };

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>;
  };

  export type PostGroupByArgs = {
    where?: PostWhereInput;
    orderBy?: Enumerable<PostOrderByWithAggregationInput>;
    by: PostScalarFieldEnum[];
    having?: PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostCountAggregateInputType | true;
    _min?: PostMinAggregateInputType;
    _max?: PostMaxAggregateInputType;
  };

  export type PostGroupByOutputType = {
    id: string;
    title: string;
    text: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    content: string | null;
    published: boolean;
    userId: string;
    _count: PostCountAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PostGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof PostGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PostGroupByOutputType[P]>
          : GetScalarType<T[P], PostGroupByOutputType[P]>;
      }
    >
  >;

  export type PostSelect = {
    id?: boolean;
    title?: boolean;
    text?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    content?: boolean;
    published?: boolean;
    userId?: boolean;
    author?: boolean | UserArgs;
  };

  export type PostInclude = {
    author?: boolean | UserArgs;
  };

  export type PostGetPayload<S extends boolean | null | undefined | PostArgs> =
    S extends { select: any; include: any }
      ? "Please either choose `select` or `include`"
      : S extends true
      ? Post
      : S extends undefined
      ? never
      : S extends { include: any } & (PostArgs | PostFindManyArgs)
      ? Post & {
          [P in TruthyKeys<S["include"]>]: P extends "author"
            ? UserGetPayload<S["include"][P]>
            : never;
        }
      : S extends { select: any } & (PostArgs | PostFindManyArgs)
      ? {
          [P in TruthyKeys<S["select"]>]: P extends "author"
            ? UserGetPayload<S["select"][P]>
            : P extends keyof Post
            ? Post[P]
            : never;
        }
      : Post;

  type PostCountArgs = Omit<PostFindManyArgs, "select" | "include"> & {
    select?: PostCountAggregateInputType | true;
  };

  export interface PostDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends PostFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "Post"
    > extends True
      ? Prisma__PostClient<PostGetPayload<T>>
      : Prisma__PostClient<PostGetPayload<T> | null, null>;

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>;

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends PostFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "Post"
    > extends True
      ? Prisma__PostClient<PostGetPayload<T>>
      : Prisma__PostClient<PostGetPayload<T> | null, null>;

    /**
     * Find the first Post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>;

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     *
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): Prisma.PrismaPromise<Array<PostGetPayload<T>>>;

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     *
     **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>;

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     *
     **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): Prisma__PostClient<PostGetPayload<T>>;

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>;

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): Prisma__PostClient<PostGetPayload<T>>;

    /**
     * Find zero or more Posts that matches the filter.
     * @param {PostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const post = await prisma.post.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: PostFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Post.
     * @param {PostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const post = await prisma.post.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(args?: PostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
     **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PostCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(
      args: Subset<T, PostAggregateArgs>
    ): Prisma.PrismaPromise<GetPostAggregateType<T>>;

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs["orderBy"] }
        : { orderBy?: PostGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetPostGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );

    author<T extends UserArgs = {}>(
      args?: Subset<T, UserArgs>
    ): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post base type for findUnique actions
   */
  export type PostFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findUnique
   */
  export interface PostFindUniqueArgs extends PostFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post base type for findFirst actions
   */
  export type PostFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: Enumerable<PostScalarFieldEnum>;
  };

  /**
   * Post findFirst
   */
  export interface PostFindFirstArgs extends PostFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: Enumerable<PostScalarFieldEnum>;
  };

  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null;
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    distinct?: Enumerable<PostScalarFieldEnum>;
  };

  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null;
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>;
  };

  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    /**
     * The data used to create many Posts.
     */
    data: Enumerable<PostCreateManyInput>;
  };

  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null;
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
  };

  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null;
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput;
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>;
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
  };

  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null;
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput;
  };

  /**
   * Post findRaw
   */
  export type PostFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Post aggregateRaw
   */
  export type PostAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    emailVerified: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    _all?: true;
  };

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs = {
    where?: UserWhereInput;
    orderBy?: Enumerable<UserOrderByWithAggregationInput>;
    by: UserScalarFieldEnum[];
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    name: string | null;
    email: string;
    emailVerified: Date | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    posts?: boolean | User$postsArgs;
    _count?: boolean | UserCountOutputTypeArgs;
  };

  export type UserInclude = {
    posts?: boolean | User$postsArgs;
    _count?: boolean | UserCountOutputTypeArgs;
  };

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any; include: any }
      ? "Please either choose `select` or `include`"
      : S extends true
      ? User
      : S extends undefined
      ? never
      : S extends { include: any } & (UserArgs | UserFindManyArgs)
      ? User & {
          [P in TruthyKeys<S["include"]>]: P extends "posts"
            ? Array<PostGetPayload<S["include"][P]>>
            : P extends "_count"
            ? UserCountOutputTypeGetPayload<S["include"][P]>
            : never;
        }
      : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
          [P in TruthyKeys<S["select"]>]: P extends "posts"
            ? Array<PostGetPayload<S["select"][P]>>
            : P extends "_count"
            ? UserCountOutputTypeGetPayload<S["select"][P]>
            : P extends keyof User
            ? User[P]
            : never;
        }
      : User;

  type UserCountArgs = Omit<UserFindManyArgs, "select" | "include"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends UserFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "User"
    > extends True
      ? Prisma__UserClient<UserGetPayload<T>>
      : Prisma__UserClient<UserGetPayload<T> | null, null>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends UserFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "User"
    > extends True
      ? Prisma__UserClient<UserGetPayload<T>>
      : Prisma__UserClient<UserGetPayload<T> | null, null>;

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>;

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>;

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );

    posts<T extends User$postsArgs = {}>(
      args?: Subset<T, User$postsArgs>
    ): Prisma.PrismaPromise<Array<PostGetPayload<T>> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>;
  };

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>;
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Enumerable<UserScalarFieldEnum>;
  };

  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>;
  };

  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User findRaw
   */
  export type UserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User.posts
   */
  export type User$postsArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null;
    where?: PostWhereInput;
    orderBy?: Enumerable<PostOrderByWithRelationInput>;
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<PostScalarFieldEnum>;
  };

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
  };

  /**
   * Model FeedRss
   */

  export type AggregateFeedRss = {
    _count: FeedRssCountAggregateOutputType | null;
    _min: FeedRssMinAggregateOutputType | null;
    _max: FeedRssMaxAggregateOutputType | null;
  };

  export type FeedRssMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    name: string | null;
    description: string | null;
    img_url: string | null;
    pubDate: string | null;
    media: string | null;
    link: string | null;
    source: string | null;
  };

  export type FeedRssMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    name: string | null;
    description: string | null;
    img_url: string | null;
    pubDate: string | null;
    media: string | null;
    link: string | null;
    source: string | null;
  };

  export type FeedRssCountAggregateOutputType = {
    id: number;
    title: number;
    name: number;
    description: number;
    img_url: number;
    pubDate: number;
    media: number;
    categories: number;
    link: number;
    source: number;
    _all: number;
  };

  export type FeedRssMinAggregateInputType = {
    id?: true;
    title?: true;
    name?: true;
    description?: true;
    img_url?: true;
    pubDate?: true;
    media?: true;
    link?: true;
    source?: true;
  };

  export type FeedRssMaxAggregateInputType = {
    id?: true;
    title?: true;
    name?: true;
    description?: true;
    img_url?: true;
    pubDate?: true;
    media?: true;
    link?: true;
    source?: true;
  };

  export type FeedRssCountAggregateInputType = {
    id?: true;
    title?: true;
    name?: true;
    description?: true;
    img_url?: true;
    pubDate?: true;
    media?: true;
    categories?: true;
    link?: true;
    source?: true;
    _all?: true;
  };

  export type FeedRssAggregateArgs = {
    /**
     * Filter which FeedRss to aggregate.
     */
    where?: FeedRssWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedRsses to fetch.
     */
    orderBy?: Enumerable<FeedRssOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FeedRssWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedRsses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedRsses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FeedRsses
     **/
    _count?: true | FeedRssCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FeedRssMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FeedRssMaxAggregateInputType;
  };

  export type GetFeedRssAggregateType<T extends FeedRssAggregateArgs> = {
    [P in keyof T & keyof AggregateFeedRss]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedRss[P]>
      : GetScalarType<T[P], AggregateFeedRss[P]>;
  };

  export type FeedRssGroupByArgs = {
    where?: FeedRssWhereInput;
    orderBy?: Enumerable<FeedRssOrderByWithAggregationInput>;
    by: FeedRssScalarFieldEnum[];
    having?: FeedRssScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeedRssCountAggregateInputType | true;
    _min?: FeedRssMinAggregateInputType;
    _max?: FeedRssMaxAggregateInputType;
  };

  export type FeedRssGroupByOutputType = {
    id: string;
    title: string | null;
    name: string | null;
    description: string | null;
    img_url: string | null;
    pubDate: string | null;
    media: string | null;
    categories: string[];
    link: string | null;
    source: string | null;
    _count: FeedRssCountAggregateOutputType | null;
    _min: FeedRssMinAggregateOutputType | null;
    _max: FeedRssMaxAggregateOutputType | null;
  };

  type GetFeedRssGroupByPayload<T extends FeedRssGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<FeedRssGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof FeedRssGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedRssGroupByOutputType[P]>
            : GetScalarType<T[P], FeedRssGroupByOutputType[P]>;
        }
      >
    >;

  export type FeedRssSelect = {
    id?: boolean;
    title?: boolean;
    name?: boolean;
    description?: boolean;
    img_url?: boolean;
    pubDate?: boolean;
    media?: boolean;
    categories?: boolean;
    link?: boolean;
    source?: boolean;
  };

  export type FeedRssGetPayload<
    S extends boolean | null | undefined | FeedRssArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? FeedRss
    : S extends undefined
    ? never
    : S extends { include: any } & (FeedRssArgs | FeedRssFindManyArgs)
    ? FeedRss
    : S extends { select: any } & (FeedRssArgs | FeedRssFindManyArgs)
    ? {
        [P in TruthyKeys<S["select"]>]: P extends keyof FeedRss
          ? FeedRss[P]
          : never;
      }
    : FeedRss;

  type FeedRssCountArgs = Omit<FeedRssFindManyArgs, "select" | "include"> & {
    select?: FeedRssCountAggregateInputType | true;
  };

  export interface FeedRssDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one FeedRss that matches the filter.
     * @param {FeedRssFindUniqueArgs} args - Arguments to find a FeedRss
     * @example
     * // Get one FeedRss
     * const feedRss = await prisma.feedRss.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends FeedRssFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, FeedRssFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "FeedRss"
    > extends True
      ? Prisma__FeedRssClient<FeedRssGetPayload<T>>
      : Prisma__FeedRssClient<FeedRssGetPayload<T> | null, null>;

    /**
     * Find one FeedRss that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {FeedRssFindUniqueOrThrowArgs} args - Arguments to find a FeedRss
     * @example
     * // Get one FeedRss
     * const feedRss = await prisma.feedRss.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends FeedRssFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FeedRssFindUniqueOrThrowArgs>
    ): Prisma__FeedRssClient<FeedRssGetPayload<T>>;

    /**
     * Find the first FeedRss that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedRssFindFirstArgs} args - Arguments to find a FeedRss
     * @example
     * // Get one FeedRss
     * const feedRss = await prisma.feedRss.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends FeedRssFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, FeedRssFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "FeedRss"
    > extends True
      ? Prisma__FeedRssClient<FeedRssGetPayload<T>>
      : Prisma__FeedRssClient<FeedRssGetPayload<T> | null, null>;

    /**
     * Find the first FeedRss that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedRssFindFirstOrThrowArgs} args - Arguments to find a FeedRss
     * @example
     * // Get one FeedRss
     * const feedRss = await prisma.feedRss.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends FeedRssFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FeedRssFindFirstOrThrowArgs>
    ): Prisma__FeedRssClient<FeedRssGetPayload<T>>;

    /**
     * Find zero or more FeedRsses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedRssFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedRsses
     * const feedRsses = await prisma.feedRss.findMany()
     *
     * // Get first 10 FeedRsses
     * const feedRsses = await prisma.feedRss.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const feedRssWithIdOnly = await prisma.feedRss.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends FeedRssFindManyArgs>(
      args?: SelectSubset<T, FeedRssFindManyArgs>
    ): Prisma.PrismaPromise<Array<FeedRssGetPayload<T>>>;

    /**
     * Create a FeedRss.
     * @param {FeedRssCreateArgs} args - Arguments to create a FeedRss.
     * @example
     * // Create one FeedRss
     * const FeedRss = await prisma.feedRss.create({
     *   data: {
     *     // ... data to create a FeedRss
     *   }
     * })
     *
     **/
    create<T extends FeedRssCreateArgs>(
      args: SelectSubset<T, FeedRssCreateArgs>
    ): Prisma__FeedRssClient<FeedRssGetPayload<T>>;

    /**
     * Create many FeedRsses.
     *     @param {FeedRssCreateManyArgs} args - Arguments to create many FeedRsses.
     *     @example
     *     // Create many FeedRsses
     *     const feedRss = await prisma.feedRss.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends FeedRssCreateManyArgs>(
      args?: SelectSubset<T, FeedRssCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a FeedRss.
     * @param {FeedRssDeleteArgs} args - Arguments to delete one FeedRss.
     * @example
     * // Delete one FeedRss
     * const FeedRss = await prisma.feedRss.delete({
     *   where: {
     *     // ... filter to delete one FeedRss
     *   }
     * })
     *
     **/
    delete<T extends FeedRssDeleteArgs>(
      args: SelectSubset<T, FeedRssDeleteArgs>
    ): Prisma__FeedRssClient<FeedRssGetPayload<T>>;

    /**
     * Update one FeedRss.
     * @param {FeedRssUpdateArgs} args - Arguments to update one FeedRss.
     * @example
     * // Update one FeedRss
     * const feedRss = await prisma.feedRss.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends FeedRssUpdateArgs>(
      args: SelectSubset<T, FeedRssUpdateArgs>
    ): Prisma__FeedRssClient<FeedRssGetPayload<T>>;

    /**
     * Delete zero or more FeedRsses.
     * @param {FeedRssDeleteManyArgs} args - Arguments to filter FeedRsses to delete.
     * @example
     * // Delete a few FeedRsses
     * const { count } = await prisma.feedRss.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends FeedRssDeleteManyArgs>(
      args?: SelectSubset<T, FeedRssDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FeedRsses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedRssUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedRsses
     * const feedRss = await prisma.feedRss.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends FeedRssUpdateManyArgs>(
      args: SelectSubset<T, FeedRssUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one FeedRss.
     * @param {FeedRssUpsertArgs} args - Arguments to update or create a FeedRss.
     * @example
     * // Update or create a FeedRss
     * const feedRss = await prisma.feedRss.upsert({
     *   create: {
     *     // ... data to create a FeedRss
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedRss we want to update
     *   }
     * })
     **/
    upsert<T extends FeedRssUpsertArgs>(
      args: SelectSubset<T, FeedRssUpsertArgs>
    ): Prisma__FeedRssClient<FeedRssGetPayload<T>>;

    /**
     * Find zero or more FeedRsses that matches the filter.
     * @param {FeedRssFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const feedRss = await prisma.feedRss.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: FeedRssFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a FeedRss.
     * @param {FeedRssAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const feedRss = await prisma.feedRss.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(
      args?: FeedRssAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of FeedRsses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedRssCountArgs} args - Arguments to filter FeedRsses to count.
     * @example
     * // Count the number of FeedRsses
     * const count = await prisma.feedRss.count({
     *   where: {
     *     // ... the filter for the FeedRsses we want to count
     *   }
     * })
     **/
    count<T extends FeedRssCountArgs>(
      args?: Subset<T, FeedRssCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], FeedRssCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a FeedRss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedRssAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedRssAggregateArgs>(
      args: Subset<T, FeedRssAggregateArgs>
    ): Prisma.PrismaPromise<GetFeedRssAggregateType<T>>;

    /**
     * Group by FeedRss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedRssGroupByArgs} args - Group by arguments.
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
      T extends FeedRssGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedRssGroupByArgs["orderBy"] }
        : { orderBy?: FeedRssGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, FeedRssGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetFeedRssGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedRss.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FeedRssClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FeedRss base type for findUnique actions
   */
  export type FeedRssFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FeedRss
     */
    select?: FeedRssSelect | null;
    /**
     * Filter, which FeedRss to fetch.
     */
    where: FeedRssWhereUniqueInput;
  };

  /**
   * FeedRss findUnique
   */
  export interface FeedRssFindUniqueArgs extends FeedRssFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * FeedRss findUniqueOrThrow
   */
  export type FeedRssFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FeedRss
     */
    select?: FeedRssSelect | null;
    /**
     * Filter, which FeedRss to fetch.
     */
    where: FeedRssWhereUniqueInput;
  };

  /**
   * FeedRss base type for findFirst actions
   */
  export type FeedRssFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FeedRss
     */
    select?: FeedRssSelect | null;
    /**
     * Filter, which FeedRss to fetch.
     */
    where?: FeedRssWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedRsses to fetch.
     */
    orderBy?: Enumerable<FeedRssOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeedRsses.
     */
    cursor?: FeedRssWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedRsses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedRsses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeedRsses.
     */
    distinct?: Enumerable<FeedRssScalarFieldEnum>;
  };

  /**
   * FeedRss findFirst
   */
  export interface FeedRssFindFirstArgs extends FeedRssFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * FeedRss findFirstOrThrow
   */
  export type FeedRssFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FeedRss
     */
    select?: FeedRssSelect | null;
    /**
     * Filter, which FeedRss to fetch.
     */
    where?: FeedRssWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedRsses to fetch.
     */
    orderBy?: Enumerable<FeedRssOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeedRsses.
     */
    cursor?: FeedRssWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedRsses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedRsses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeedRsses.
     */
    distinct?: Enumerable<FeedRssScalarFieldEnum>;
  };

  /**
   * FeedRss findMany
   */
  export type FeedRssFindManyArgs = {
    /**
     * Select specific fields to fetch from the FeedRss
     */
    select?: FeedRssSelect | null;
    /**
     * Filter, which FeedRsses to fetch.
     */
    where?: FeedRssWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeedRsses to fetch.
     */
    orderBy?: Enumerable<FeedRssOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FeedRsses.
     */
    cursor?: FeedRssWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeedRsses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeedRsses.
     */
    skip?: number;
    distinct?: Enumerable<FeedRssScalarFieldEnum>;
  };

  /**
   * FeedRss create
   */
  export type FeedRssCreateArgs = {
    /**
     * Select specific fields to fetch from the FeedRss
     */
    select?: FeedRssSelect | null;
    /**
     * The data needed to create a FeedRss.
     */
    data: XOR<FeedRssCreateInput, FeedRssUncheckedCreateInput>;
  };

  /**
   * FeedRss createMany
   */
  export type FeedRssCreateManyArgs = {
    /**
     * The data used to create many FeedRsses.
     */
    data: Enumerable<FeedRssCreateManyInput>;
  };

  /**
   * FeedRss update
   */
  export type FeedRssUpdateArgs = {
    /**
     * Select specific fields to fetch from the FeedRss
     */
    select?: FeedRssSelect | null;
    /**
     * The data needed to update a FeedRss.
     */
    data: XOR<FeedRssUpdateInput, FeedRssUncheckedUpdateInput>;
    /**
     * Choose, which FeedRss to update.
     */
    where: FeedRssWhereUniqueInput;
  };

  /**
   * FeedRss updateMany
   */
  export type FeedRssUpdateManyArgs = {
    /**
     * The data used to update FeedRsses.
     */
    data: XOR<FeedRssUpdateManyMutationInput, FeedRssUncheckedUpdateManyInput>;
    /**
     * Filter which FeedRsses to update
     */
    where?: FeedRssWhereInput;
  };

  /**
   * FeedRss upsert
   */
  export type FeedRssUpsertArgs = {
    /**
     * Select specific fields to fetch from the FeedRss
     */
    select?: FeedRssSelect | null;
    /**
     * The filter to search for the FeedRss to update in case it exists.
     */
    where: FeedRssWhereUniqueInput;
    /**
     * In case the FeedRss found by the `where` argument doesn't exist, create a new FeedRss with this data.
     */
    create: XOR<FeedRssCreateInput, FeedRssUncheckedCreateInput>;
    /**
     * In case the FeedRss was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedRssUpdateInput, FeedRssUncheckedUpdateInput>;
  };

  /**
   * FeedRss delete
   */
  export type FeedRssDeleteArgs = {
    /**
     * Select specific fields to fetch from the FeedRss
     */
    select?: FeedRssSelect | null;
    /**
     * Filter which FeedRss to delete.
     */
    where: FeedRssWhereUniqueInput;
  };

  /**
   * FeedRss deleteMany
   */
  export type FeedRssDeleteManyArgs = {
    /**
     * Filter which FeedRsses to delete
     */
    where?: FeedRssWhereInput;
  };

  /**
   * FeedRss findRaw
   */
  export type FeedRssFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * FeedRss aggregateRaw
   */
  export type FeedRssAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * FeedRss without action
   */
  export type FeedRssArgs = {
    /**
     * Select specific fields to fetch from the FeedRss
     */
    select?: FeedRssSelect | null;
  };

  /**
   * Model RssNews
   */

  export type AggregateRssNews = {
    _count: RssNewsCountAggregateOutputType | null;
    _min: RssNewsMinAggregateOutputType | null;
    _max: RssNewsMaxAggregateOutputType | null;
  };

  export type RssNewsMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    name: string | null;
    description: string | null;
    img_url: string | null;
    pubDate: string | null;
    media: string | null;
    link: string | null;
    source: string | null;
  };

  export type RssNewsMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    name: string | null;
    description: string | null;
    img_url: string | null;
    pubDate: string | null;
    media: string | null;
    link: string | null;
    source: string | null;
  };

  export type RssNewsCountAggregateOutputType = {
    id: number;
    title: number;
    name: number;
    description: number;
    img_url: number;
    pubDate: number;
    media: number;
    categories: number;
    link: number;
    source: number;
    _all: number;
  };

  export type RssNewsMinAggregateInputType = {
    id?: true;
    title?: true;
    name?: true;
    description?: true;
    img_url?: true;
    pubDate?: true;
    media?: true;
    link?: true;
    source?: true;
  };

  export type RssNewsMaxAggregateInputType = {
    id?: true;
    title?: true;
    name?: true;
    description?: true;
    img_url?: true;
    pubDate?: true;
    media?: true;
    link?: true;
    source?: true;
  };

  export type RssNewsCountAggregateInputType = {
    id?: true;
    title?: true;
    name?: true;
    description?: true;
    img_url?: true;
    pubDate?: true;
    media?: true;
    categories?: true;
    link?: true;
    source?: true;
    _all?: true;
  };

  export type RssNewsAggregateArgs = {
    /**
     * Filter which RssNews to aggregate.
     */
    where?: RssNewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RssNews to fetch.
     */
    orderBy?: Enumerable<RssNewsOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RssNewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RssNews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RssNews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RssNews
     **/
    _count?: true | RssNewsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RssNewsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RssNewsMaxAggregateInputType;
  };

  export type GetRssNewsAggregateType<T extends RssNewsAggregateArgs> = {
    [P in keyof T & keyof AggregateRssNews]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRssNews[P]>
      : GetScalarType<T[P], AggregateRssNews[P]>;
  };

  export type RssNewsGroupByArgs = {
    where?: RssNewsWhereInput;
    orderBy?: Enumerable<RssNewsOrderByWithAggregationInput>;
    by: RssNewsScalarFieldEnum[];
    having?: RssNewsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RssNewsCountAggregateInputType | true;
    _min?: RssNewsMinAggregateInputType;
    _max?: RssNewsMaxAggregateInputType;
  };

  export type RssNewsGroupByOutputType = {
    id: string;
    title: string | null;
    name: string | null;
    description: string | null;
    img_url: string | null;
    pubDate: string | null;
    media: string | null;
    categories: string[];
    link: string | null;
    source: string | null;
    _count: RssNewsCountAggregateOutputType | null;
    _min: RssNewsMinAggregateOutputType | null;
    _max: RssNewsMaxAggregateOutputType | null;
  };

  type GetRssNewsGroupByPayload<T extends RssNewsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<RssNewsGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof RssNewsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RssNewsGroupByOutputType[P]>
            : GetScalarType<T[P], RssNewsGroupByOutputType[P]>;
        }
      >
    >;

  export type RssNewsSelect = {
    id?: boolean;
    title?: boolean;
    name?: boolean;
    description?: boolean;
    img_url?: boolean;
    pubDate?: boolean;
    media?: boolean;
    categories?: boolean;
    link?: boolean;
    source?: boolean;
  };

  export type RssNewsGetPayload<
    S extends boolean | null | undefined | RssNewsArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? RssNews
    : S extends undefined
    ? never
    : S extends { include: any } & (RssNewsArgs | RssNewsFindManyArgs)
    ? RssNews
    : S extends { select: any } & (RssNewsArgs | RssNewsFindManyArgs)
    ? {
        [P in TruthyKeys<S["select"]>]: P extends keyof RssNews
          ? RssNews[P]
          : never;
      }
    : RssNews;

  type RssNewsCountArgs = Omit<RssNewsFindManyArgs, "select" | "include"> & {
    select?: RssNewsCountAggregateInputType | true;
  };

  export interface RssNewsDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one RssNews that matches the filter.
     * @param {RssNewsFindUniqueArgs} args - Arguments to find a RssNews
     * @example
     * // Get one RssNews
     * const rssNews = await prisma.rssNews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends RssNewsFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, RssNewsFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "RssNews"
    > extends True
      ? Prisma__RssNewsClient<RssNewsGetPayload<T>>
      : Prisma__RssNewsClient<RssNewsGetPayload<T> | null, null>;

    /**
     * Find one RssNews that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {RssNewsFindUniqueOrThrowArgs} args - Arguments to find a RssNews
     * @example
     * // Get one RssNews
     * const rssNews = await prisma.rssNews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends RssNewsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RssNewsFindUniqueOrThrowArgs>
    ): Prisma__RssNewsClient<RssNewsGetPayload<T>>;

    /**
     * Find the first RssNews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssNewsFindFirstArgs} args - Arguments to find a RssNews
     * @example
     * // Get one RssNews
     * const rssNews = await prisma.rssNews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends RssNewsFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, RssNewsFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "RssNews"
    > extends True
      ? Prisma__RssNewsClient<RssNewsGetPayload<T>>
      : Prisma__RssNewsClient<RssNewsGetPayload<T> | null, null>;

    /**
     * Find the first RssNews that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssNewsFindFirstOrThrowArgs} args - Arguments to find a RssNews
     * @example
     * // Get one RssNews
     * const rssNews = await prisma.rssNews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends RssNewsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RssNewsFindFirstOrThrowArgs>
    ): Prisma__RssNewsClient<RssNewsGetPayload<T>>;

    /**
     * Find zero or more RssNews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssNewsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RssNews
     * const rssNews = await prisma.rssNews.findMany()
     *
     * // Get first 10 RssNews
     * const rssNews = await prisma.rssNews.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rssNewsWithIdOnly = await prisma.rssNews.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends RssNewsFindManyArgs>(
      args?: SelectSubset<T, RssNewsFindManyArgs>
    ): Prisma.PrismaPromise<Array<RssNewsGetPayload<T>>>;

    /**
     * Create a RssNews.
     * @param {RssNewsCreateArgs} args - Arguments to create a RssNews.
     * @example
     * // Create one RssNews
     * const RssNews = await prisma.rssNews.create({
     *   data: {
     *     // ... data to create a RssNews
     *   }
     * })
     *
     **/
    create<T extends RssNewsCreateArgs>(
      args: SelectSubset<T, RssNewsCreateArgs>
    ): Prisma__RssNewsClient<RssNewsGetPayload<T>>;

    /**
     * Create many RssNews.
     *     @param {RssNewsCreateManyArgs} args - Arguments to create many RssNews.
     *     @example
     *     // Create many RssNews
     *     const rssNews = await prisma.rssNews.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends RssNewsCreateManyArgs>(
      args?: SelectSubset<T, RssNewsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a RssNews.
     * @param {RssNewsDeleteArgs} args - Arguments to delete one RssNews.
     * @example
     * // Delete one RssNews
     * const RssNews = await prisma.rssNews.delete({
     *   where: {
     *     // ... filter to delete one RssNews
     *   }
     * })
     *
     **/
    delete<T extends RssNewsDeleteArgs>(
      args: SelectSubset<T, RssNewsDeleteArgs>
    ): Prisma__RssNewsClient<RssNewsGetPayload<T>>;

    /**
     * Update one RssNews.
     * @param {RssNewsUpdateArgs} args - Arguments to update one RssNews.
     * @example
     * // Update one RssNews
     * const rssNews = await prisma.rssNews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends RssNewsUpdateArgs>(
      args: SelectSubset<T, RssNewsUpdateArgs>
    ): Prisma__RssNewsClient<RssNewsGetPayload<T>>;

    /**
     * Delete zero or more RssNews.
     * @param {RssNewsDeleteManyArgs} args - Arguments to filter RssNews to delete.
     * @example
     * // Delete a few RssNews
     * const { count } = await prisma.rssNews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends RssNewsDeleteManyArgs>(
      args?: SelectSubset<T, RssNewsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RssNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssNewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RssNews
     * const rssNews = await prisma.rssNews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends RssNewsUpdateManyArgs>(
      args: SelectSubset<T, RssNewsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one RssNews.
     * @param {RssNewsUpsertArgs} args - Arguments to update or create a RssNews.
     * @example
     * // Update or create a RssNews
     * const rssNews = await prisma.rssNews.upsert({
     *   create: {
     *     // ... data to create a RssNews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RssNews we want to update
     *   }
     * })
     **/
    upsert<T extends RssNewsUpsertArgs>(
      args: SelectSubset<T, RssNewsUpsertArgs>
    ): Prisma__RssNewsClient<RssNewsGetPayload<T>>;

    /**
     * Find zero or more RssNews that matches the filter.
     * @param {RssNewsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const rssNews = await prisma.rssNews.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: RssNewsFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a RssNews.
     * @param {RssNewsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const rssNews = await prisma.rssNews.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(
      args?: RssNewsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of RssNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssNewsCountArgs} args - Arguments to filter RssNews to count.
     * @example
     * // Count the number of RssNews
     * const count = await prisma.rssNews.count({
     *   where: {
     *     // ... the filter for the RssNews we want to count
     *   }
     * })
     **/
    count<T extends RssNewsCountArgs>(
      args?: Subset<T, RssNewsCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], RssNewsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RssNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssNewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RssNewsAggregateArgs>(
      args: Subset<T, RssNewsAggregateArgs>
    ): Prisma.PrismaPromise<GetRssNewsAggregateType<T>>;

    /**
     * Group by RssNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RssNewsGroupByArgs} args - Group by arguments.
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
      T extends RssNewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RssNewsGroupByArgs["orderBy"] }
        : { orderBy?: RssNewsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, RssNewsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetRssNewsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RssNews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RssNewsClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * RssNews base type for findUnique actions
   */
  export type RssNewsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RssNews
     */
    select?: RssNewsSelect | null;
    /**
     * Filter, which RssNews to fetch.
     */
    where: RssNewsWhereUniqueInput;
  };

  /**
   * RssNews findUnique
   */
  export interface RssNewsFindUniqueArgs extends RssNewsFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * RssNews findUniqueOrThrow
   */
  export type RssNewsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RssNews
     */
    select?: RssNewsSelect | null;
    /**
     * Filter, which RssNews to fetch.
     */
    where: RssNewsWhereUniqueInput;
  };

  /**
   * RssNews base type for findFirst actions
   */
  export type RssNewsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RssNews
     */
    select?: RssNewsSelect | null;
    /**
     * Filter, which RssNews to fetch.
     */
    where?: RssNewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RssNews to fetch.
     */
    orderBy?: Enumerable<RssNewsOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RssNews.
     */
    cursor?: RssNewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RssNews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RssNews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RssNews.
     */
    distinct?: Enumerable<RssNewsScalarFieldEnum>;
  };

  /**
   * RssNews findFirst
   */
  export interface RssNewsFindFirstArgs extends RssNewsFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * RssNews findFirstOrThrow
   */
  export type RssNewsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RssNews
     */
    select?: RssNewsSelect | null;
    /**
     * Filter, which RssNews to fetch.
     */
    where?: RssNewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RssNews to fetch.
     */
    orderBy?: Enumerable<RssNewsOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RssNews.
     */
    cursor?: RssNewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RssNews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RssNews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RssNews.
     */
    distinct?: Enumerable<RssNewsScalarFieldEnum>;
  };

  /**
   * RssNews findMany
   */
  export type RssNewsFindManyArgs = {
    /**
     * Select specific fields to fetch from the RssNews
     */
    select?: RssNewsSelect | null;
    /**
     * Filter, which RssNews to fetch.
     */
    where?: RssNewsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RssNews to fetch.
     */
    orderBy?: Enumerable<RssNewsOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RssNews.
     */
    cursor?: RssNewsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RssNews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RssNews.
     */
    skip?: number;
    distinct?: Enumerable<RssNewsScalarFieldEnum>;
  };

  /**
   * RssNews create
   */
  export type RssNewsCreateArgs = {
    /**
     * Select specific fields to fetch from the RssNews
     */
    select?: RssNewsSelect | null;
    /**
     * The data needed to create a RssNews.
     */
    data: XOR<RssNewsCreateInput, RssNewsUncheckedCreateInput>;
  };

  /**
   * RssNews createMany
   */
  export type RssNewsCreateManyArgs = {
    /**
     * The data used to create many RssNews.
     */
    data: Enumerable<RssNewsCreateManyInput>;
  };

  /**
   * RssNews update
   */
  export type RssNewsUpdateArgs = {
    /**
     * Select specific fields to fetch from the RssNews
     */
    select?: RssNewsSelect | null;
    /**
     * The data needed to update a RssNews.
     */
    data: XOR<RssNewsUpdateInput, RssNewsUncheckedUpdateInput>;
    /**
     * Choose, which RssNews to update.
     */
    where: RssNewsWhereUniqueInput;
  };

  /**
   * RssNews updateMany
   */
  export type RssNewsUpdateManyArgs = {
    /**
     * The data used to update RssNews.
     */
    data: XOR<RssNewsUpdateManyMutationInput, RssNewsUncheckedUpdateManyInput>;
    /**
     * Filter which RssNews to update
     */
    where?: RssNewsWhereInput;
  };

  /**
   * RssNews upsert
   */
  export type RssNewsUpsertArgs = {
    /**
     * Select specific fields to fetch from the RssNews
     */
    select?: RssNewsSelect | null;
    /**
     * The filter to search for the RssNews to update in case it exists.
     */
    where: RssNewsWhereUniqueInput;
    /**
     * In case the RssNews found by the `where` argument doesn't exist, create a new RssNews with this data.
     */
    create: XOR<RssNewsCreateInput, RssNewsUncheckedCreateInput>;
    /**
     * In case the RssNews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RssNewsUpdateInput, RssNewsUncheckedUpdateInput>;
  };

  /**
   * RssNews delete
   */
  export type RssNewsDeleteArgs = {
    /**
     * Select specific fields to fetch from the RssNews
     */
    select?: RssNewsSelect | null;
    /**
     * Filter which RssNews to delete.
     */
    where: RssNewsWhereUniqueInput;
  };

  /**
   * RssNews deleteMany
   */
  export type RssNewsDeleteManyArgs = {
    /**
     * Filter which RssNews to delete
     */
    where?: RssNewsWhereInput;
  };

  /**
   * RssNews findRaw
   */
  export type RssNewsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * RssNews aggregateRaw
   */
  export type RssNewsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * RssNews without action
   */
  export type RssNewsArgs = {
    /**
     * Select specific fields to fetch from the RssNews
     */
    select?: RssNewsSelect | null;
  };

  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const FeedRssScalarFieldEnum: {
    id: "id";
    title: "title";
    name: "name";
    description: "description";
    img_url: "img_url";
    pubDate: "pubDate";
    media: "media";
    categories: "categories";
    link: "link";
    source: "source";
  };

  export type FeedRssScalarFieldEnum =
    (typeof FeedRssScalarFieldEnum)[keyof typeof FeedRssScalarFieldEnum];

  export const PostScalarFieldEnum: {
    id: "id";
    title: "title";
    text: "text";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    content: "content";
    published: "published";
    userId: "userId";
  };

  export type PostScalarFieldEnum =
    (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const RssNewsScalarFieldEnum: {
    id: "id";
    title: "title";
    name: "name";
    description: "description";
    img_url: "img_url";
    pubDate: "pubDate";
    media: "media";
    categories: "categories";
    link: "link";
    source: "source";
  };

  export type RssNewsScalarFieldEnum =
    (typeof RssNewsScalarFieldEnum)[keyof typeof RssNewsScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const UserScalarFieldEnum: {
    id: "id";
    name: "name";
    email: "email";
    emailVerified: "emailVerified";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  /**
   * Deep Input Types
   */

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>;
    OR?: Enumerable<PostWhereInput>;
    NOT?: Enumerable<PostWhereInput>;
    id?: StringFilter | string;
    title?: StringFilter | string;
    text?: StringNullableFilter | string | null;
    createdAt?: DateTimeNullableFilter | Date | string | null;
    updatedAt?: DateTimeNullableFilter | Date | string | null;
    content?: StringNullableFilter | string | null;
    published?: BoolFilter | boolean;
    userId?: StringFilter | string;
    author?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type PostOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    content?: SortOrder;
    published?: SortOrder;
    userId?: SortOrder;
    author?: UserOrderByWithRelationInput;
  };

  export type PostWhereUniqueInput = {
    id?: string;
  };

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    content?: SortOrder;
    published?: SortOrder;
    userId?: SortOrder;
    _count?: PostCountOrderByAggregateInput;
    _max?: PostMaxOrderByAggregateInput;
    _min?: PostMinOrderByAggregateInput;
  };

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>;
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    title?: StringWithAggregatesFilter | string;
    text?: StringNullableWithAggregatesFilter | string | null;
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null;
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null;
    content?: StringNullableWithAggregatesFilter | string | null;
    published?: BoolWithAggregatesFilter | boolean;
    userId?: StringWithAggregatesFilter | string;
  };

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>;
    OR?: Enumerable<UserWhereInput>;
    NOT?: Enumerable<UserWhereInput>;
    id?: StringFilter | string;
    name?: StringNullableFilter | string | null;
    email?: StringFilter | string;
    emailVerified?: DateTimeNullableFilter | Date | string | null;
    posts?: PostListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    posts?: PostOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = {
    id?: string;
    email?: string;
  };

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>;
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    name?: StringNullableWithAggregatesFilter | string | null;
    email?: StringWithAggregatesFilter | string;
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null;
  };

  export type FeedRssWhereInput = {
    AND?: Enumerable<FeedRssWhereInput>;
    OR?: Enumerable<FeedRssWhereInput>;
    NOT?: Enumerable<FeedRssWhereInput>;
    id?: StringFilter | string;
    title?: StringNullableFilter | string | null;
    name?: StringNullableFilter | string | null;
    description?: StringNullableFilter | string | null;
    img_url?: StringNullableFilter | string | null;
    pubDate?: StringNullableFilter | string | null;
    media?: StringNullableFilter | string | null;
    categories?: StringNullableListFilter;
    link?: StringNullableFilter | string | null;
    source?: StringNullableFilter | string | null;
  };

  export type FeedRssOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    img_url?: SortOrder;
    pubDate?: SortOrder;
    media?: SortOrder;
    categories?: SortOrder;
    link?: SortOrder;
    source?: SortOrder;
  };

  export type FeedRssWhereUniqueInput = {
    id?: string;
  };

  export type FeedRssOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    img_url?: SortOrder;
    pubDate?: SortOrder;
    media?: SortOrder;
    categories?: SortOrder;
    link?: SortOrder;
    source?: SortOrder;
    _count?: FeedRssCountOrderByAggregateInput;
    _max?: FeedRssMaxOrderByAggregateInput;
    _min?: FeedRssMinOrderByAggregateInput;
  };

  export type FeedRssScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FeedRssScalarWhereWithAggregatesInput>;
    OR?: Enumerable<FeedRssScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<FeedRssScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    title?: StringNullableWithAggregatesFilter | string | null;
    name?: StringNullableWithAggregatesFilter | string | null;
    description?: StringNullableWithAggregatesFilter | string | null;
    img_url?: StringNullableWithAggregatesFilter | string | null;
    pubDate?: StringNullableWithAggregatesFilter | string | null;
    media?: StringNullableWithAggregatesFilter | string | null;
    categories?: StringNullableListFilter;
    link?: StringNullableWithAggregatesFilter | string | null;
    source?: StringNullableWithAggregatesFilter | string | null;
  };

  export type RssNewsWhereInput = {
    AND?: Enumerable<RssNewsWhereInput>;
    OR?: Enumerable<RssNewsWhereInput>;
    NOT?: Enumerable<RssNewsWhereInput>;
    id?: StringFilter | string;
    title?: StringNullableFilter | string | null;
    name?: StringNullableFilter | string | null;
    description?: StringNullableFilter | string | null;
    img_url?: StringNullableFilter | string | null;
    pubDate?: StringNullableFilter | string | null;
    media?: StringNullableFilter | string | null;
    categories?: StringNullableListFilter;
    link?: StringNullableFilter | string | null;
    source?: StringNullableFilter | string | null;
  };

  export type RssNewsOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    img_url?: SortOrder;
    pubDate?: SortOrder;
    media?: SortOrder;
    categories?: SortOrder;
    link?: SortOrder;
    source?: SortOrder;
  };

  export type RssNewsWhereUniqueInput = {
    id?: string;
    link?: string;
  };

  export type RssNewsOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    img_url?: SortOrder;
    pubDate?: SortOrder;
    media?: SortOrder;
    categories?: SortOrder;
    link?: SortOrder;
    source?: SortOrder;
    _count?: RssNewsCountOrderByAggregateInput;
    _max?: RssNewsMaxOrderByAggregateInput;
    _min?: RssNewsMinOrderByAggregateInput;
  };

  export type RssNewsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RssNewsScalarWhereWithAggregatesInput>;
    OR?: Enumerable<RssNewsScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<RssNewsScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    title?: StringNullableWithAggregatesFilter | string | null;
    name?: StringNullableWithAggregatesFilter | string | null;
    description?: StringNullableWithAggregatesFilter | string | null;
    img_url?: StringNullableWithAggregatesFilter | string | null;
    pubDate?: StringNullableWithAggregatesFilter | string | null;
    media?: StringNullableWithAggregatesFilter | string | null;
    categories?: StringNullableListFilter;
    link?: StringNullableWithAggregatesFilter | string | null;
    source?: StringNullableWithAggregatesFilter | string | null;
  };

  export type PostCreateInput = {
    id?: string;
    title: string;
    text?: string | null;
    createdAt?: Date | string | null;
    updatedAt?: Date | string | null;
    content?: string | null;
    published?: boolean;
    author: UserCreateNestedOneWithoutPostsInput;
  };

  export type PostUncheckedCreateInput = {
    id?: string;
    title: string;
    text?: string | null;
    createdAt?: Date | string | null;
    updatedAt?: Date | string | null;
    content?: string | null;
    published?: boolean;
    userId: string;
  };

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    text?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
  };

  export type PostUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    text?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type PostCreateManyInput = {
    id?: string;
    title: string;
    text?: string | null;
    createdAt?: Date | string | null;
    updatedAt?: Date | string | null;
    content?: string | null;
    published?: boolean;
    userId: string;
  };

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    text?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type PostUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string;
    text?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserCreateInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    posts?: PostCreateNestedManyWithoutAuthorInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
  };

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type FeedRssCreateInput = {
    id?: string;
    title?: string | null;
    name?: string | null;
    description?: string | null;
    img_url?: string | null;
    pubDate?: string | null;
    media?: string | null;
    categories?: FeedRssCreatecategoriesInput | Enumerable<string>;
    link?: string | null;
    source?: string | null;
  };

  export type FeedRssUncheckedCreateInput = {
    id?: string;
    title?: string | null;
    name?: string | null;
    description?: string | null;
    img_url?: string | null;
    pubDate?: string | null;
    media?: string | null;
    categories?: FeedRssCreatecategoriesInput | Enumerable<string>;
    link?: string | null;
    source?: string | null;
  };

  export type FeedRssUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    img_url?: NullableStringFieldUpdateOperationsInput | string | null;
    pubDate?: NullableStringFieldUpdateOperationsInput | string | null;
    media?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: FeedRssUpdatecategoriesInput | Enumerable<string>;
    link?: NullableStringFieldUpdateOperationsInput | string | null;
    source?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type FeedRssUncheckedUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    img_url?: NullableStringFieldUpdateOperationsInput | string | null;
    pubDate?: NullableStringFieldUpdateOperationsInput | string | null;
    media?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: FeedRssUpdatecategoriesInput | Enumerable<string>;
    link?: NullableStringFieldUpdateOperationsInput | string | null;
    source?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type FeedRssCreateManyInput = {
    id?: string;
    title?: string | null;
    name?: string | null;
    description?: string | null;
    img_url?: string | null;
    pubDate?: string | null;
    media?: string | null;
    categories?: FeedRssCreatecategoriesInput | Enumerable<string>;
    link?: string | null;
    source?: string | null;
  };

  export type FeedRssUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    img_url?: NullableStringFieldUpdateOperationsInput | string | null;
    pubDate?: NullableStringFieldUpdateOperationsInput | string | null;
    media?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: FeedRssUpdatecategoriesInput | Enumerable<string>;
    link?: NullableStringFieldUpdateOperationsInput | string | null;
    source?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type FeedRssUncheckedUpdateManyInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    img_url?: NullableStringFieldUpdateOperationsInput | string | null;
    pubDate?: NullableStringFieldUpdateOperationsInput | string | null;
    media?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: FeedRssUpdatecategoriesInput | Enumerable<string>;
    link?: NullableStringFieldUpdateOperationsInput | string | null;
    source?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type RssNewsCreateInput = {
    id?: string;
    title?: string | null;
    name?: string | null;
    description?: string | null;
    img_url?: string | null;
    pubDate?: string | null;
    media?: string | null;
    categories?: RssNewsCreatecategoriesInput | Enumerable<string>;
    link?: string | null;
    source?: string | null;
  };

  export type RssNewsUncheckedCreateInput = {
    id?: string;
    title?: string | null;
    name?: string | null;
    description?: string | null;
    img_url?: string | null;
    pubDate?: string | null;
    media?: string | null;
    categories?: RssNewsCreatecategoriesInput | Enumerable<string>;
    link?: string | null;
    source?: string | null;
  };

  export type RssNewsUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    img_url?: NullableStringFieldUpdateOperationsInput | string | null;
    pubDate?: NullableStringFieldUpdateOperationsInput | string | null;
    media?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: RssNewsUpdatecategoriesInput | Enumerable<string>;
    link?: NullableStringFieldUpdateOperationsInput | string | null;
    source?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type RssNewsUncheckedUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    img_url?: NullableStringFieldUpdateOperationsInput | string | null;
    pubDate?: NullableStringFieldUpdateOperationsInput | string | null;
    media?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: RssNewsUpdatecategoriesInput | Enumerable<string>;
    link?: NullableStringFieldUpdateOperationsInput | string | null;
    source?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type RssNewsCreateManyInput = {
    id?: string;
    title?: string | null;
    name?: string | null;
    description?: string | null;
    img_url?: string | null;
    pubDate?: string | null;
    media?: string | null;
    categories?: RssNewsCreatecategoriesInput | Enumerable<string>;
    link?: string | null;
    source?: string | null;
  };

  export type RssNewsUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    img_url?: NullableStringFieldUpdateOperationsInput | string | null;
    pubDate?: NullableStringFieldUpdateOperationsInput | string | null;
    media?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: RssNewsUpdatecategoriesInput | Enumerable<string>;
    link?: NullableStringFieldUpdateOperationsInput | string | null;
    source?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type RssNewsUncheckedUpdateManyInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    img_url?: NullableStringFieldUpdateOperationsInput | string | null;
    pubDate?: NullableStringFieldUpdateOperationsInput | string | null;
    media?: NullableStringFieldUpdateOperationsInput | string | null;
    categories?: RssNewsUpdatecategoriesInput | Enumerable<string>;
    link?: NullableStringFieldUpdateOperationsInput | string | null;
    source?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type StringFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringFilter | string;
  };

  export type StringNullableFilter = {
    equals?: string | null;
    in?: Enumerable<string> | null;
    notIn?: Enumerable<string> | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringNullableFilter | string | null;
    isSet?: boolean;
  };

  export type DateTimeNullableFilter = {
    equals?: Date | string | null;
    in?: Enumerable<Date> | Enumerable<string> | null;
    notIn?: Enumerable<Date> | Enumerable<string> | null;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeNullableFilter | Date | string | null;
    isSet?: boolean;
  };

  export type BoolFilter = {
    equals?: boolean;
    not?: NestedBoolFilter | boolean;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    content?: SortOrder;
    published?: SortOrder;
    userId?: SortOrder;
  };

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    content?: SortOrder;
    published?: SortOrder;
    userId?: SortOrder;
  };

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    text?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    content?: SortOrder;
    published?: SortOrder;
    userId?: SortOrder;
  };

  export type StringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter | string;
    _count?: NestedIntFilter;
    _min?: NestedStringFilter;
    _max?: NestedStringFilter;
  };

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null;
    in?: Enumerable<string> | null;
    notIn?: Enumerable<string> | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter | string | null;
    _count?: NestedIntNullableFilter;
    _min?: NestedStringNullableFilter;
    _max?: NestedStringNullableFilter;
    isSet?: boolean;
  };

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null;
    in?: Enumerable<Date> | Enumerable<string> | null;
    notIn?: Enumerable<Date> | Enumerable<string> | null;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null;
    _count?: NestedIntNullableFilter;
    _min?: NestedDateTimeNullableFilter;
    _max?: NestedDateTimeNullableFilter;
    isSet?: boolean;
  };

  export type BoolWithAggregatesFilter = {
    equals?: boolean;
    not?: NestedBoolWithAggregatesFilter | boolean;
    _count?: NestedIntFilter;
    _min?: NestedBoolFilter;
    _max?: NestedBoolFilter;
  };

  export type PostListRelationFilter = {
    every?: PostWhereInput;
    some?: PostWhereInput;
    none?: PostWhereInput;
  };

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
  };

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null;
    has?: string | null;
    hasEvery?: Enumerable<string>;
    hasSome?: Enumerable<string>;
    isEmpty?: boolean;
  };

  export type FeedRssCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    img_url?: SortOrder;
    pubDate?: SortOrder;
    media?: SortOrder;
    categories?: SortOrder;
    link?: SortOrder;
    source?: SortOrder;
  };

  export type FeedRssMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    img_url?: SortOrder;
    pubDate?: SortOrder;
    media?: SortOrder;
    link?: SortOrder;
    source?: SortOrder;
  };

  export type FeedRssMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    img_url?: SortOrder;
    pubDate?: SortOrder;
    media?: SortOrder;
    link?: SortOrder;
    source?: SortOrder;
  };

  export type RssNewsCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    img_url?: SortOrder;
    pubDate?: SortOrder;
    media?: SortOrder;
    categories?: SortOrder;
    link?: SortOrder;
    source?: SortOrder;
  };

  export type RssNewsMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    img_url?: SortOrder;
    pubDate?: SortOrder;
    media?: SortOrder;
    link?: SortOrder;
    source?: SortOrder;
  };

  export type RssNewsMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    img_url?: SortOrder;
    pubDate?: SortOrder;
    media?: SortOrder;
    link?: SortOrder;
    source?: SortOrder;
  };

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    connect?: UserWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
    unset?: boolean;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    upsert?: UserUpsertWithoutPostsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >;
  };

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutAuthorInput>,
      Enumerable<PostUncheckedCreateWithoutAuthorInput>
    >;
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>;
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: Enumerable<PostWhereUniqueInput>;
  };

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutAuthorInput>,
      Enumerable<PostUncheckedCreateWithoutAuthorInput>
    >;
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>;
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: Enumerable<PostWhereUniqueInput>;
  };

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutAuthorInput>,
      Enumerable<PostUncheckedCreateWithoutAuthorInput>
    >;
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>;
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: Enumerable<PostWhereUniqueInput>;
    disconnect?: Enumerable<PostWhereUniqueInput>;
    delete?: Enumerable<PostWhereUniqueInput>;
    connect?: Enumerable<PostWhereUniqueInput>;
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>;
    deleteMany?: Enumerable<PostScalarWhereInput>;
  };

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutAuthorInput>,
      Enumerable<PostUncheckedCreateWithoutAuthorInput>
    >;
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>;
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: Enumerable<PostWhereUniqueInput>;
    disconnect?: Enumerable<PostWhereUniqueInput>;
    delete?: Enumerable<PostWhereUniqueInput>;
    connect?: Enumerable<PostWhereUniqueInput>;
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>;
    deleteMany?: Enumerable<PostScalarWhereInput>;
  };

  export type FeedRssCreatecategoriesInput = {
    set: Enumerable<string>;
  };

  export type FeedRssUpdatecategoriesInput = {
    set?: Enumerable<string>;
    push?: string | Enumerable<string>;
  };

  export type RssNewsCreatecategoriesInput = {
    set: Enumerable<string>;
  };

  export type RssNewsUpdatecategoriesInput = {
    set?: Enumerable<string>;
    push?: string | Enumerable<string>;
  };

  export type NestedStringFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringFilter | string;
  };

  export type NestedStringNullableFilter = {
    equals?: string | null;
    in?: Enumerable<string> | null;
    notIn?: Enumerable<string> | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringNullableFilter | string | null;
    isSet?: boolean;
  };

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null;
    in?: Enumerable<Date> | Enumerable<string> | null;
    notIn?: Enumerable<Date> | Enumerable<string> | null;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeNullableFilter | Date | string | null;
    isSet?: boolean;
  };

  export type NestedBoolFilter = {
    equals?: boolean;
    not?: NestedBoolFilter | boolean;
  };

  export type NestedStringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringWithAggregatesFilter | string;
    _count?: NestedIntFilter;
    _min?: NestedStringFilter;
    _max?: NestedStringFilter;
  };

  export type NestedIntFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntFilter | number;
  };

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null;
    in?: Enumerable<string> | null;
    notIn?: Enumerable<string> | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringNullableWithAggregatesFilter | string | null;
    _count?: NestedIntNullableFilter;
    _min?: NestedStringNullableFilter;
    _max?: NestedStringNullableFilter;
    isSet?: boolean;
  };

  export type NestedIntNullableFilter = {
    equals?: number | null;
    in?: Enumerable<number> | null;
    notIn?: Enumerable<number> | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntNullableFilter | number | null;
    isSet?: boolean;
  };

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null;
    in?: Enumerable<Date> | Enumerable<string> | null;
    notIn?: Enumerable<Date> | Enumerable<string> | null;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null;
    _count?: NestedIntNullableFilter;
    _min?: NestedDateTimeNullableFilter;
    _max?: NestedDateTimeNullableFilter;
    isSet?: boolean;
  };

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean;
    not?: NestedBoolWithAggregatesFilter | boolean;
    _count?: NestedIntFilter;
    _min?: NestedBoolFilter;
    _max?: NestedBoolFilter;
  };

  export type UserCreateWithoutPostsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
  };

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string;
    name?: string | null;
    email: string;
    emailVerified?: Date | string | null;
  };

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
  };

  export type UserUpsertWithoutPostsInput = {
    update: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >;
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
  };

  export type UserUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserUncheckedUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type PostCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    text?: string | null;
    createdAt?: Date | string | null;
    updatedAt?: Date | string | null;
    content?: string | null;
    published?: boolean;
  };

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    text?: string | null;
    createdAt?: Date | string | null;
    updatedAt?: Date | string | null;
    content?: string | null;
    published?: boolean;
  };

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >;
  };

  export type PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostCreateManyAuthorInput>;
  };

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    update: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >;
  };

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    data: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput;
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutPostsInput
    >;
  };

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>;
    OR?: Enumerable<PostScalarWhereInput>;
    NOT?: Enumerable<PostScalarWhereInput>;
    id?: StringFilter | string;
    title?: StringFilter | string;
    text?: StringNullableFilter | string | null;
    createdAt?: DateTimeNullableFilter | Date | string | null;
    updatedAt?: DateTimeNullableFilter | Date | string | null;
    content?: StringNullableFilter | string | null;
    published?: BoolFilter | boolean;
    userId?: StringFilter | string;
  };

  export type PostCreateManyAuthorInput = {
    id?: string;
    title: string;
    text?: string | null;
    createdAt?: Date | string | null;
    updatedAt?: Date | string | null;
    content?: string | null;
    published?: boolean;
  };

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string;
    text?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type PostUncheckedUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string;
    text?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    title?: StringFieldUpdateOperationsInput | string;
    text?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
